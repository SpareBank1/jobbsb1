/*! For license information please see component---src-pages-utviklere-js-58e293a3968d51f1bccf.js.LICENSE.txt */
(self.webpackChunkjobbsb1=self.webpackChunkjobbsb1||[]).push([[93],{4550:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(5900),c=r.n(o),a=["children","className","condensed","element","topPadding"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e){var t=e.children,r=e.className,o=e.condensed,s=e.element,u=e.topPadding,f=i(e,a),d=s||"div";return n.createElement(d,l({className:c()(r,"ffe-grid",{"ffe-grid--condensed":o},{"ffe-grid--no-top-padding":!u})},f),t)}s.defaultProps={topPadding:!0}},5122:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(7294),o=r(5900),c=r.n(o),a=r(7572),l=["bottomPadding","children","className","element","lg","md","sm"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}var h=["around","background","between","bottom","center","end","horizontal","middle","reverse","start","centerText","top"],y=function(e,t){var r;switch(v(t)){case"undefined":return"";case"object":return c()((b(r={},"ffe-grid__col--".concat(e,"-").concat(t.cols),t.cols||0===t.cols),b(r,"ffe-grid__col--".concat(e,"-offset-").concat(t.offset),t.offset||0===t.offset),r));default:return"ffe-grid__col--".concat(e,"-").concat(t)}},g=function(e){var t=e.background;if(!t)return null;if(a.X.includes(t))throw new Error("Support for the ".concat(t," background on <GridCol> has been removed, please see the CHANGELOG"));return a.Z.includes(t)?"ffe-grid__col--bg-".concat(t):null},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,r,o,c=d(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this)).ref=(0,n.createRef)(),e}return t=a,(r=[{key:"render",value:function(){var e=this.props,t=e.bottomPadding,r=e.children,o=e.className,c=e.element,a=e.lg,u=e.md,f=e.sm,d=s(e,l);Object.keys(d).forEach((function(e){h.includes(e)&&delete d[e]}));var p,m=[o,y("lg",a),y("md",u),y("sm",f||a||u?f:12),(p=this.props,Object.keys(p).filter((function(e){return-1!==h.indexOf(e)&&!!p[e]})).map((function(e){return"ffe-grid__col--".concat(e.split("").reduce((function(e,t){return/[A-Z]/.test(t)?"".concat(e,"-").concat(t.toLowerCase()):"".concat(e).concat(t)})))})).join(" ")),g(this.props),t?null:"ffe-grid__col--no-bottom-padding"].filter((function(e){return e})).join(" ");return n.createElement(c,i({className:m,ref:this.ref},d),r)}}])&&u(t.prototype,r),o&&u(t,o),a}(n.Component);O.defaultProps={bottomPadding:!0,element:"div"}},884:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),o=r(5900),c=r.n(o),a=r(7572),l=["background","className","children","element","reverse","topPadding"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e){var t=e.background,r=e.className,o=e.children,u=e.element,f=e.reverse,d=e.topPadding,p=s(e,l),m=o,b=a.Z.includes(t),v=a.X.includes(t);if(b&&(m=n.createElement("div",{className:"ffe-grid__row-wrapper"},o)),v)throw new Error("Support for the ".concat(t," background on <GridRow> has been removed, please see the CHANGELOG"));var h,y,g,O=u||"div";return n.createElement(O,i({className:c()(r,"ffe-grid__row",(h={},y="ffe-grid__row--bg-".concat(t),g=b,y in h?Object.defineProperty(h,y,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[y]=g,h),{"ffe-grid__row--reverse":f},{"ffe-grid__row--top-padding":d})},p),m)}u.defaultProps={topPadding:!1}},7572:function(e,t,r){"use strict";r.d(t,{X:function(){return n}}),t.Z=["frost-30","sand","sand-70","sand-30","syrin-70","syrin-30","vann","fjell","hvit"];var n=["blue-cobalt","blue-royal","purple-magenta","blue-ice","blue-pale","green-mint","grey-cloud","grey-warm","orange-salmon","red","blue-sky","white"]},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},4545:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),o=r(4550),c=r(884),a=r(5122),l=r(7198),i=r(3751),s=r(5444),u=r(5900),f=r.n(u),d=function(){return n.createElement(s.StaticQuery,{query:"3182696833",render:function(e){return e.allMarkdownRemark.edges.map((function(e){return n.createElement(s.Link,{to:e.node.frontmatter.path,key:e.node.id,className:f()("sb1-employee","sb1-employee--"+e.node.frontmatter.firstname)},n.createElement("h2",{className:"sb1-employee__heading"},e.node.frontmatter.firstname),n.createElement("em",{className:"sb1-employee__jobtitle"},e.node.frontmatter.role),n.createElement("ul",{className:"sb1-employee__contact"},n.createElement("li",null,n.createElement("a",{href:"mailto:"+e.node.frontmatter.email,className:"sb1-employee__contact-link"},n.createElement("span",{className:"sb1-employee__contact-link-icon"},n.createElement("svg",{focusable:"false",class:"sb1ds-icon",viewBox:"0 0 200 200"},n.createElement("path",{d:"M12.41,25.5c-6.848,0-12.41,5.53-12.41,12.34v124.3c0,6.9,5.562,12.4,12.41,12.4h175.2c6.844,0,12.41-5.531,12.41-12.34v-124.3c0-6.87-5.6-12.4-12.4-12.4h-175.2zm7.938,14,159.3,0l-79.6,65-79.66-65zm-6.35,14.44l78.09,63.75c4.596,3.75,11.22,3.75,15.81,0l78.1-63.76v106.6h-172v-106.6z"}))),n.createElement("span",{className:"sb1-employee__contact-link-text"},"E-post")))))}))}})},p=function(e){return n.createElement(l.Z,null,n.createElement(i.Z,{title:"Her jobber vi",keywords:["sparebank 1","utvikling","utviklere"]}),n.createElement("div",{className:"sb1-hero sb1-curved sb1-curved--grey-warm"},n.createElement("div",{className:"sb1-hero__inner"},n.createElement("div",{className:"sb1-hero__preamble"},n.createElement("div",{className:"sb1-hero__heading"},n.createElement("svg",{viewBox:"0 0 182 40",xmlns:"http://www.w3.org/2000/svg",className:"sb1-header__logo"},n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828",fill:"#F00000"}),n.createElement("path",{d:"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17",fill:"#B40000"}),n.createElement("path",{d:"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734",fill:"#FFF"}),n.createElement("path",{d:"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z",fill:"#002776"})))),n.createElement("p",{className:"ffe-body-text"},"Dette er utviklerene i SpareBank 1 Utvikling, og på denne siden kan du bli bedre kjent med hvem vi er, hva vi gjør og hvordan vi jobber – gjennom oss som faktisk koder her.")))),n.createElement(o.Z,{topPadding:!1,id:"utviklere"},n.createElement(c.Z,{topPadding:!0,background:"sand-30"},n.createElement(a.Z,{sm:{cols:12},md:{cols:10,offset:1}},n.createElement("div",{className:"sb1-employees"},n.createElement(d,null))))))}}}]);
//# sourceMappingURL=component---src-pages-utviklere-js-58e293a3968d51f1bccf.js.map