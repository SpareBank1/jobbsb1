(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(149),l=n(156),o=n(154),c=n(164);t.default=function(){return a.a.createElement(l.a,null,a.a.createElement(o.a,{title:"Ledige stillinger"}),a.a.createElement("h1",null,"Ledige stillinger"),a.a.createElement(c.a,null),a.a.createElement("br",null),a.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var r=n(0),a=n.n(r),i=n(4),l=n.n(i),o=n(32),c=n.n(o);n.d(t,"a",function(){return c.a});n(150);var s=a.a.createContext({}),d=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,t,n){var r;e.exports=(r=n(153))&&r.default||r},151:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===i)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Jobbe i SpareBank 1"}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),l=n.n(i),o=n(54),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var r=n(155),a=n(0),i=n.n(a),l=n(4),o=n.n(l),c=n(159),s=n.n(c),d=n(149);function u(e){var t=e.description,n=e.lang,a=e.meta,l=e.keywords,o=e.title;return i.a.createElement(d.b,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(a)})},data:r})}u.defaultProps={lang:"no",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jobbe i SpareBank 1",description:".",author:"@antidecaf"}}}}},156:function(e,t,n){"use strict";var r=n(152),a=n(0),i=n.n(a),l=n(4),o=n.n(l),c=n(149),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"sb1-header"},i.a.createElement(c.a,{to:"/"},i.a.createElement("svg",{viewBox:"0 0 182 40",xmlns:"http://www.w3.org/2000/svg",className:"sb1-header__logo"},i.a.createElement("title",null,t),i.a.createElement("g",{fill:"none","fill-rule":"evenodd"},i.a.createElement("path",{d:"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828",fill:"#F00000"}),i.a.createElement("path",{d:"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17",fill:"#B40000"}),i.a.createElement("path",{d:"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734",fill:"#FFF"}),i.a.createElement("path",{d:"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z",fill:"#FFF"})))))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var d=s,u=(n(158),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},161:function(e){e.exports={data:{allHRmanagerJob:{edges:[{node:{Id:7,Name:"dummy",ShortDescription:"",AdvertisementUrl:"",LastUpdated:"/Date(1549611757000+0100)/",Created:"/Date(1549611757000+0100)/"}}]}}}},162:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{path:"/utvikler-fullstack",title:"Fullstack utvikler til et av Norges største utviklingsmiljøer",description:"Kreativ problemløser? Lyst til å jobbe i team på tvers av fagdisipliner? Med mulighet til å fordype deg faglig?"}}},{node:{frontmatter:{path:"/utvikler",title:"Utvikler til team sparing",description:"Vi prøver å gi folk gode sparevaner. Derfor fokuserer vi mye på å finne kundenes behov, prøve ut hypoteser og utvikle MVP’er. Vi håper du vil være med på denne reisen."}}},{node:{frontmatter:{path:"/teamleder",title:"Smidig teamleder",description:"Vil du kjempe sammen med oss for en enklere og bedre hverdagsøkonomi for folk flest?"}}},{node:{frontmatter:{path:"/utviklere",title:"Utviklere ønskes",description:"Til våre team trenger vi mange type utviklere: flere techleads, utviklere som vil jobbe med sikkerhet, frontendere, full-stack-utviklere, API-utviklere og mer. "}}},{node:{frontmatter:{path:"/utvikler-boligreisen",title:"Testutvikler til Team Boligreisen",description:"Bli med å utvikle Norges råeste boliglånesøknad!"}}},{node:{frontmatter:{path:"/utvikler-java",title:"Utviklere med Java-erfaring og kjennskap til sikkerhet",description:"Har du lyst til å bli med på å gjøre 2019 til vårt mest spennende år? "}}}]}}}},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r},i=n(4);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.default.createElement("svg",{viewBox:"0 0 200 200"},a.default.createElement("path",{d:"m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"})),s=function(e){var t=e.desc,n=e.focusable,r=void 0!==n&&n,i=e.title,s=(e.iconName,o(e,["desc","focusable","title","iconName"]));return a.default.createElement("svg",l({focusable:String(r)},s,c.props),i&&a.default.createElement("title",null,i),t&&a.default.createElement("desc",null,t),c.props.children)};s.propTypes={desc:i.string,focusable:i.bool,title:i.string,iconName:i.string},s.displayName="ChevronIkon";var d=s;t.default=d},164:function(e,t,n){"use strict";var r=n(161),a=n(0),i=n.n(a),l=n(149),o=n(186),c=n(162),s=function(){return i.a.createElement(l.b,{query:"361875165",render:function(e){return e.allMarkdownRemark.edges.map(function(e){return i.a.createElement("div",{key:e.node.id,className:"sb1-joblist__item"},i.a.createElement("h4",{className:"ffe-h4"},i.a.createElement(l.a,{to:e.node.frontmatter.path,className:"ffe-link-text"},e.node.frontmatter.title)),i.a.createElement("p",null,e.node.frontmatter.description))})},data:c})};t.a=function(){return i.a.createElement("div",{className:"sb1-joblist"},i.a.createElement(l.b,{query:"3415172960",render:function(e){return e.allHRmanagerJob.edges.map(function(e){return"dummy"===e.node.Name?i.a.createElement(s,null):i.a.createElement("div",{key:e.node.Id,className:"sb1-joblist__opening"},i.a.createElement(o.a,{element:"a",className:"sb1-joblist__link",href:e.node.AdvertisementUrl,target:"_blank",rel:"noopener noreferrer"},e.node.Name))})},data:r}))}},186:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(4),l=n(163),o=n.n(l),c=n(151),s=n.n(c);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.ariaLoadingMessage,n=e.buttonType,r=e.children,i=e.className,l=e.condensed,o=e.disabled,c=e.element,f=e.innerRef,m=e.isLoading,p=e.leftIcon,v=e.rightIcon,g=e.dark,b=u(e,["ariaLoadingMessage","buttonType","children","className","condensed","disabled","element","innerRef","isLoading","leftIcon","rightIcon","dark"]),h=["action","primary","secondary"].includes(n);return a.a.createElement(c,d({"aria-busy":m&&h,"aria-disabled":o||m&&h,className:s()("ffe-button","ffe-button--".concat(n),{"ffe-button--condensed":l},{"ffe-button--dark":g},{"ffe-button--loading":m&&h},i),disabled:o||m&&h,ref:f},b),a.a.createElement("span",{className:"ffe-button__label"},p&&a.a.cloneElement(p,{className:"ffe-button__icon ffe-button__icon--left"}),r,v&&a.a.cloneElement(v,{className:"ffe-button__icon ffe-button__icon--right"})),h&&a.a.createElement("div",{"aria-hidden":!m,"aria-label":t,className:"ffe-button__spinner"}))};f.propTypes={ariaLoadingMessage:i.string,buttonType:Object(i.oneOf)(["action","primary","secondary","shortcut","task"]),children:i.node,className:i.string,condensed:i.bool,disabled:i.bool,element:Object(i.oneOfType)([i.func,i.string]),innerRef:i.func,isLoading:i.bool,leftIcon:i.node,rightIcon:i.node,dark:i.bool},f.defaultProps={ariaLoadingMessage:"Vennligst vent",element:"button",dark:!1};var m=f;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function(e){return a.a.createElement(m,p({buttonType:"shortcut",rightIcon:a.a.createElement(o.a,null)},e))};v.propTypes={children:i.node,className:i.string,condensed:i.bool,disabled:i.bool,element:Object(i.oneOfType)([i.func,i.string]),innerRef:i.func,leftIcon:i.node};t.a=v}}]);
//# sourceMappingURL=component---src-pages-stillinger-js-6257ac6fbc52f1cecdb7.js.map