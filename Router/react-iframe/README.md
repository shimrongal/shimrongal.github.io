# React Iframe

Simple React component for including an iframed page.

![Youtube in an iframe](screenshot.PNG)

The component is fully typescript-supported.

## Usage

```jsx
import Iframe from 'react-iframe'
<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
```

### Properties

**url** **(required)** - *string* the iframe url.

_all other attributes are optional_

**src** - *string* if set, overrides _url_.

**scrolling** - *string* not set if if not provided (deprecated in HTML5).

**overflow** - *string* default to "hidden".

**loading** - *string* (not added to DOM if not provided).

**frameBorder** - *number* default to "0" (deprecated in HTML5).

**position** - *string* (not added to DOM if not provided).

**id** - *string* if set, adds the id parameter with the given value.

**className** - *string* if set, adds the class parameter with the given value.

**display** - *string* defaults to "block"

**height** - *string* (1px > any number above 0, or 1% to 100%)

**width** - *string* (1px > any number above 0, or 1% to 100%)

**allowFullScreen** - if set, applies the allowFullScreen param (deprecated in HTML5). If set, *adds allow="fullscreen"*.

**sandbox** - add optional sandbox values ("allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation")

**allow** - add optional [_allow_](https://dev.chromium.org/Home/chromium-security/deprecating-permissions-in-cross-origin-iframes#TOC-To-continue-to-use-permissions-from-iframes-on-your-website) values ("geolocation microphone camera midi encrypted-media & more")

**styles** - add any additional styles here. Will (intentionally) override any of the props 
above. For instance:
```jsx
<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}/>
```

will set the height to 25px even though it was specified as 100% in the props.

A comprehensive overview of the iframe element is available from the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

# Development

All source code resides in the `src/` folder. The other code paths are generated by the tsc compiler. 

# When to use

This project provides a convenient TypeScript-enabled wrapper around the native HTML <iframe> tag. You can achieve the same functionality with the native tag. You do not need to use TypeScript in your project to consume this library. 