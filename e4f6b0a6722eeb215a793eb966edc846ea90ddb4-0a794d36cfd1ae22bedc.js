/*! For license information please see e4f6b0a6722eeb215a793eb966edc846ea90ddb4-0a794d36cfd1ae22bedc.js.LICENSE.txt */
(self.webpackChunkjobbsb1=self.webpackChunkjobbsb1||[]).push([[888],{4550:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),o=n(5900),c=n.n(o),l=["children","className","condensed","element","topPadding"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){var t=e.children,n=e.className,o=e.condensed,f=e.element,u=e.topPadding,s=i(e,l),p=f||"div";return r.createElement(p,a({className:c()(n,"ffe-grid",{"ffe-grid--condensed":o},{"ffe-grid--no-top-padding":!u})},s),t)}f.defaultProps={topPadding:!0}},5122:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(7294),o=n(5900),c=n.n(o),l=n(7572),a=["bottomPadding","children","className","element","lg","md","sm"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}var v=["around","background","between","bottom","center","end","horizontal","middle","reverse","start","centerText","top"],g=function(e,t){var n;switch(m(t)){case"undefined":return"";case"object":return c()((h(n={},"ffe-grid__col--".concat(e,"-").concat(t.cols),t.cols||0===t.cols),h(n,"ffe-grid__col--".concat(e,"-offset-").concat(t.offset),t.offset||0===t.offset),n));default:return"ffe-grid__col--".concat(e,"-").concat(t)}},y=function(e){var t=e.background;if(!t)return null;if(l.X.includes(t))throw new Error("Support for the ".concat(t," background on <GridCol> has been removed, please see the CHANGELOG"));return l.Z.includes(t)?"ffe-grid__col--bg-".concat(t):null},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(l,e);var t,n,o,c=p(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this)).ref=(0,r.createRef)(),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.bottomPadding,n=e.children,o=e.className,c=e.element,l=e.lg,u=e.md,s=e.sm,p=f(e,a);Object.keys(p).forEach((function(e){v.includes(e)&&delete p[e]}));var d,b=[o,g("lg",l),g("md",u),g("sm",s||l||u?s:12),(d=this.props,Object.keys(d).filter((function(e){return-1!==v.indexOf(e)&&!!d[e]})).map((function(e){return"ffe-grid__col--".concat(e.split("").reduce((function(e,t){return/[A-Z]/.test(t)?"".concat(e,"-").concat(t.toLowerCase()):"".concat(e).concat(t)})))})).join(" ")),y(this.props),t?null:"ffe-grid__col--no-bottom-padding"].filter((function(e){return e})).join(" ");return r.createElement(c,i({className:b,ref:this.ref},p),n)}}])&&u(t.prototype,n),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.Component);O.defaultProps={bottomPadding:!0,element:"div"}},884:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),o=n(5900),c=n.n(o),l=n(7572),a=["background","className","children","element","reverse","topPadding"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){var t=e.background,n=e.className,o=e.children,u=e.element,s=e.reverse,p=e.topPadding,d=f(e,a),b=o,h=l.Z.includes(t),m=l.X.includes(t);if(h&&(b=r.createElement("div",{className:"ffe-grid__row-wrapper"},o)),m)throw new Error("Support for the ".concat(t," background on <GridRow> has been removed, please see the CHANGELOG"));var v,g,y,O=u||"div";return r.createElement(O,i({className:c()(n,"ffe-grid__row",(v={},g="ffe-grid__row--bg-".concat(t),y=h,g in v?Object.defineProperty(v,g,{value:y,enumerable:!0,configurable:!0,writable:!0}):v[g]=y,v),{"ffe-grid__row--reverse":s},{"ffe-grid__row--top-padding":p})},d),b)}u.defaultProps={topPadding:!1}},7572:function(e,t,n){"use strict";n.d(t,{X:function(){return r}}),t.Z=["frost-30","sand","sand-70","sand-30","syrin-70","syrin-30","vann","vann-30","fjell","hvit"];var r=["blue-cobalt","blue-royal","purple-magenta","blue-ice","blue-pale","green-mint","grey-cloud","grey-warm","orange-salmon","red","blue-sky","white"]},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===c){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3795:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(1597),o=n(7294),c=n(9499),l=n(5900),a=n.n(l),i=["buttonType","children","className","element","innerRef","leftIcon","rightIcon"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=function(e){var t=e.buttonType,n=e.children,r=e.className,c=e.element,l=e.innerRef,s=e.leftIcon,p=e.rightIcon,d=u(e,i);return o.createElement(c,f({className:a()("ffe-inline-button","ffe-inline-button--".concat(t),r),ref:l},d),s&&o.cloneElement(s,{className:"ffe-inline-button__icon ffe-inline-button__icon--left"}),o.createElement("span",{className:"ffe-inline-button__label"},n),p&&o.cloneElement(p,{className:"ffe-inline-button__icon ffe-inline-button__icon--right"}))};s.defaultProps={element:"button"};var p=s;function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var b=function(e){return o.createElement(p,d({buttonType:"back"},e))},h=function(e){var t=e.siteTitle,n=e.opening;return o.createElement(c.Location,null,(function(e){return"/"===e.location.pathname?void 0:o.createElement("header",{className:a()("sb1-header",{"sb1-header--opening":n})},o.createElement(b,{element:"a",href:"/",className:"sb1-header__link sb1-header__link--back"},"Tilbake"),o.createElement(r.Link,{to:"/",className:"sb1-header__link sb1-header__link--home"},o.createElement("svg",{viewBox:"0 0 182 40",xmlns:"http://www.w3.org/2000/svg",className:"sb1-header__logo"},o.createElement("title",null,t),o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{d:"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828",fill:"#F00000"}),o.createElement("path",{d:"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17",fill:"#B40000"}),o.createElement("path",{d:"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734",fill:"#FFF"}),o.createElement("path",{d:"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z",fill:"#002776"}))),o.createElement("h1",{className:"ffe-h1"},"SpareBank 1 Utvikling")),o.createElement("a",{href:"https://github.com/SpareBank1/jobbsb1",className:"sb1-header__link"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 42 41",className:"sb1-header__github-logo"},o.createElement("title",null,"SpareBank1.dev på GitHub"),o.createElement("defs",null,o.createElement("clipPath",{id:"a"},o.createElement("path",{d:"M0 0h42v41H0z"}))),o.createElement("g",{clipPath:"url(#a)"},o.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M20.998.5C9.676.5.494 9.681.494 21.007c0 9.059 5.875 16.745 14.024 19.458 1.025.187 1.399-.446 1.399-.99 0-.487-.017-1.776-.027-3.487-5.704 1.239-6.908-2.749-6.908-2.749-.932-2.369-2.277-3-2.277-3-1.862-1.271.141-1.246.141-1.246 2.058.145 3.141 2.114 3.141 2.114 1.829 3.133 4.8 2.228 5.968 1.703.186-1.325.716-2.228 1.302-2.741-4.553-.518-9.341-2.277-9.341-10.135 0-2.239.799-4.068 2.111-5.502-.211-.519-.915-2.604.202-5.427 0 0 1.72-.552 5.638 2.101 1.635-.455 3.39-.681 5.134-.69 1.742.009 3.495.235 5.133.69 3.915-2.653 5.634-2.101 5.634-2.101 1.119 2.823.415 4.908.205 5.427 1.314 1.434 2.107 3.263 2.107 5.502 0 7.878-4.795 9.612-9.362 10.119.735.633 1.391 1.884 1.391 3.798 0 2.74-.025 4.952-.025 5.624 0 .549.37 1.188 1.41.987 8.142-2.717 14.012-10.398 14.012-19.455 0-2.88-.593-5.62-1.665-8.107C36.699 5.606 29.445.5 20.998.5"})))))}))};h.defaultProps={siteTitle:"",opening:!1};var m=h}}]);
//# sourceMappingURL=e4f6b0a6722eeb215a793eb966edc846ea90ddb4-0a794d36cfd1ae22bedc.js.map