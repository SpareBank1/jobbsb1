(self.webpackChunkjobbsb1=self.webpackChunkjobbsb1||[]).push([[678],{6085:function(e,t,n){"use strict";t.Z=void 0;var r=s(n(7294)),a=s(n(5697)),l=["desc","title"];function s(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.default.createElement("svg",{viewBox:"0 0 200 200"},r.default.createElement("path",{d:"m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"})),f=function(e){var t=e.desc,n=e.title,a=c(e,l);return r.default.createElement("svg",i({},o.props,a),n&&r.default.createElement("title",null,n),t&&r.default.createElement("desc",null,t),o.props.children)};f.propTypes={desc:a.default.string,title:a.default.string,focusable:a.default.oneOf([!0,!1,"true","false","auto","undefined"])};var m=f;t.Z=m},2010:function(e,t,n){"use strict";var r;!function(a){if("function"!=typeof l){var l=function(e){return e};l.nonNative=!0}var s=l("plaintext"),i=l("html"),c=l("comment"),o=/<(\w*)>/g,f=/<\/?([^\s\/>]+)/;function m(e,t,n){return d(e=e||"",u(t=t||[],n=n||""))}function u(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=o.exec(e);)n.add(t[1]);else l.nonNative||"function"!=typeof e[l.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:s,tag_buffer:"",depth:0,in_quote_char:""}}function d(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");for(var n=t.allowable_tags,r=t.tag_replacement,a=t.state,l=t.tag_buffer,o=t.depth,f=t.in_quote_char,m="",u=0,d=e.length;u<d;u++){var b=e[u];if(a===s)if("<"===b)a=i,l+=b;else m+=b;else if(a===i)switch(b){case"<":if(f)break;o++;break;case">":if(f)break;if(o){o--;break}f="",a=s,l+=">",n.has(p(l))?m+=l:m+=r,l="";break;case'"':case"'":f=b===f?"":f||b,l+=b;break;case"-":"<!-"===l&&(a=c),l+=b;break;case" ":case"\n":if("<"===l){a=s,m+="< ",l="";break}l+=b;break;default:l+=b}else if(a===c)if(">"===b)"--"==l.slice(-2)&&(a=s),l="";else l+=b}return t.state=a,t.tag_buffer=l,t.depth=o,t.in_quote_char=f,m}function p(e){var t=f.exec(e);return t?t[1].toLowerCase():null}m.init_streaming_mode=function(e,t){var n=u(e=e||[],t=t||"");return function(e){return d(e||"",n)}},void 0===(r=function(){return m}.call(t,n,t,e))||(e.exports=r)}()},365:function(e,t,n){"use strict";var r=n(3111).end,a=n(6091);e.exports=a("trimEnd")?function(){return r(this)}:"".trimEnd},6091:function(e,t,n){var r=n(6530).PROPER,a=n(7293),l=n(1361);e.exports=function(e){return a((function(){return!!l[e]()||"​᠎"!=="​᠎"[e]()||r&&l[e].name!==e}))}},3111:function(e,t,n){var r=n(1702),a=n(4488),l=n(1340),s=n(1361),i=r("".replace),c=RegExp("^["+s+"]+"),o=RegExp("(^|[^"+s+"])["+s+"]+$"),f=function(e){return function(t){var n=l(a(t));return 1&e&&(n=i(n,c,"")),2&e&&(n=i(n,o,"$1")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},1340:function(e,t,n){var r=n(648),a=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8702:function(e,t,n){n(3462);var r=n(2109),a=n(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==a},{trimEnd:a})},3462:function(e,t,n){var r=n(2109),a=n(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==a},{trimRight:a})},7920:function(e,t,n){"use strict";var r=n(7294),a=n(1082),l=n(5900),s=n.n(l);t.Z=function(){return r.createElement(a.StaticQuery,{query:"2496720499",render:function(e){return e.allMarkdownRemark.edges.map((function(e){return r.createElement(a.Link,{to:e.node.frontmatter.path,key:e.node.id,className:s()("sb1-employee","sb1-employee--"+e.node.frontmatter.classname)},r.createElement("h2",{className:"sb1-employee__heading"},e.node.frontmatter.firstname),r.createElement("em",{className:"sb1-employee__jobtitle"},e.node.frontmatter.role),r.createElement("ul",{className:"sb1-employee__contact"},r.createElement("li",null,r.createElement("a",{href:"mailto:"+e.node.frontmatter.email,className:"sb1-employee__contact-link"},r.createElement("span",{className:"sb1-employee__contact-link-icon"},r.createElement("svg",{focusable:"false",class:"sb1ds-icon",viewBox:"0 0 200 200"},r.createElement("path",{d:"M12.41,25.5c-6.848,0-12.41,5.53-12.41,12.34v124.3c0,6.9,5.562,12.4,12.41,12.4h175.2c6.844,0,12.41-5.531,12.41-12.34v-124.3c0-6.87-5.6-12.4-12.4-12.4h-175.2zm7.938,14,159.3,0l-79.6,65-79.66-65zm-6.35,14.44l78.09,63.75c4.596,3.75,11.22,3.75,15.81,0l78.1-63.76v106.6h-172v-106.6z"}))),r.createElement("span",{className:"sb1-employee__contact-link-text"},"E-post")))))}))}})}},3377:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Oe}});var r={};n.r(r),n.d(r,{CardName:function(){return Z},Subtext:function(){return I},Text:function(){return q},Title:function(){return D}});var a=n(7294),l=n(1082),s=n(4550),i=n(884),c=n(5122),o=n(5900),f=n.n(o),m=["className","element"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e){var t=e.className,n=e.element,r=d(e,m);return a.createElement(n,u({className:f()(t,"ffe-grid","ffe-grid--inline")},r))}p.defaultProps={element:"div"};var b=n(8678),v=n(3795),h=n(262),g=function(){return a.createElement(a.Fragment,null,a.createElement("h3",{class:"ffe-h4"},"SpareBank 1 Utvikling på Instagram",a.createElement("span",{class:"sb1-smaller-link"},a.createElement("a",{href:"https://www.instagram.com/sparebank1design/",class:"ffe-link-text ffe-link-text--no-underline",target:"_blank",rel:"noopener noreferrer"},"@sparebank1design"))))},y=["className","element","children"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=a.forwardRef((function(e,t){var n=e.className,r=e.element,l=e.children,s=k(e,y);return a.createElement(r,E({className:f()("ffe-card-base",n),ref:t},s),l)}));O.defaultProps={element:"div"};var N=O,j=["className","element"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=function(e){var t=e.className,n=e.element,r=_(e,j);return a.createElement(n,w({className:f()("ffe-card-component",t)},r))};x.defaultProps={element:"p"};var S=x,P=["className"];function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z=function(e){var t=e.className,n=T(e,P);return a.createElement(S,L({className:f()("ffe-card-component--card-name",t)},n))},M=["className"];function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I=function(e){var t=e.className,n=z(e,M);return a.createElement(S,R({className:f()("ffe-card-component--subtext",t)},n))},W=["className"];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q=function(e){var t=e.className,n=F(e,W);return a.createElement(S,C({className:f()("ffe-card-component--text",t)},n))},A=["className","overflowEllipsis"];function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H=function(e){var t=e.className,n=e.overflowEllipsis,r=B(e,A);return a.createElement(S,V({className:f()("ffe-card-component--title",{"ffe-card-component--title--overflow-ellipsis":n},t)},r))};H.defaultProps={overflowEllipsis:!0};var D=H,U=["className","leftAlign","children"];function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var $=function(e){var t=e.className,n=e.leftAlign,l=e.children,s=Q(e,U);return a.createElement(N,J({className:f()("ffe-text-card",{"ffe-text-card--left-align":n},t)},s),"function"==typeof l?l(r):l)},X=n(2010),G=n.n(X),K=(n(8702),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var ee=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return l.state={},l.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},l.elements={},l.onResize=l.onResize.bind(l),l.onTruncate=l.onTruncate.bind(l),l.calcTargetWidth=l.calcTargetWidth.bind(l),l.measureWidth=l.measureWidth.bind(l),l.getLines=l.getLines.bind(l),l.renderLine=l.renderLine.bind(l),l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),Y(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var r=t[n],a=document.createElement("div");return a.innerHTML="foo<br/>bar","foo\nbar"!==a[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),r=t[n]),r}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,r=this.canvasContext,a=this.props.width;if(t){var l=a||Math.floor(t.parentNode.getBoundingClientRect().width);if(!l)return window.requestAnimationFrame((function(){return n(e)}));var s=window.getComputedStyle(t),i=[s["font-weight"],s["font-style"],s["font-size"],s["font-family"]].join(" ");r.font=i,this.setState({targetWidth:l},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,r=t.ellipsis,l=t.trimWhitespace,s=this.state.targetWidth,i=this.innerText,c=this.measureWidth,o=this.onTruncate,f=this.trimRight,m=[],u=i(e.text).split("\n").map((function(e){return e.split(" ")})),d=!0,p=this.ellipsisWidth(this.elements.ellipsis),b=1;b<=n;b++){var v=u[0];if(0!==v.length){var h=v.join(" ");if(c(h)<=s&&1===u.length){d=!1,m.push(h);break}if(b===n){for(var g=v.join(" "),y=0,E=g.length-1;y<=E;){var k=Math.floor((y+E)/2);c(g.slice(0,k+1))+p<=s?y=k+1:E=k-1}var O=g.slice(0,y);if(l)for(O=f(O);!O.length&&m.length;){O=f(m.pop())}h=a.createElement("span",null,O,r)}else{for(var N=0,j=v.length-1;N<=j;){var w=Math.floor((N+j)/2);c(v.slice(0,w+1).join(" "))<=s?N=w+1:j=w-1}if(0===N){b=n-1;continue}h=v.slice(0,N).join(" "),u[0].splice(0,N)}m.push(h)}else m.push(),u.shift(),b--}return o(d),m}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return a.createElement("span",{key:t},e);var r=a.createElement("br",{key:t+"br"});return e?[a.createElement("span",{key:t},e),r]:r}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,r=n.children,l=n.ellipsis,s=n.lines,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,o=this.getLines,f=this.renderLine,m=this.onTruncate,u=void 0;return"undefined"!=typeof window&&!(!t||!c)&&(s>0?u=o().map(f):(u=r,m(!1))),delete i.onTruncate,delete i.trimWhitespace,a.createElement("span",K({},i,{ref:function(t){e.elements.target=t}}),a.createElement("span",null,u),a.createElement("span",{ref:function(t){e.elements.text=t}},r),a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},l))}}]),t}(a.Component);ee.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0};var te=ee;function ne(e){var t=document.querySelector(".sb1-mediumfeed--visible"),n=t.getAttribute("id").split("-"),r=parseInt(n[1]),a="#"+n[0]+"-";if(r<9){var l=parseInt(r+1),s=document.querySelector(a+l),i=document.querySelector(".sb1-mediumfeed .sb1-somefeed__track-inner");i.classList.remove("sb1-somefeed__track-inner--"+r),i.classList.add("sb1-somefeed__track-inner--"+l),t.classList.remove("sb1-mediumfeed--visible"),s.classList.add("sb1-mediumfeed--visible")}}function re(e){var t=document.querySelector(".sb1-mediumfeed--visible"),n=t.getAttribute("id").split("-"),r=parseInt(n[1]),a="#"+n[0]+"-";if(r>0){var l=parseInt(r-1),s=document.querySelector(a+l),i=document.querySelector(".sb1-mediumfeed .sb1-somefeed__track-inner");i.classList.remove("sb1-somefeed__track-inner--"+r),i.classList.add("sb1-somefeed__track-inner--"+l),t.classList.remove("sb1-mediumfeed--visible"),s.classList.add("sb1-mediumfeed--visible")}}var ae=function(e){var t=e.posts;return a.createElement("div",{className:"sb1-mediumfeed sb1-somefeed"},a.createElement("h3",{className:"ffe-h4"},"SpareBank 1 Utvikling på Medium ",a.createElement("span",{className:"sb1-smaller-link"},a.createElement("a",{href:"https://medium.com/sparebank1-digital",className:"ffe-link-text ffe-link-text--no-underline",target:"_blank",rel:"noopener noreferrer"},"@sparebank1-digital"))),a.createElement("div",{className:"sb1-somefeed__track"},a.createElement("div",{className:"sb1-somefeed__track-inner"},t.edges.map((function(e,t){var n=0===t;return a.createElement("div",{key:e.node.id,id:"med-"+t,className:f()("sb1-mediumfeed__article",{"sb1-mediumfeed--visible":n})},a.createElement(a.Fragment,null,a.createElement($,{element:"a",href:e.node.link},(function(t){var n=t.Title,r=t.Subtext,l=t.Text;return a.createElement(a.Fragment,null,a.createElement(n,{overflowEllipsis:!1},e.node.title),a.createElement(l,null,a.createElement(te,{lines:7,ellipsis:"..."},G()(e.node.content.encoded))),a.createElement(r,null,"Av ",e.node.creator))}))))})))),a.createElement("div",{className:"sb1-somefeed__controls"},a.createElement("button",{onClick:re,className:"ffe-inline-button ffe-inline-button--tertiary"},"Forrige"),a.createElement("button",{onClick:ne,className:"ffe-inline-button ffe-inline-button--tertiary"},"Neste")))},le=function(e){e.children;return a.createElement(l.StaticQuery,{query:"2501490646",render:function(e){return a.createElement(a.Fragment,null,a.createElement(ae,{posts:e.allFeedsb1Digital}))}})},se=n(6085),ie=function(e){var t=e.id,n=e.path,r=e.title,l=e.target;return a.createElement("a",{className:"sb1-joblist__link",key:t,href:n,target:l},r,a.createElement("span",{className:"sb1-joblist__link-icon"},a.createElement(se.Z,null)))},ce=function(){return a.createElement(l.StaticQuery,{query:"3130529311",render:function(e){if(e.allHRmanagerJob.edges.length>0){var t="dummy"===e.allHRmanagerJob.edges[0].node.Name?[]:e.allHRmanagerJob.edges;return a.createElement("div",{className:"sb1-joblist"},a.createElement("h3",{className:"ffe-h3"},"Ledige stillinger - vil du være med på laget?"),a.createElement("ul",{className:"sb1-joblist__list"},t.map((function(e){return a.createElement("li",null,a.createElement(ie,{id:e.node.id,path:e.node.AdvertisementUrl,title:e.node.Name,desc:e.node.ShortDescription,target:"_blank"}))}))))}return a.createElement("h3",{className:"ffe-h3"},"Ingen ledige stillinger for øyeblikket")}})},oe=n(7920),fe=["className","thin","inline"];function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=function(e){var t=e.className,n=e.thin,r=e.inline,l=ue(e,fe);return a.createElement("div",me({className:f()("ffe-button-group",{"ffe-button-group--thin":n},{"ffe-button-group--inline":r},t)},l))},pe=["ariaLoadingMessage","buttonType","children","className","condensed","element","innerRef","isLoading","leftIcon","rightIcon","onClick"];function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var he=function(e){var t=e.ariaLoadingMessage,n=e.buttonType,r=e.children,l=e.className,s=e.condensed,i=e.element,c=e.innerRef,o=e.isLoading,m=e.leftIcon,u=e.rightIcon,d=e.onClick,p=ve(e,pe),b=["action","primary","secondary"].includes(n);return a.createElement(i,be({"aria-busy":o&&b,"aria-disabled":p.disabled||o&&b,className:f()("ffe-button","ffe-button--".concat(n),{"ffe-button--condensed":s},{"ffe-button--loading":o&&b},l),ref:c,onClick:function(e){o&&b?(e.preventDefault(),e.stopPropagation()):d&&d(e)}},p),a.createElement("span",{className:"ffe-button__label"},m&&a.cloneElement(m,{className:"ffe-button__icon ffe-button__icon--left"}),r,u&&a.cloneElement(u,{className:"ffe-button__icon ffe-button__icon--right"})),b&&a.createElement("span",{"aria-hidden":!o,"aria-label":t,className:"ffe-button__spinner"}))};he.defaultProps={ariaLoadingMessage:"Vennligst vent",element:"button"};var ge=he;function ye(){return ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}var Ee=function(e){return a.createElement(ge,ye({buttonType:"secondary"},e))},ke=n.p+"static/sb1-miljo2-345430727686cd92f832ac540e4111fe.jpg",Oe=function(e){return a.createElement(b.Z,null,a.createElement(v.Z,null),a.createElement(h.Z,{title:"Vi søker nye medarbeidere",keywords:["sparebank 1","utvikling","react","frontend","backend","design","UX","IxD"]}),a.createElement("div",{className:"sb1-hero sb1-curved sb1-curved--grey-warm"},a.createElement("div",{className:"sb1-hero__inner"},a.createElement("div",{className:"sb1-hero__preamble"},a.createElement("div",{className:"sb1-hero__heading"},a.createElement("svg",{viewBox:"0 0 182 40",xmlns:"http://www.w3.org/2000/svg",className:"sb1-header__logo"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828",fill:"#F00000"}),a.createElement("path",{d:"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17",fill:"#B40000"}),a.createElement("path",{d:"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734",fill:"#FFF"}),a.createElement("path",{d:"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z",fill:"#002776"}))),a.createElement("h1",{className:"ffe-h1"},"SpareBank 1 Utvikling")),a.createElement("p",{className:"ffe-body-text"},"Dette er SpareBank 1 Utvikling, og på denne siden kan du bli bedre kjent med hvem vi er, hva vi gjør og hvordan vi jobber – gjennom oss som faktisk jobber her. Så kan du vurdere selv om du også har lyst til å bli en del av det vi mener er det beste og triveligste IT-miljøet i bransjen. Med de flinkeste folka."),a.createElement("nav",{className:"sb1-hero__nav"},a.createElement(de,{thin:!0},a.createElement(Ee,{element:"a",href:"#ansatte",className:"sb1-hero__nav-button"},"Ansatte"),a.createElement(Ee,{element:"a",href:"#jobber",className:"sb1-hero__nav-button"},"Ledige stillinger"),a.createElement(Ee,{element:"a",href:"#faglig",className:"sb1-hero__nav-button"},"Faglig")))))),a.createElement(s.Z,{topPadding:!1,id:"ansatte"},a.createElement(i.Z,{topPadding:!0,background:"sand-30"},a.createElement(c.Z,{sm:{cols:12},md:{cols:10,offset:1}},a.createElement("div",{className:"sb1-employees"},a.createElement(oe.Z,null))))),a.createElement(s.Z,{id:"jobber"},a.createElement(i.Z,{topPadding:!0},a.createElement(c.Z,{sm:{cols:12},md:{cols:10,offset:1},center:!0},a.createElement(ce,null)))),a.createElement(s.Z,{id:"faglig"},a.createElement(i.Z,{reverse:!0},a.createElement(c.Z,{sm:{cols:12},className:"sb1-workplace"},a.createElement("div",{className:"sb1-workplace__preamble"},a.createElement("h3",{className:"ffe-h3"},"Vi skaper en enklere og bedre hverdagsøkonomi"),a.createElement("p",{className:"ffe-body-text"},"Vi utvikler og forvalter løsninger som brukes av over 1 million kunder. Det er vi skikkelig stolte av! Her kan du bli enda bedre kjent med selskapet, måten vi jobber på, løsningene vi lager, og ikke minst - ukas aller beste dag: Fagdagen."),a.createElement(p,null,a.createElement(i.Z,null,a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/omoss/"},a.createElement("h3",{className:"ffe-h4"},"Dette er SpareBank 1 Utvikling"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/jobbehososs/"},a.createElement("h3",{className:"ffe-h4"},"Sånn er det å jobbe hos oss"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/dettelagervi/"},a.createElement("h3",{className:"ffe-h4"},"Dette driver vi med"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/fagdag/"},a.createElement("h3",{className:"ffe-h4"},"Hørt om fagdagen?"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/worklifebalance/"},a.createElement("h3",{className:"ffe-h4"},"Work life balance"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/rauskultur/"},a.createElement("h3",{className:"ffe-h4"},"Raus kultur"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/trygghet/"},a.createElement("h3",{className:"ffe-h4"},"Trygghet og gode ordninger"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/utviklerverdier/"},a.createElement("h3",{className:"ffe-h4"},"Verdier vi utviklere tror på"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/samfunnsnytte/"},a.createElement("h3",{className:"ffe-h4"},"Samfunnsnytte"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/selvstendighet/"},a.createElement("h3",{className:"ffe-h4"},"Selvstendighet og deling"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/aws/"},a.createElement("h3",{className:"ffe-h4"},"Mobil- og nettbank i AWS"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/bounty/"},a.createElement("h3",{className:"ffe-h4"},"Bug bounty"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/antisvindel/"},a.createElement("h3",{className:"ffe-h4"},"Anti-svindel"))),a.createElement(c.Z,{sm:{cols:12},md:{cols:6}},a.createElement(l.Link,{className:"sb1-frontpage-link",to:"/smudtech-2023/"},a.createElement("h3",{className:"ffe-h4"},"SmudTech-konferansen 2023")))))),a.createElement("div",{className:"sb1-workplace__image"},a.createElement("img",{src:ke,alt:"Miljøbilde fra SpareBank 1"}))))),a.createElement(s.Z,{className:"sb1-curved sb1-curved--blue-pale"},a.createElement(i.Z,{topPadding:!0},a.createElement(c.Z,{sm:{cols:12},md:{cols:10,offset:1},center:!0},a.createElement(le,null)))),a.createElement(s.Z,{topPadding:!1},a.createElement(i.Z,{topPadding:!0,background:"frost-30"},a.createElement(c.Z,{sm:{cols:12},md:{cols:10,offset:1},center:!1},a.createElement(g,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a99917c507b31bc96c8e.js.map