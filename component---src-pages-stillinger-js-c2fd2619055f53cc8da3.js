(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(150),i=r(157),o=r(155),c=r(166);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Ledige stillinger"}),a.a.createElement("h1",null,"Ledige stillinger"),a.a.createElement(c.a,null),a.a.createElement("br",null),a.a.createElement(l.a,{to:"/"},"Go back to the homepage"))}},150:function(e,t,r){"use strict";r.d(t,"b",function(){return u});var n=r(0),a=r.n(n),l=r(4),i=r.n(l),o=r(33),c=r.n(o);r.d(t,"a",function(){return c.a});r(152);var s=a.a.createContext({}),u=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===l)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},152:function(e,t,r){var n;e.exports=(n=r(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Jobbe i SpareBank 1"}}}}},154:function(e,t,r){"use strict";r.r(t);r(34);var n=r(0),a=r.n(n),l=r(4),i=r.n(l),o=r(55),c=r(2),s=function(e){var t=e.location,r=c.default.getResourcesForPathnameSync(t.pathname);return r?a.a.createElement(o.a,Object.assign({location:t,pageResources:r},r.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,r){"use strict";var n=r(156),a=r(0),l=r.n(a),i=r(4),o=r.n(i),c=r(160),s=r.n(c),u=r(150);function f(e){var t=e.description,r=e.lang,a=e.meta,i=e.keywords,o=e.title;return l.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:n})}f.defaultProps={lang:"no",meta:[],keywords:[]},f.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=f;var p="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Jobbe i SpareBank 1",description:".",author:"@antidecaf"}}}}},157:function(e,t,r){"use strict";var n=r(153),a=r(0),l=r.n(a),i=r(4),o=r.n(i),c=r(150),s=function(e){var t=e.siteTitle;return l.a.createElement("header",{className:"sb1-header"},l.a.createElement(c.a,{to:"/"},l.a.createElement("svg",{viewBox:"0 0 182 40",xmlns:"http://www.w3.org/2000/svg",className:"sb1-header__logo"},l.a.createElement("title",null,t),l.a.createElement("g",{fill:"none","fill-rule":"evenodd"},l.a.createElement("path",{d:"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828",fill:"#F00000"}),l.a.createElement("path",{d:"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17",fill:"#B40000"}),l.a.createElement("path",{d:"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734",fill:"#FFF"}),l.a.createElement("path",{d:"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z",fill:"#FFF"})))))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var u=s,f=(r(159),function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",null,t))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f},162:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(151),i=r.n(l),o=r(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=function(e){var t=e.className,r=e.element,n=e.children,l=s(e,["className","element","children"]);return a.a.createElement(r,c({className:i()("ffe-card-base",t)},l),n)};u.defaultProps={element:"div"},u.propTypes={className:o.string,children:o.node,element:Object(o.oneOfType)([o.func,o.string])},t.a=u},163:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(151),i=r.n(l),o=r(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=function(e){var t=e.className,r=e.element,n=s(e,["className","element"]);return a.a.createElement(r,c({className:i()("ffe-card-component",t)},n))};u.defaultProps={element:"p"},u.propTypes={className:o.string,element:Object(o.oneOfType)([o.func,o.string]),children:o.node};var f=u;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=function(e){var t=e.className,r=m(e,["className"]);return a.a.createElement(f,p({className:i()("ffe-card-component--card-name",t)},r))};d.propTypes={className:o.string};var v=d;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=function(e){var t=e.className,r=y(e,["className"]);return a.a.createElement(f,g({className:i()("ffe-card-component--subtext",t)},r))};b.propTypes={className:o.string};var h=b;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var E=function(e){var t=e.className,r=j(e,["className"]);return a.a.createElement(f,O({className:i()("ffe-card-component--text",t)},r))};E.propTypes={className:o.string};var k=E;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x=function(e){var t=e.className,r=e.overflowEllipsis,n=N(e,["className","overflowEllipsis"]);return a.a.createElement(f,w({className:i()("ffe-card-component--title",{"ffe-card-component--title--overflow-ellipsis":r},t)},n))};x.defaultProps={overflowEllipsis:!0},x.propTypes={className:o.string,overflowEllipsis:o.bool};var P=x;r.d(t,"CardName",function(){return v}),r.d(t,"Subtext",function(){return h}),r.d(t,"Text",function(){return k}),r.d(t,"Title",function(){return P})},164:function(e){e.exports={data:{allHRmanagerJob:{totalCount:1,edges:[{node:{Id:7,Name:"dummy",ShortDescription:"",AdvertisementUrl:"",LastUpdated:"/Date(1549611757000+0100)/",Created:"/Date(1549611757000+0100)/"}}]}}}},165:function(e){e.exports={data:{allMarkdownRemark:{totalCount:6,edges:[{node:{frontmatter:{path:"/teamleder",title:"Smidig teamleder",description:"Vil du kjempe sammen med oss for en enklere og bedre hverdagsøkonomi for folk flest?",pri:10}}},{node:{frontmatter:{path:"/utvikler-boligreisen",title:"Testutvikler til Team Boligreisen",description:"Bli med å utvikle Norges råeste boliglånesøknad!",pri:10}}},{node:{frontmatter:{path:"/utvikler-fullstack",title:"Fullstack utvikler til et av Norges største utviklingsmiljøer",description:"Kreativ problemløser? Lyst til å jobbe i team på tvers av fagdisipliner? Med mulighet til å fordype deg faglig?",pri:10}}},{node:{frontmatter:{path:"/utvikler-java",title:"Utviklere med Java-erfaring og kjennskap til sikkerhet",description:"Har du lyst til å bli med på å gjøre 2019 til vårt mest spennende år? ",pri:10}}},{node:{frontmatter:{path:"/utviklere",title:"Utviklere ønskes",description:"Til våre team trenger vi mange type utviklere: flere techleads, utviklere som vil jobbe med sikkerhet, frontendere, full-stack-utviklere, API-utviklere og mer. ",pri:10}}},{node:{frontmatter:{path:"/utvikler-sparing",title:"Utvikler til team sparing",description:"Vi prøver å gi folk gode sparevaner. Derfor fokuserer vi mye på å finne kundenes behov, prøve ut hypoteser og utvikle MVP’er. Vi håper du vil være med på denne reisen.",pri:null}}}]}}}},166:function(e,t,r){"use strict";var n=r(164),a=r(0),l=r.n(a),i=r(150),o=r(165),c=r(187),s=function(e){var t=e.id,r=e.path,n=e.title,a=e.desc;return l.a.createElement("div",{className:"sb1-joblist__item"},l.a.createElement(c.a,{element:"a",className:"sb1-joblist__item-content",key:t,href:r},function(e){var t=e.Title,r=e.Text;return l.a.createElement(l.a.Fragment,null,l.a.createElement(t,null,n),l.a.createElement(r,null,a))}))},u=function(){return l.a.createElement(i.b,{query:"3707884970",render:function(e){return l.a.createElement("div",null,l.a.createElement("h3",{className:"ffe-h3"},e.allMarkdownRemark.totalCount," ledige stillinger - vil du være med på laget?"),l.a.createElement("div",{className:"sb1-joblist"},e.allMarkdownRemark.edges.map(function(e){return l.a.createElement(s,{id:e.node.id,path:e.node.frontmatter.path,title:e.node.frontmatter.title,desc:e.node.frontmatter.description})})))},data:o})};t.a=function(){return l.a.createElement("div",{className:"sb1-joblist"},l.a.createElement(i.b,{query:"478700288",render:function(e){return"dummy"===e.allHRmanagerJob.edges[0].node.Name?l.a.createElement(u,null):l.a.createElement("div",null,l.a.createElement("h3",{className:"ffe-h3"},e.allHRmanagerJob.totalCount," ledige stillinger - vil du være med på laget?"),l.a.createElement("div",{className:"sb1-joblist"},e.allHRmanagerJob.edges.map(function(e){return l.a.createElement(s,{id:e.node.id,path:e.node.AdvertisementUrl,title:e.node.Name,desc:e.node.ShortDescription})})))},data:n}))}},187:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(151),i=r.n(l),o=r(4),c=r(162),s=r(163);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=function(e){var t=e.className,r=e.leftAlign,n=e.children,l=f(e,["className","leftAlign","children"]);return a.a.createElement(c.a,u({className:i()("ffe-text-card",{"ffe-text-card--left-align":r},t)},l),"function"==typeof n?n(s):n)};p.propTypes={className:o.string,leftAlign:o.bool,element:Object(o.oneOfType)([o.func,o.string]),children:Object(o.oneOfType)([o.func,o.node])},t.a=p}}]);
//# sourceMappingURL=component---src-pages-stillinger-js-c2fd2619055f53cc8da3.js.map