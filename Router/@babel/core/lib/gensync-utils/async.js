"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeAsync = maybeAsync;
exports.forwardAsync = forwardAsync;
exports.isThenable = isThenable;
exports.waitFor = exports.onFirstPause = exports.isAsync = void 0;

function _gensync() {
  const data = _interopRequireDefault(require("gensync"));

  _gensync = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const id = x => x;

const runGenerator = (0, _gensync().default)(function* (item) {
  return yield* item;
});
const isAsync = (0, _gensync().default)({
  sync: () => false,
  errback: cb => cb(null, true)
});
exports.isAsync = isAsync;

function maybeAsync(fn, message) {
  return (0, _gensync().default)({
    sync(...args) {
      const result = fn.apply(this, args);
      if (isThenable(result)) throw new Error(message);
      return result;
    },

    async(...args) {
      return Promise.resolve(fn.apply(this, args));
    }

  });
}

const withKind = (0, _gensync().default)({
  sync: cb => cb("sync"),
  async: cb => cb("async")
});

function forwardAsync(action, cb) {
  const g = (0, _gensync().default)(action);
  return withKind(kind => {
    const adapted = g[kind];
    return cb(adapted);
  });
}

const onFirstPause = (0, _gensync().default)({
  name: "onFirstPause",
  arity: 2,
  sync: function (item) {
    return runGenerator.sync(item);
  },
  errback: function (item, firstPause, cb) {
    let completed = false;
    runGenerator.errback(item, (err, value) => {
      completed = true;
      cb(err, value);
    });

    if (!completed) {
      firstPause();
    }
  }
});
exports.onFirstPause = onFirstPause;
const waitFor = (0, _gensync().default)({
  sync: id,
  async: id
});
exports.waitFor = waitFor;

function isThenable(val) {
  return !!val && (typeof val === "object" || typeof val === "function") && !!val.then && typeof val.then === "function";
}