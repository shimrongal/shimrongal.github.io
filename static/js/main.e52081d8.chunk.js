(this.webpackJsonptoolbox_app=this.webpackJsonptoolbox_app||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(33),i=n.n(r),o=(n(80),n(10)),s=n(27),l=n(11),j=(n(81),n(12)),d=n.n(j),u=n(16),b=n(23),h=n.n(b),p=n(43),O=function e(t,n,c){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Object(p.a)(this,e),this.inCart="false"!==a&&("true"===a||a),"string"===typeof c){var r=parseInt(c);isNaN(r)||r.toString().length!==c.length?(this.itemQuantity=-1,console.error("Bed input for itemQuantity")):this.itemQuantity=r}else this.itemQuantity=c;this.itemId=t+"_"+n,this.itemName=t,this.itemBrand=n},x=n(71),m=(n(100),n(116),x.a.initializeApp({apiKey:"AIzaSyA_NrBrptgCAabi1YGFwWPkrRXJRuz7eZM",authDomain:"toolbox-94ef9.firebaseapp.com",databaseURL:"https://toolbox-94ef9-default-rtdb.firebaseio.com",projectId:"toolbox-94ef9",storageBucket:"toolbox-94ef9.appspot.com",messagingSenderId:"434769717697",appId:"1:434769717697:web:5662999cd92b8a03f06740",measurementId:"G-QJFMVV6NXT"})),f="shopping-lists",g=m.firestore(),v=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("israel_city_list.json").then((function(e){t(e.data.map((function(e){return e.hebrew_name})))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.collection(f).doc(t).update({deleted:!0}).then((function(){console.log("deleteShoppingList deleted: true")})).catch((function(e){console.error("deleteShoppingList error : "+e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.collection(f).doc(t).collection(t+"-data").doc(n.itemName+"_"+n.itemBrand).update({deleted:!0}).then((function(){console.log("deleteShoppingItem deleted: true")})).catch((function(e){console.error("deleteShoppingItem error : "+e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=n(2),C=a.a.createContext(),k=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(o.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(!0),l=Object(o.a)(s,2),j=l[0],d=l[1];return Object(c.useEffect)((function(){m.auth().onAuthStateChanged((function(e){i(e),d(!1)}))}),[]),j?Object(S.jsx)(S.Fragment,{children:"Loading..."}):Object(S.jsx)(C.Provider,{value:{currentUser:r},children:t})};n(103),n(104);var N=function(e){var t=e.item,n={animationDelay:.5*e.index+"s"};return Object(S.jsxs)("ul",{id:"c-oref-warning-container",style:n,children:[Object(S.jsx)("li",{children:t.data}),Object(S.jsx)("li",{children:t.alertDate}),Object(S.jsx)("li",{children:t.title})]})};var I=function(e){var t=e.alerts.map((function(e,t){return Object(S.jsx)(N,{item:e,index:t},e.data+"_"+e.alertDate)}));return Object(S.jsx)("div",{children:t})},L=function(e){h.a.get("http://www.oref.org.il/WarningMessages/History/AlertsHistory.json").then((function(t){for(var n=[],c=0;c<10;c++)n[c]=t.data[c];e(n)})).catch((function(e){console.error("OrefWarningMessagesManager error : "+e)}))};n(105);var B=function(e){var t=e.weatherObject;return"undefined"===typeof t?Object(S.jsx)("div",{children:"WeatherObject is not ready yet "}):Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{id:"c-weather-widget-container",children:Object(S.jsxs)("div",{className:"row c-weather-widget-main-content-container",children:[Object(S.jsx)("h1",{children:t.name}),Object(S.jsx)("div",{className:"weather-icon-container",children:Object(S.jsx)("img",{src:"http://openweathermap.org/img/wn/"+t.weather[0].icon+".png"})}),Object(S.jsxs)("div",{className:"current-conditions",children:[Object(S.jsx)("div",{children:Math.round(t.main.temp)}),Object(S.jsx)("div",{children:t.weather[0].description})]})]})}),Object(S.jsx)("div",{className:"c-weather-widget-more-info-container",children:Object(S.jsx)("div",{children:Object(S.jsxs)("ul",{className:"row",children:[Object(S.jsx)("li",{children:"Humidity: ".concat(t.main.humidity,"%")}),Object(S.jsx)("li",{children:"Wind: ".concat(Math.round(t.wind.speed)," m/s")}),Object(S.jsx)("li",{children:"Cloud cover: ".concat(t.clouds.all,"%")})]})})})]})},E=function(e){var t=e.weatherObject,n=Object(c.useState)(),a=Object(o.a)(n,2),r=a[0],i=a[1];Object(c.useEffect)((function(){L(i);var e=setInterval((function(){L(i)}),5e3);return function(){clearInterval(e)}}),[]);var s=Object(c.useContext)(C).currentUser;return"undefined"===typeof s||null===s?Object(S.jsx)(l.a,{to:"/login"}):Object(S.jsxs)("div",{children:["undefined"!==typeof t?Object(S.jsx)(B,{weatherObject:t}):Object(S.jsx)("div",{children:"No Weather Data yet "}),"undefined"!==typeof r?Object(S.jsx)(I,{alerts:r}):Object(S.jsx)("div",{children:"No Alerts"})]})},M=(n(110),n(53),n(119)),P=Object(l.h)((function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)(function(){var e=Object(u.a)(d.a.mark((function e(t){var n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,c=n.email,a=n.password,e.prev=2,e.next=5,m.auth().signInWithEmailAndPassword(c.value,a.value);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}());return Object(c.useContext)(C).currentUser?Object(S.jsx)(l.a,{to:"/"}):n?Object(S.jsx)(l.a,{to:"/signup"}):Object(S.jsxs)("div",{id:"p-login-container",children:[Object(S.jsxs)("div",{className:"p-col-info",children:[Object(S.jsx)("h1",{children:"Welcome to ToolBox App"}),Object(S.jsx)("p",{children:" This app should be your best friend your security and your BOSS ;) "}),Object(S.jsx)("p",{children:"App Main Features are:"}),Object(S.jsx)("p",{children:"Current weather (by open weather api)."}),Object(S.jsx)("p",{children:"Alerts from Pikod Aoref."}),Object(S.jsx)("p",{children:"Save your spot and give you direction to get back to it."}),Object(S.jsx)("p",{children:"Show all near Parking Lots."}),Object(S.jsx)("p",{children:"Shared shopping list."}),Object(S.jsx)("h6",{children:"Developed by GS-Dev "})]}),Object(S.jsxs)("div",{id:"p-login",children:[Object(S.jsx)("h1",{children:"Log in"}),Object(S.jsxs)(M.a,{id:"p-login-form",onSubmit:r,children:[Object(S.jsxs)(M.a.Group,{controlId:"formBasicEmail",children:[Object(S.jsx)(M.a.Label,{children:"Email address"}),Object(S.jsx)(M.a.Control,{name:"email",type:"email",placeholder:"Enter email"}),Object(S.jsx)(M.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(S.jsxs)(M.a.Group,{controlId:"formBasicPassword",children:[Object(S.jsx)(M.a.Label,{children:"Password"}),Object(S.jsx)(M.a.Control,{name:"password",type:"password",placeholder:"Password"})]}),Object(S.jsxs)(M.a.Group,{className:"flex-group",controlId:"formBasicCheckbox",children:[Object(S.jsx)(M.a.Label,{style:{visibility:"hidden"},children:"Forgot password?"}),Object(S.jsx)("button",{variant:"primary",onClick:function(){return a(!0)},children:"SignUp"})]}),Object(S.jsx)("button",{variant:"primary",type:"submit",children:"Submit"})]})]})]})})),T=(n(112),n(73)),G=function e(t,n,c,a){Object(p.a)(this,e),this.firstName=t,this.lastName=n,this.email=c,this.address=a},A=Object(l.h)((function(e){var t=e.userList,n=e.updateUsersList,a=Object(c.useCallback)(function(){var e=Object(u.a)(d.a.mark((function e(c){var a,r,i,o,s,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a=c.target.elements,r=a.email,i=a.password,o=a.firstName,s=a.lastName,l=a.address,n(t.concat(new G(o.value,s.value,r.value,i.value,l.value))),e.prev=3,e.next=6,m.auth().createUserWithEmailAndPassword(r.value,i.value);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}());return Object(c.useContext)(C).currentUser?Object(S.jsx)(l.a,{to:"/"}):Object(S.jsxs)("div",{id:"p-sign-in",children:[Object(S.jsx)("h1",{children:"Sign up"}),Object(S.jsxs)(M.a,{onSubmit:a,children:[Object(S.jsxs)(M.a.Group,{controlId:"formGridFirestName",children:[Object(S.jsx)(M.a.Label,{children:"First Name"}),Object(S.jsx)(M.a.Control,{name:"firstName",placeholder:"Enter your first name"})]}),Object(S.jsxs)(M.a.Group,{controlId:"formGridLastName",children:[Object(S.jsx)(M.a.Label,{children:"Last Name"}),Object(S.jsx)(M.a.Control,{name:"lastName",placeholder:"Enter your last name"})]}),Object(S.jsxs)(M.a.Row,{children:[Object(S.jsxs)(M.a.Group,{as:T.a,controlId:"formGridEmail",children:[Object(S.jsx)(M.a.Label,{children:"Email"}),Object(S.jsx)(M.a.Control,{name:"email",type:"email",placeholder:"Enter email"})]}),Object(S.jsxs)(M.a.Group,{as:T.a,controlId:"formGridPassword",children:[Object(S.jsx)(M.a.Label,{children:"Password"}),Object(S.jsx)(M.a.Control,{name:"password",type:"password",placeholder:"Password"})]})]}),Object(S.jsxs)(M.a.Group,{controlId:"formGridAddress1",children:[Object(S.jsx)(M.a.Label,{children:"Address"}),Object(S.jsx)(M.a.Control,{name:"address",placeholder:"1234 Main St"})]}),Object(S.jsx)("button",{variant:"primary",type:"submit",children:"Submit"})]})]})})),F=n(50),_=n(75),Q=function(e){var t=e.component,n=Object(_.a)(e,["component"]),a=Object(c.useContext)(C).currentUser;return Object(S.jsx)(l.b,Object(F.a)(Object(F.a)({},n),{},{render:function(e){return a?Object(S.jsx)(t,Object(F.a)({},e)):Object(S.jsx)(l.a,{to:"/login"})}}))},V=(n(68),n(118));var U=function(e){var t=e.item;return Object(S.jsx)("option",{children:t})};var z=function(e){var t=e.show,n=e.onClose,a=e.whatToShow,r=e.setMapUrl,i=e.cities,s=e.parkingLocation,l=(e.mainBtnText,e.setMainBtnText),j=e.updateParkingLocation,d=Object(c.useState)(""),u=Object(o.a)(d,2),b=u[0],p=u[1],O=Object(c.useState)(""),x=Object(o.a)(O,2),m=x[0],f=x[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),w=(v[0],v[1],i.map((function(e,t){return Object(S.jsx)(U,{item:e})})));return Object(S.jsxs)(V.a,{show:t,onHide:n,size:"lg",children:[Object(S.jsx)(V.a.Header,{children:Object(S.jsx)(V.a.Title,{children:"Parking Address"})}),Object(S.jsx)(V.a.Body,{children:Object(S.jsxs)(M.a,{children:[Object(S.jsxs)(M.a.Group,{children:[Object(S.jsx)(M.a.Label,{children:"Street Address"}),Object(S.jsx)(M.a.Control,{value:b,onChange:function(e){return p(e.target.value)},placeholder:"Please insert parking spot street address"})]}),Object(S.jsxs)(M.a.Group,{children:[Object(S.jsx)(M.a.Label,{children:"City Name"}),Object(S.jsxs)(M.a.Control,{as:"select",defaultValue:"\u05d1\u05d7\u05e8 \u05e2\u05d9\u05e8",onChange:function(e){return f(e.target.value)},children:[Object(S.jsx)("option",{children:"\u05d1\u05d7\u05e8 \u05e2\u05d9\u05e8"}),w]})]})]})}),Object(S.jsxs)(V.a.Footer,{children:[Object(S.jsx)("button",{variant:"secondary",onClick:n,children:"Cancel"}),Object(S.jsx)("button",{variant:"primary",onClick:function(){var e=b+" "+m;"parkingLocation"===a?(j(e),r("https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=".concat(e)),l("Get directions")):"currentLocation"===a?r("https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=".concat(s,'"&destination=').concat(e,"&mode=walking")):"findParkingLot"===a&&h.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(e,"&key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI")).then((function(e){r("https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&center=".concat(e.data.results[0].geometry.location.lat,",").concat(e.data.results[0].geometry.location.lng,"&q=parking near ").concat(e.data.results[0].formatted_address))})).catch((function(e){console.error("error https://maps.googleapis.com/maps/api/geocode/json?address= : "+e)})),p(""),n()},children:"Create New Address"})]})]})},D=function(e,t,n,c,a,r,i){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,o=t.coords.longitude;e({lat:a,lng:o}),"parkingLocation"===n?(c("https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=".concat(a,",").concat(o)),i("Get directions")):"currentLocation"===n?c("https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=".concat(a,",").concat(o,"&destination=").concat(r.lat,",").concat(r.lng,"&mode=walking")):"findParkingLot"===n&&h.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(a,",").concat(o,"&key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI")).then((function(e){c("https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&center=".concat(e.data.results[0].geometry.location.lat,",").concat(e.data.results[0].geometry.location.lng,"&q=parking near ").concat(e.data.results[0].formatted_address))})).catch((function(e){console.error("error https://maps.googleapis.com/maps/api/geocode/json?address= : "+e)}))}),(function(){alert("Unable to retrieve your location"),t(!0),a(n)})):alert("Geolocation is not supported by your browser")};var R=function(e){var t=e.mainBtnText,n=e.onMainParkingButtonClick,c=e.onFindParkingButtonClick;return Object(S.jsxs)("div",{className:"p-parking-page-button-container",children:[Object(S.jsx)("button",{onClick:function(){return n()},children:t}),Object(S.jsx)("button",{onClick:function(){return c()},children:"Find parking lot"})]})};var W=function(e){var t=e.cities,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),j=Object(o.a)(s,2),d=j[0],u=j[1],b=Object(c.useState)("Save Parking"),h=Object(o.a)(b,2),p=h[0],O=h[1],x=Object(c.useState)(!1),m=Object(o.a)(x,2),f=m[0],g=m[1],v=Object(c.useState)(),w=Object(o.a)(v,2),y=w[0],k=w[1],N=Object(c.useState)(),I=Object(o.a)(N,2),L=(I[0],I[1],Object(c.useState)()),B=Object(o.a)(L,2),E=B[0],M=B[1],P=Object(c.useState)(),T=Object(o.a)(P,2),G=(T[0],T[1]),A=function(){document.getElementById("p-loader").className="lds-spinner","undefined"===typeof E&&"undefined"===typeof y?D(M,g,"parkingLocation",u,i,E,O):D(G,g,"currentLocation",u,i,E)},F=function(){document.getElementById("p-loader").className="lds-spinner",O("Save Parking"),k(),M(),D(G,g,"findParkingLot",u,i,E)},_=Object(c.useContext)(C).currentUser;return"undefined"===typeof _||null===_?Object(S.jsx)(l.a,{to:"/login"}):(""!==d&&(document.getElementById("p-loader").className=""),Object(S.jsxs)("div",{id:"p-parking-page-container",children:[""!==d?Object(S.jsxs)("div",{className:"p-parking-page-map-content-container",children:[Object(S.jsx)(R,{mainBtnText:p,onMainParkingButtonClick:A,onFindParkingButtonClick:function(){return F()}}),Object(S.jsx)("iframe",{width:"800",height:"600",style:{border:0},loading:"lazy",allowFullScreen:!0,src:d})]}):Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:"title-container",children:[Object(S.jsx)("h1",{children:"Would you like to park ?"}),Object(S.jsx)("img",{src:"./park_icon.png",alt:"parking_lot"})]}),Object(S.jsx)(R,{mainBtnText:p,onMainParkingButtonClick:A,onFindParkingButtonClick:function(){return F()}})]}),Object(S.jsxs)("div",{id:"p-loader",children:[Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{})]}),f?Object(S.jsx)(z,{show:f,onClose:function(){return g(!1)},whatToShow:r,setMapUrl:u,cities:t,parkingLocation:y,mainBtnText:p,setMainBtnText:O,updateParkingLocation:k}):Object(S.jsx)(S.Fragment,{})]}))},K=n(121),X=n(120);var H=function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.auth().signOut().then((function(){})).catch((function(e){console.error("Sign out error : "+console.error())}));case 2:return e.abrupt("return",Object(S.jsx)(l.a,{to:t,replace:!0}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(K.a,{bg:"light",expand:"lg",children:[Object(S.jsx)(K.a.Brand,{as:s.b,to:"/",children:"ToolBox"}),Object(S.jsx)(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsxs)(K.a.Collapse,{id:"basic-navbar-nav",children:[Object(S.jsxs)(X.a,{className:"mr-auto",children:[Object(S.jsx)(X.a.Link,{as:s.b,to:"/shopping_lists",children:"Shopping list"}),Object(S.jsx)(X.a.Link,{as:s.b,to:"/parking",children:"Parking"})]}),Object(S.jsx)("button",{onClick:function(){return e("/login")},children:"Sign out"})]})]})};n(113),n(69);var Y=function(e){var t=e.show,n=e.onClose,a=e.setUpdateList,r=Object(c.useState)(""),i=Object(o.a)(r,2),s=i[0],l=i[1];return Object(S.jsxs)(V.a,{show:t,onHide:n,size:"lg",children:[Object(S.jsx)(V.a.Header,{children:Object(S.jsx)(V.a.Title,{children:"New Shopping Cart"})}),Object(S.jsx)(V.a.Body,{children:Object(S.jsx)(M.a,{children:Object(S.jsxs)(M.a.Group,{controlId:"formGridFirestName",children:[Object(S.jsx)(M.a.Label,{children:"Cart Name"}),Object(S.jsx)(M.a.Control,{value:s,onChange:function(e){return l(e.target.value)},placeholder:"Enter cart name"})]})})}),Object(S.jsxs)(V.a.Footer,{children:[Object(S.jsx)("button",{variant:"secondary",onClick:n,children:"Cancel"}),Object(S.jsx)("button",{variant:"primary",onClick:function(){!function(e){g.collection(f).doc(e).set({deleted:!1}).catch((function(e){console.error("addShoppingCartItemToFireStore Error : "+e)}))}(s),l(""),a(),n()},children:"Create Shopping Item"})]})]})},q=n(32);var J=function(e){var t=e.item,n=e.setDeletedItem,c=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:n(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"p-shopping-list-body-container",children:[Object(S.jsx)(s.b,{to:{pathname:"/shopping_list",data:t},children:Object(S.jsx)("div",{className:"p-list-item-div p-list-item-title",children:t})}),Object(S.jsxs)("div",{className:"icon-container",onClick:c,children:[" ",Object(S.jsx)(q.b,{className:"icon-remove-cart"})," "]})]})};var Z=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),s=i[0],j=i[1],d=Object(c.useState)(!0),u=Object(o.a)(d,2),b=u[0],h=u[1],p=s?s.map((function(e,t){return Object(S.jsx)(J,{item:e,setDeletedItem:h},e+"_"+t)})):"",O=Object(c.useContext)(C).currentUser;return Object(c.useEffect)((function(){b&&(!function(e){g.collection(f).get().then((function(t){var n=[];t.forEach((function(e){e.data().deleted||n.push(e.id)})),e(n)}))}(j),h(!1))}),[b]),"undefined"===typeof O||null===O?Object(S.jsx)(l.a,{to:"/login"}):Object(S.jsxs)("div",{className:"p-container",children:[Object(S.jsxs)("div",{id:"p-shopping-lists-container",children:[Object(S.jsxs)("div",{id:"p-shopping-list-header-container",children:[Object(S.jsx)("p",{children:"Shopping Carts"}),Object(S.jsx)("span",{onClick:function(){return a(!0)},children:Object(S.jsx)(q.a,{})})]}),Object(S.jsx)("hr",{}),p]}),Object(S.jsx)(Y,{show:n,onClose:function(){return a(!1)},setUpdateList:function(){return h(!0)}})]})};var $=function(){var e=Object(c.useContext)(C).currentUser;return Object(S.jsxs)("div",{children:[e?Object(S.jsx)(H,{}):"",Object(S.jsxs)("div",{id:"p-not-found-container",children:[Object(S.jsx)("h1",{children:"Ooops!!! "}),Object(S.jsx)("h1",{children:"Page not found"}),Object(S.jsx)("img",{src:"./panda_404.png",alt:"404"}),Object(S.jsx)("h2",{children:"The page does not exist or unavailable"})]})]})},ee=n(36);n(114);var te=function(e){var t,n=e.currentListName,a=e.item,r=e.isChecked,i=e.setItemDeleted,s=Object(c.useState)(r),l=Object(o.a)(s,2),j=l[0],b=l[1],h=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n,a);case 2:i(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){!function(e,t,n){g.collection(f).doc(e).collection(e+"-data").doc(t.itemName+"_"+t.itemBrand).update({inCart:n}).catch((function(e){console.error("Error updating document: ",e)}))}(n,a,!j),b(!j)};return Object(S.jsxs)("ul",{className:"display-flex-row list-border-style-shopping-content",children:[Object(S.jsx)("li",{className:"shopping-item-col",children:Object(S.jsx)("h5",{children:a.itemName})}),Object(S.jsx)("li",{className:"shopping-item-col",children:Object(S.jsxs)("h5",{children:[a.itemBrand," "]})}),Object(S.jsx)("li",{className:"shopping-item-col",children:Object(S.jsx)("h5",{children:a.itemQuantity})}),Object(S.jsx)("li",{className:"shopping-item-checkbox-container",children:Object(S.jsx)("input",{className:"shopping-item-checkbox",type:"checkbox",checked:j,onChange:function(){return p()}})}),Object(S.jsx)("li",(t={className:"shopping-item-col"},Object(ee.a)(t,"className","icon-container"),Object(ee.a)(t,"onClick",h),Object(ee.a)(t,"children",Object(S.jsx)(q.b,{})),t))]})};var ne=function(e){var t=e.show,n=e.onClose,a=e.currentListName,r=e.currentShoppingList,i=e.updateShoppingList,s=Object(c.useState)(""),l=Object(o.a)(s,2),j=l[0],d=l[1],u=Object(c.useState)(""),b=Object(o.a)(u,2),h=b[0],p=b[1],x=Object(c.useState)(""),m=Object(o.a)(x,2),v=m[0],w=m[1];return Object(S.jsxs)(V.a,{show:t,onHide:n,size:"lg",children:[Object(S.jsx)(V.a.Header,{children:Object(S.jsx)(V.a.Title,{children:"New Shopping Item"})}),Object(S.jsx)(V.a.Body,{children:Object(S.jsxs)(M.a,{children:[Object(S.jsxs)(M.a.Group,{controlId:"formGridFirestName",children:[Object(S.jsx)(M.a.Label,{children:"Item Name"}),Object(S.jsx)(M.a.Control,{value:j,onChange:function(e){return d(e.target.value)},placeholder:"Enter item name"})]}),Object(S.jsxs)(M.a.Group,{controlId:"formGridLastName",children:[Object(S.jsx)(M.a.Label,{children:"Item Brand Name"}),Object(S.jsx)(M.a.Control,{value:h,onChange:function(e){return p(e.target.value)},placeholder:"Enter item brand"})]}),Object(S.jsxs)(M.a.Group,{as:T.a,controlId:"formGridEmail",children:[Object(S.jsx)(M.a.Label,{children:"Item Quantity"}),Object(S.jsx)(M.a.Control,{value:v,onChange:function(e){return w(e.target.value)},placeholder:"Enter Item Quantity"})]})]})}),Object(S.jsxs)(V.a.Footer,{children:[Object(S.jsx)("button",{variant:"secondary",onClick:n,children:"Cancel"}),Object(S.jsx)("button",{variant:"primary",onClick:function(){var e=new O(j,h,v);!function(e,t){g.collection(f).doc(e).collection(e+"-data").doc(t.itemName+"_"+t.itemBrand).set({itemName:t.itemName,itemBrand:t.itemBrand,itemQuantity:t.itemQuantity,inCart:!1,deleted:!1}).catch((function(e){console.error("addShoppingItemToFireStore error : "+e)}))}(a,e),i(r.concat(e)),d(""),p(""),w(""),n()},children:"Create Shopping Item"})]})]})};n(70);var ce=function(){return Object(S.jsxs)("ul",{className:"display-flex-row list-border-style-shopping-header",children:[Object(S.jsx)("li",{className:"shopping-item-col",children:Object(S.jsx)("h4",{children:"Name"})}),Object(S.jsx)("li",{className:"shopping-item-col",children:Object(S.jsx)("h4",{children:"Brand name"})}),Object(S.jsx)("li",{className:"shopping-item-col",children:Object(S.jsx)("h4",{children:"Quantity"})}),Object(S.jsx)("li",{className:"shopping-item-col",children:Object(S.jsx)("h4",{children:"InCart"})}),Object(S.jsx)("li",{className:"shopping-item-col"})]})};var ae=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),s=i[0],j=i[1],d=Object(c.useState)(!0),u=Object(o.a)(d,2),b=u[0],h=u[1],p=Object(l.g)().data;Object(c.useEffect)((function(){"undefined"!==p&&b&&(!function(e,t){var n=[];g.collection(f).doc(e).collection(e+"-data").get().then((function(e){e.forEach((function(e){e.data().deleted||n.push(new O(e.data().itemName,e.data().itemBrand,e.data().itemQuantity,e.data().inCart))})),t(n)})).catch((function(e){console.error("Error getting document: ",e)}))}(p,j),h(!1))}),[p,b]);var x=s?s.map((function(e,t){return Object(S.jsx)(te,{currentListName:p,item:e,isChecked:e.inCart,setItemDeleted:h},e+t)})):"";return Object(S.jsxs)("div",{id:"p-shopping-list-container",children:[Object(S.jsxs)("div",{id:"p-list-header-container",children:[Object(S.jsx)("p",{children:p}),Object(S.jsx)("span",{onClick:function(){return a(!0)},children:Object(S.jsx)(q.a,{})})]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("ul",{children:[Object(S.jsx)(ce,{}),s?x:""]}),Object(S.jsx)(ne,{show:n,onClose:function(){return a(!1)},currentListName:p,currentShoppingList:s,updateShoppingList:j})]})};var re=function(){var e=Object(c.useState)([[]]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),j=i[0],d=i[1],u=Object(c.useState)(),b=Object(o.a)(u,2),p=b[0],O=b[1];return Object(c.useEffect)((function(){v(d),function(e){h.a.get("mock_open_weather_api.json").then((function(t){e(t.data)})).catch((function(e){console.error("getMOCKCurrentWeatherByCityName : "+e)}))}(O)}),[]),Object(S.jsx)(k,{id:"p-app-container",children:Object(S.jsx)(s.a,{children:Object(S.jsxs)(l.d,{children:[Object(S.jsxs)(Q,{exact:!0,path:"/",children:["      ",Object(S.jsx)(H,{}),"   ",Object(S.jsx)(E,{weatherObject:p})," "]}),Object(S.jsxs)(l.b,{exact:!0,path:"/login",children:["      ",Object(S.jsx)(P,{})," "]}),Object(S.jsxs)(l.b,{exact:!0,path:"/signup",children:["      ",Object(S.jsx)(A,{userList:n,updateUsersList:a})," "]}),Object(S.jsxs)(l.b,{exact:!0,path:"/shopping_lists",children:[Object(S.jsx)(H,{}),"  ",Object(S.jsx)(Z,{})," "]}),Object(S.jsxs)(l.b,{exact:!0,path:"/shopping_list",children:[Object(S.jsx)(H,{}),"  ",Object(S.jsx)(ae,{})," "]}),Object(S.jsxs)(l.b,{exact:!0,path:"/parking",children:["    ",Object(S.jsx)(H,{}),"  ",Object(S.jsx)(W,{cities:j})," "]}),Object(S.jsxs)(l.b,{path:"/",children:["    ",Object(S.jsx)($,{})," "]})]})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(re,{}),document.getElementById("root")),ie()},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.e52081d8.chunk.js.map