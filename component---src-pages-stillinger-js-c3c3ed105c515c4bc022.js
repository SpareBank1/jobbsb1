(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(152),i=r(154),o=r(157),s=r(171);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Ledige stillinger"}),a.a.createElement("h1",null,"Ledige stillinger"),a.a.createElement(s.a,null),a.a.createElement("br",null),a.a.createElement(l.a,{to:"/"},"Go back to the homepage"))}},151:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===l)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},152:function(e,t,r){"use strict";r.d(t,"b",function(){return u});var n=r(0),a=r.n(n),l=r(4),i=r.n(l),o=r(33),s=r.n(o);r.d(t,"a",function(){return s.a});r(153);var c=a.a.createContext({}),u=function(e){return a.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,r){var n;e.exports=(n=r(156))&&n.default||n},154:function(e,t,r){"use strict";var n=r(155),a=r(0),l=r.n(a),i=r(4),o=r.n(i),s=r(152),c=(r(161),function(e){var t=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,t))},data:n})});c.propTypes={children:o.a.node.isRequired},t.a=c},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jobbe i SpareBank 1"}}}}},156:function(e,t,r){"use strict";r.r(t);r(34);var n=r(0),a=r.n(n),l=r(4),i=r.n(l),o=r(55),s=r(2),c=function(e){var t=e.location,r=s.default.getResourcesForPathnameSync(t.pathname);return r?a.a.createElement(o.a,Object.assign({location:t,pageResources:r},r.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,r){"use strict";var n=r(158),a=r(0),l=r.n(a),i=r(4),o=r.n(i),s=r(162),c=r.n(s),u=r(152);function f(e){var t=e.description,r=e.lang,a=e.meta,i=e.keywords,o=e.title;return l.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:n})}f.defaultProps={lang:"no",meta:[],keywords:[]},f.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=f;var p="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Jobbe i SpareBank 1",description:".",author:"@antidecaf"}}}}},164:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(151),i=r.n(l),o=r(4);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=function(e){var t=e.className,r=e.element,n=e.children,l=c(e,["className","element","children"]);return a.a.createElement(r,s({className:i()("ffe-card-base",t)},l),n)};u.defaultProps={element:"div"},u.propTypes={className:o.string,children:o.node,element:Object(o.oneOfType)([o.func,o.string])},t.a=u},165:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(151),i=r.n(l),o=r(4);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=function(e){var t=e.className,r=e.element,n=c(e,["className","element"]);return a.a.createElement(r,s({className:i()("ffe-card-component",t)},n))};u.defaultProps={element:"p"},u.propTypes={className:o.string,element:Object(o.oneOfType)([o.func,o.string]),children:o.node};var f=u;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=function(e){var t=e.className,r=d(e,["className"]);return a.a.createElement(f,p({className:i()("ffe-card-component--card-name",t)},r))};m.propTypes={className:o.string};var v=m;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=function(e){var t=e.className,r=y(e,["className"]);return a.a.createElement(f,g({className:i()("ffe-card-component--subtext",t)},r))};b.propTypes={className:o.string};var h=b;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var k=function(e){var t=e.className,r=j(e,["className"]);return a.a.createElement(f,O({className:i()("ffe-card-component--text",t)},r))};k.propTypes={className:o.string};var E=k;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x=function(e){var t=e.className,r=e.overflowEllipsis,n=N(e,["className","overflowEllipsis"]);return a.a.createElement(f,w({className:i()("ffe-card-component--title",{"ffe-card-component--title--overflow-ellipsis":r},t)},n))};x.defaultProps={overflowEllipsis:!0},x.propTypes={className:o.string,overflowEllipsis:o.bool};var P=x;r.d(t,"CardName",function(){return v}),r.d(t,"Subtext",function(){return h}),r.d(t,"Text",function(){return E}),r.d(t,"Title",function(){return P})},169:function(e){e.exports={data:{allHRmanagerJob:{totalCount:1,edges:[{node:{Id:7,Name:"dummy",ShortDescription:"",AdvertisementUrl:"",LastUpdated:"/Date(1549611757000+0100)/",Created:"/Date(1549611757000+0100)/"}}]}}}},170:function(e){e.exports={data:{allMarkdownRemark:{totalCount:6,edges:[{node:{frontmatter:{path:"/teamleder",title:"Smidig teamleder",description:"Vil du kjempe sammen med oss for en enklere og bedre hverdagsøkonomi for folk flest?",pri:10}}},{node:{frontmatter:{path:"/utvikler-java",title:"Utviklere med Java-erfaring og kjennskap til sikkerhet",description:"Har du lyst til å bli med på å gjøre 2019 til vårt mest spennende år? ",pri:10}}},{node:{frontmatter:{path:"/utvikler-fullstack",title:"Fullstack utvikler til et av Norges største utviklingsmiljøer",description:"Kreativ problemløser? Lyst til å jobbe i team på tvers av fagdisipliner? Med mulighet til å fordype deg faglig?",pri:10}}},{node:{frontmatter:{path:"/utviklere",title:"Utviklere ønskes",description:"Til våre team trenger vi mange type utviklere: flere techleads, utviklere som vil jobbe med sikkerhet, frontendere, full-stack-utviklere, API-utviklere og mer. ",pri:10}}},{node:{frontmatter:{path:"/utvikler-boligreisen",title:"Testutvikler til Team Boligreisen",description:"Bli med å utvikle Norges råeste boliglånesøknad!",pri:10}}},{node:{frontmatter:{path:"/utvikler-sparing",title:"Utvikler til team sparing",description:"Vi prøver å gi folk gode sparevaner. Derfor fokuserer vi mye på å finne kundenes behov, prøve ut hypoteser og utvikle MVP’er. Vi håper du vil være med på denne reisen.",pri:null}}}]}}}},171:function(e,t,r){"use strict";var n=r(169),a=r(0),l=r.n(a),i=r(152),o=r(170),s=r(191),c=function(e){var t=e.id,r=e.path,n=e.title,a=e.desc;return l.a.createElement("div",{className:"sb1-joblist__item"},l.a.createElement(s.a,{element:"a",className:"sb1-joblist__item--content",key:t,href:r},function(e){var t=e.Title,r=e.Text;return l.a.createElement(l.a.Fragment,null,l.a.createElement(t,null,n),l.a.createElement(r,null,a))}))},u=function(){return l.a.createElement(i.b,{query:"3707884970",render:function(e){return l.a.createElement("div",{className:"sb1-joblist"},l.a.createElement("h3",{className:"ffe-h3"},e.allMarkdownRemark.totalCount," ledige stillinger - vil du være med på laget?"),l.a.createElement("div",{className:"sb1-joblist__list"},e.allMarkdownRemark.edges.map(function(e){return l.a.createElement(c,{id:e.node.id,path:e.node.frontmatter.path,title:e.node.frontmatter.title,desc:e.node.frontmatter.description})})))},data:o})};t.a=function(){return l.a.createElement("div",null,l.a.createElement(i.b,{query:"478700288",render:function(e){return"dummy"===e.allHRmanagerJob.edges[0].node.Name?l.a.createElement(u,null):l.a.createElement("div",{className:"sb1-joblist"},l.a.createElement("h3",{className:"ffe-h3"},e.allHRmanagerJob.totalCount," ledige stillinger - vil du være med på laget?"),l.a.createElement("div",{className:"sb1-joblist__list"},e.allHRmanagerJob.edges.map(function(e){return l.a.createElement(c,{id:e.node.id,path:e.node.AdvertisementUrl,title:e.node.Name,desc:e.node.ShortDescription})})))},data:n}))}},191:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(151),i=r.n(l),o=r(4),s=r(164),c=r(165);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=function(e){var t=e.className,r=e.leftAlign,n=e.children,l=f(e,["className","leftAlign","children"]);return a.a.createElement(s.a,u({className:i()("ffe-text-card",{"ffe-text-card--left-align":r},t)},l),"function"==typeof n?n(c):n)};p.propTypes={className:o.string,leftAlign:o.bool,element:Object(o.oneOfType)([o.func,o.string]),children:Object(o.oneOfType)([o.func,o.node])},t.a=p}}]);
//# sourceMappingURL=component---src-pages-stillinger-js-c3c3ed105c515c4bc022.js.map