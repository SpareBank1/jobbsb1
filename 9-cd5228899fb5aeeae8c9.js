(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{164:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},173:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),t.a=["blue-ice","blue-pale","green-mint","grey-cloud","sand","grey-warm","orange-salmon","red","blue-sky"];var r=["blue-cobalt","blue-royal","purple-magenta"]},178:function(e,t,n){"use strict";n(179)("fixed",function(e){return function(){return e(this,"tt","","")}})},179:function(e,t,n){var r=n(9),o=n(12),a=n(25),c=/"/g,i=function(e,t,n,r){var o=String(a(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),i+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),r(r.P+r.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},182:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(0),o=n.n(r),a=n(164),c=n.n(a),i=n(5);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,b(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.condensed,a=e.element,i=e.topPadding,l=f(e,["children","className","condensed","element","topPadding"]),s=a||"div";return o.a.createElement(s,u({className:c()(n,"ffe-grid",{"ffe-grid--condensed":r},{"ffe-grid--no-top-padding":!i})},l),t)}}])&&s(n.prototype,a),i&&s(n,i),t}();m.defaultProps={topPadding:!0},m.propTypes={children:i.node,className:i.string,condensed:i.bool,element:i.string,topPadding:i.bool}},183:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),o=n.n(r),a=n(5),c=n(164),i=n.n(c),l=n(173);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,y(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){var e=this.props,t=e.background,n=e.className,r=e.children,a=e.element,c=e.reverse,u=e.topPadding,p=s(e,["background","className","children","element","reverse","topPadding"]),b=r,y=l.a.includes(t),m=l.b.includes(t);if(y&&(b=o.a.createElement("div",{className:"ffe-grid__row-wrapper"},r)),m)throw new Error("Support for the ".concat(t," background on <GridRow> has been removed, please see the CHANGELOG"));var d,O,g,v=a||"div";return o.a.createElement(v,f({className:i()(n,"ffe-grid__row",(d={},O="ffe-grid__row--bg-".concat(t),g=y,O in d?Object.defineProperty(d,O,{value:g,enumerable:!0,configurable:!0,writable:!0}):d[O]=g,d),{"ffe-grid__row--reverse":c},{"ffe-grid__row--top-padding":u})},p),b)}}])&&p(n.prototype,a),c&&p(n,c),t}();d.defaultProps={topPadding:!1},d.propTypes={background:Object(a.oneOf)(["blue-ice","blue-pale","green-mint","grey-cloud","sand","grey-warm","orange-salmon","red","blue-sky"]),className:a.string,children:a.node,element:a.string,reverse:a.bool,topPadding:a.bool}},184:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(0),o=n.n(r),a=n(5),c=n(164),i=n.n(c),l=n(173);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var O=["around","background","between","bottom","center","end","horizontal","middle","reverse","start","centerText","top"],g=function(e,t){var n;switch(d(t)){case"undefined":return"";case"object":return i()((m(n={},"ffe-grid__col--".concat(e,"-").concat(t.cols),t.cols||0===t.cols),m(n,"ffe-grid__col--".concat(e,"-offset-").concat(t.offset),t.offset||0===t.offset),n));default:return"ffe-grid__col--".concat(e,"-").concat(t)}},v=function(e){var t=e.background;if(!t)return null;if(l.b.includes(t))throw new Error("Support for the ".concat(t," background on <GridCol> has been removed, please see the CHANGELOG"));return l.a.includes(t)?"ffe-grid__col--bg-".concat(t):null},h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=p(this,b(t).call(this))).ref=Object(r.createRef)(),e}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){var e=this.props,t=e.bottomPadding,n=e.children,r=e.className,a=e.element,c=e.lg,i=e.md,l=e.sm,s=f(e,["bottomPadding","children","className","element","lg","md","sm"]);Object.keys(s).forEach(function(e){O.includes(e)&&delete s[e]});var p,b=[r,g("lg",c),g("md",i),g("sm",l||c||i?l:12),(p=this.props,Object.keys(p).filter(function(e){return-1!==O.indexOf(e)&&!!p[e]}).map(function(e){return"ffe-grid__col--".concat(e.split("").reduce(function(e,t){return/[A-Z]/.test(t)?"".concat(e,"-").concat(t.toLowerCase()):"".concat(e).concat(t)}))}).join(" ")),v(this.props),t?null:"ffe-grid__col--no-bottom-padding"].filter(function(e){return e}).join(" ");return o.a.createElement(a,u({className:b,ref:this.ref},s),n)}}])&&s(n.prototype,a),c&&s(n,c),t}();h.defaultProps={bottomPadding:!0,element:"div"},h.propTypes={background:Object(a.oneOf)(["blue-ice","blue-pale","green-mint","grey-cloud","sand","grey-warm","orange-salmon","red","blue-sky"]),className:a.string,element:a.node,around:a.bool,between:a.bool,bottom:a.bool,center:a.bool,centerText:a.bool,children:a.node,end:a.bool,horizontal:a.bool,middle:a.bool,bottomPadding:a.bool,reverse:a.bool,start:a.bool,top:a.bool,sm:Object(a.oneOfType)([a.number,a.string,Object(a.shape)({cols:Object(a.oneOfType)([a.number,a.string]),offset:Object(a.oneOfType)([a.number,a.string])})]),md:Object(a.oneOfType)([a.number,a.string,Object(a.shape)({cols:Object(a.oneOfType)([a.number,a.string]),offset:Object(a.oneOfType)([a.number,a.string])})]),lg:Object(a.oneOfType)([a.number,a.string,Object(a.shape)({cols:Object(a.oneOfType)([a.number,a.string]),offset:Object(a.oneOfType)([a.number,a.string])})])}},185:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(164),c=n.n(a),i=n(5);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.className,n=e.element,r=e.children,a=u(e,["className","element","children"]);return o.a.createElement(n,l({className:c()("ffe-card-base",t)},a),r)};f.defaultProps={element:"div"},f.propTypes={className:i.string,children:i.node,element:Object(i.oneOfType)([i.func,i.string])},t.a=f},186:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(164),c=n.n(a),i=n(5);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.className,n=e.element,r=u(e,["className","element"]);return o.a.createElement(n,l({className:c()("ffe-card-component",t)},r))};f.defaultProps={element:"p"},f.propTypes={className:i.string,element:Object(i.oneOfType)([i.func,i.string]),children:i.node};var s=f;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=function(e){var t=e.className,n=b(e,["className"]);return o.a.createElement(s,p({className:c()("ffe-card-component--card-name",t)},n))};y.propTypes={className:i.string};var m=y;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=function(e){var t=e.className,n=O(e,["className"]);return o.a.createElement(s,d({className:c()("ffe-card-component--subtext",t)},n))};g.propTypes={className:i.string};var v=g;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.className,n=j(e,["className"]);return o.a.createElement(s,h({className:c()("ffe-card-component--text",t)},n))};w.propTypes={className:i.string};var P=w;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=function(e){var t=e.className,n=e.overflowEllipsis,r=_(e,["className","overflowEllipsis"]);return o.a.createElement(s,N({className:c()("ffe-card-component--title",{"ffe-card-component--title--overflow-ellipsis":n},t)},r))};S.defaultProps={overflowEllipsis:!0},S.propTypes={className:i.string,overflowEllipsis:i.bool};var E=S;n.d(t,"CardName",function(){return m}),n.d(t,"Subtext",function(){return v}),n.d(t,"Text",function(){return P}),n.d(t,"Title",function(){return E})},187:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(5),c=n(164),i=n.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.buttonType,n=e.children,r=e.className,a=e.element,c=e.innerRef,f=e.leftIcon,s=e.rightIcon,p=e.dark,b=u(e,["buttonType","children","className","element","innerRef","leftIcon","rightIcon","dark"]);return o.a.createElement(a,l({className:i()("ffe-inline-button","ffe-inline-button--".concat(t),{"ffe-inline-button--dark":p},r),ref:c},b),f&&o.a.cloneElement(f,{className:"ffe-inline-button__icon ffe-inline-button__icon--left"}),o.a.createElement("span",{className:"ffe-inline-button__label"},n),s&&o.a.cloneElement(s,{className:"ffe-inline-button__icon ffe-inline-button__icon--right"}))};f.propTypes={buttonType:Object(a.oneOf)(["tertiary","back","expand"]),children:a.node.isRequired,className:a.string,element:Object(a.oneOfType)([a.string,a.func]),innerRef:a.func,leftIcon:a.node,rightIcon:a.node,dark:a.bool},f.defaultProps={element:"button",dark:!1};var s=f;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=function(e){return o.a.createElement(s,p({buttonType:"back"},e))};b.propTypes={children:a.node,className:a.string,element:Object(a.oneOfType)([a.func,a.string]),innerRef:a.func,dark:a.bool},b.defaultProps={dark:!1};t.a=b},195:function(e,t,n){var r=n(0),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=function(e,t,n){return 1==t?e:n||e+"s"},i=function(e){if(!e)return new Date;if("number"==typeof e||""+parseInt(e,10)==e){if(e=parseInt(e,10),isNaN(e))return null;e=new Date(1e3*e)}if(e=new Date(e),isNaN(e.getTime()))return null;var t=e.toJSON().split(/[:\-\+TZ\. ]/);for(var n in t)if(""!==t[n]&&isNaN(parseInt(t[n],10)))return null;return e},l=function(e,t){var n,r,c;void 0===t&&(t={}),(t=Object.assign({format:"full",includeDay:!1,twentyFourHour:!1},t)).twentyFourHour?(n=e.getHours().toString(),c=""):(n=e.getHours()%12==0?"12":(e.getHours()%12).toString(),c=e.getHours()>11?"pm":"am"),r=e.getMinutes()<10?"0"+e.getMinutes():""+e.getMinutes();var i=t.includeDay?a[e.getDay()]+", ":"";switch(t.format){case"date":return""+i+e.getDate()+" "+o[e.getMonth()]+" "+e.getFullYear();case"time":return n+":"+r+c;case"json":return e.toJSON();case"full":default:return""+i+e.getDate()+" "+o[e.getMonth()]+" "+e.getFullYear()+", "+n+":"+r+c}};"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){var n=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),o=1;o<arguments.length;o++){var a=n[o];if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(r[c]=a[c])}return r},writable:!0,configurable:!0}),e.exports=function(e){if(e.autoUpdate){var t=r.useState(0),n=t[0],o=t[1];r.useEffect(function(){var e=setInterval(function(){return o(n+1)},6e4);return function(){return clearInterval(e)}},[])}var a=e.component||"time",u=i(e.date);if(!u)return r.createElement(a,{},["Invalid date"]);var f=u,s=function(e,t){return Math.floor((t.getTime()-e.getTime())/1e3)}(f,i(e.relativeTo)||new Date),p=!e.relative||Math.abs(s)>31536e3?l(f,e.options):function(e,t){void 0===t&&(t=!0);var n,r,o=e>=0;return e=Math.abs(e),t&&e<60?o?"just then":"soon":(r=e<60?e+" "+c("second",e):e<3600?(n=Math.round(e/60))+" "+c("minute",n):e<86400?(n=Math.round(e/3600))+" "+c("hour",n):e<604800?(n=Math.round(e/86400))+" "+c("day",n):e<2628e3?(n=Math.round(e/604800))+" "+c("week",n):e<31536e3?(n=Math.round(e/2628e3))+" "+c("month",n):(n=Math.round(e/31536e3))+" "+c("year",n),t?o?r+" ago":"in "+r:r)}(s,!e.relativeTo);return r.createElement(a,{className:e.className||"",style:e.style||{},timestamp:l(f,{format:"json"})},p)}},197:function(e,t,n){var r=n(13).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},200:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(164),c=n.n(a),i=n(5),l=n(185),u=n(186);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.className,n=e.image,r=e.children,a=s(e,["className","image","children"]);return o.a.createElement(l.a,f({className:c()("ffe-image-card",t)},a),o.a.createElement("div",{className:"ffe-image-card__image"},o.a.createElement("div",{className:"ffe-image-card__image__overlay"}),n),o.a.createElement("div",{className:"ffe-image-card__body"},"function"==typeof r?r(u):r))};p.propTypes={className:i.string,image:i.node.isRequired,element:Object(i.oneOfType)([i.func,i.string]),children:Object(i.oneOfType)([i.func,i.node])},t.a=p},201:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(164),c=n.n(a),i=n(5),l=n(185),u=n(186);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.className,n=e.leftAlign,r=e.children,a=s(e,["className","leftAlign","children"]);return o.a.createElement(l.a,f({className:c()("ffe-text-card",{"ffe-text-card--left-align":n},t)},a),"function"==typeof r?r(u):r)};p.propTypes={className:i.string,leftAlign:i.bool,element:Object(i.oneOfType)([i.func,i.string]),children:Object(i.oneOfType)([i.func,i.node])},t.a=p},202:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(0),o=n.n(r),a=n(164),c=n.n(a),i=n(5);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,b(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.element,r=f(e,["className","element"]);return o.a.createElement(n,u({className:c()(t,"ffe-grid","ffe-grid--inline")},r))}}])&&s(n.prototype,a),i&&s(n,i),t}();m.propTypes={children:i.node,className:i.string,element:i.string},m.defaultProps={element:"div"}}}]);
//# sourceMappingURL=9-cd5228899fb5aeeae8c9.js.map