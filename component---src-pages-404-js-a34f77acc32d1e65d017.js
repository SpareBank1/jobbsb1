(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(155),o=n(158);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(e,"a",function(){return s.a});n(153);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,n){var a;t.exports=(a=n(157))&&a.default||a},155:function(t,e,n){"use strict";var a=n(156),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(152),u=(n(161),function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"sb1-layout"},e))},data:a})});u.propTypes={children:c.a.node.isRequired},e.a=u},156:function(t){t.exports={data:{site:{siteMetadata:{title:"SpareBank 1 Utvikling"}}}}},157:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},158:function(t,e,n){"use strict";var a=n(159),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(163),u=n.n(s),l=n(152);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"no",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},159:function(t){t.exports={data:{site:{siteMetadata:{title:"SpareBank 1 Utvikling",description:".",author:"@antidecaf"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-a34f77acc32d1e65d017.js.map