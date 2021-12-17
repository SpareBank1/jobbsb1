/*! For license information please see component---src-templates-developer-template-js-692be738d19777031387.js.LICENSE.txt */
(self.webpackChunkjobbsb1=self.webpackChunkjobbsb1||[]).push([[538],{4550:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(5900),a=r.n(o),c=["children","className","condensed","element","topPadding"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e){var t=e.children,r=e.className,o=e.condensed,s=e.element,f=e.topPadding,u=i(e,c),p=s||"div";return n.createElement(p,l({className:a()(r,"ffe-grid",{"ffe-grid--condensed":o},{"ffe-grid--no-top-padding":!f})},u),t)}s.defaultProps={topPadding:!0}},5122:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(7294),o=r(5900),a=r.n(o),c=r(7572),l=["bottomPadding","children","className","element","lg","md","sm"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}var g=["around","background","between","bottom","center","end","horizontal","middle","reverse","start","centerText","top"],v=function(e,t){var r;switch(y(t)){case"undefined":return"";case"object":return a()((b(r={},"ffe-grid__col--".concat(e,"-").concat(t.cols),t.cols||0===t.cols),b(r,"ffe-grid__col--".concat(e,"-offset-").concat(t.offset),t.offset||0===t.offset),r));default:return"ffe-grid__col--".concat(e,"-").concat(t)}},h=function(e){var t=e.background;if(!t)return null;if(c.X.includes(t))throw new Error("Support for the ".concat(t," background on <GridCol> has been removed, please see the CHANGELOG"));return c.Z.includes(t)?"ffe-grid__col--bg-".concat(t):null},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&u(e,t)}(c,e);var t,r,o,a=p(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.call(this)).ref=(0,n.createRef)(),e}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=e.bottomPadding,r=e.children,o=e.className,a=e.element,c=e.lg,f=e.md,u=e.sm,p=s(e,l);Object.keys(p).forEach((function(e){g.includes(e)&&delete p[e]}));var d,m=[o,v("lg",c),v("md",f),v("sm",u||c||f?u:12),(d=this.props,Object.keys(d).filter((function(e){return-1!==g.indexOf(e)&&!!d[e]})).map((function(e){return"ffe-grid__col--".concat(e.split("").reduce((function(e,t){return/[A-Z]/.test(t)?"".concat(e,"-").concat(t.toLowerCase()):"".concat(e).concat(t)})))})).join(" ")),h(this.props),t?null:"ffe-grid__col--no-bottom-padding"].filter((function(e){return e})).join(" ");return n.createElement(a,i({className:m,ref:this.ref},p),r)}}])&&f(t.prototype,r),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component);O.defaultProps={bottomPadding:!0,element:"div"}},884:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),o=r(5900),a=r.n(o),c=r(7572),l=["background","className","children","element","reverse","topPadding"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e){var t=e.background,r=e.className,o=e.children,f=e.element,u=e.reverse,p=e.topPadding,d=s(e,l),m=o,b=c.Z.includes(t),y=c.X.includes(t);if(b&&(m=n.createElement("div",{className:"ffe-grid__row-wrapper"},o)),y)throw new Error("Support for the ".concat(t," background on <GridRow> has been removed, please see the CHANGELOG"));var g,v,h,O=f||"div";return n.createElement(O,i({className:a()(r,"ffe-grid__row",(g={},v="ffe-grid__row--bg-".concat(t),h=b,v in g?Object.defineProperty(g,v,{value:h,enumerable:!0,configurable:!0,writable:!0}):g[v]=h,g),{"ffe-grid__row--reverse":u},{"ffe-grid__row--top-padding":p})},d),m)}f.defaultProps={topPadding:!1}},7572:function(e,t,r){"use strict";r.d(t,{X:function(){return n}}),t.Z=["frost-30","sand","sand-70","sand-30","syrin-70","syrin-30","vann","vann-30","fjell","hvit"];var n=["blue-cobalt","blue-royal","purple-magenta","blue-ice","blue-pale","green-mint","grey-cloud","grey-warm","orange-salmon","red","blue-sky","white"]},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},7348:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),o=r(7198),a=r(3751),c=r(4550),l=r(884),i=r(5122);function s(e){var t=e.data.markdownRemark,r=t.frontmatter,s=t.html;return n.createElement(o.Z,null,n.createElement(a.Z,{title:r.title,keywords:["sparebank 1","karriere","utvikling"]}),n.createElement(c.Z,{className:"sb1-markdown-employee"},n.createElement(l.Z,{className:"sb1-markdown-employee__layout"},n.createElement(i.Z,{sm:{cols:12},md:{cols:4,offset:1}},r.image&&n.createElement("img",{src:r.image.childImageSharp.fixed.src,alt:"Bilde av "+r.firstname+" som smiler så pent hen kan",className:"sb1-markdown-employee__image"})),n.createElement(i.Z,{sm:{cols:12},md:{cols:6}},n.createElement("div",{className:"info-header"},n.createElement("div",{className:"info-header__info"},n.createElement("h1",{className:"ffe-h2"},r.firstname," ",r.lastname),n.createElement("p",{className:"ffe-smalltext info-header__title"},r.fullrole)),n.createElement("ul",{className:"sb1-employee__contact"},n.createElement("li",null,n.createElement("a",{href:"mailto:"+r.email,className:"sb1-employee__contact-link"},n.createElement("span",{className:"sb1-employee__contact-link-icon"},n.createElement("svg",{focusable:"false",class:"sb1ds-icon",viewBox:"0 0 200 200"},n.createElement("path",{d:"M12.41,25.5c-6.848,0-12.41,5.53-12.41,12.34v124.3c0,6.9,5.562,12.4,12.41,12.4h175.2c6.844,0,12.41-5.531,12.41-12.34v-124.3c0-6.87-5.6-12.4-12.4-12.4h-175.2zm7.938,14,159.3,0l-79.6,65-79.66-65zm-6.35,14.44l78.09,63.75c4.596,3.75,11.22,3.75,15.81,0l78.1-63.76v106.6h-172v-106.6z"}))),n.createElement("span",{className:"sb1-employee__contact-link-text"},"E-post"))))),n.createElement("div",{className:"info-content",dangerouslySetInnerHTML:{__html:s}})))))}}}]);
//# sourceMappingURL=component---src-templates-developer-template-js-692be738d19777031387.js.map