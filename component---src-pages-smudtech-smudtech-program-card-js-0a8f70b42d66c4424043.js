"use strict";(self.webpackChunkjobbsb1=self.webpackChunkjobbsb1||[]).push([[258,184],{9917:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294);function s(e){let{title:t,show:a,presenters:s,images:l,description:r}=e;return a?n.createElement(n.Fragment,null,n.createElement("div",{className:"modal",id:"modal"},l,s.map((e=>n.createElement(n.Fragment,null,n.createElement("h2",null,e.name),n.createElement("p",{className:"modal-about"},e.bio)))),n.createElement("p",{className:"modal-title"},t),n.createElement("p",{className:"modal-description",dangerouslySetInnerHTML:{__html:r}}),n.createElement("div",{className:"actions"})),n.createElement("div",{className:"backdrop"})):null}},4807:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(7294),s=a(9917);function l(e){let{title:t,description:a,time:l,track:r,presenters:m,selectedTrack:c}=e;if(!l)return null;const{0:i,1:o}=(0,n.useState)(!1),p=void 0!==m,d=(p&&m.length,"all"===r||"intro"===r||"pause"===r||"paneldebatt"===r||"workshop"===r?"fill-width":r);function u(e,t){return e&&m.length>1?n.createElement("div",{className:"double-img--container"},m.map((e=>n.createElement("img",{src:"/images/smudtech/2023/speakers/"+e.image,className:"circleImg",alt:""})))):e&&1===m.length?n.createElement("img",{src:"/images/smudtech/2023/speakers/"+m[0].image,className:"circleImg",alt:""}):void 0}function g(e){if(e)return n.createElement("span",{className:"session-presenter"},m.map(((e,t)=>n.createElement("h5",null,e.name,(m.length>1&&m.length,""),(m.length>2&&m.length,"")))))}const E=()=>{"intro"!==r&&"pause"!==r&&"paneldebatt"!==r&&o(!i)};return n.createElement("div",{className:"session session-1 track-1 track-name-"+d+" "+(c===r?"track-visible":""),style:{gridRow:"time-"+l.start,gridRowEnd:l.end&&45===l.duration?"time-"+l.end:""}},n.createElement("a",{href:"#",className:"session--content session-type-"+r,onClick:e=>(e=>{e.preventDefault(),e.stopPropagation(),E()})(e),onKeyUp:e=>(e=>{"Enter"===e.key&&E()})(e)},"workshop"===r&&n.createElement(n.Fragment,null,n.createElement("img",{src:"/images/smudtech/workshop-bg.jpg",className:"workshop-logo"}),n.createElement("h4",{className:"session-title"},t),g(p),n.createElement("p",null,a))||n.createElement(n.Fragment,null,n.createElement("img",{src:"/images/smudtech/Lyntale.png",className:"session-logo "+("pause"===r||10!==l.duration&&15!==l.duration?"":"session-lightning")}),u(p),n.createElement("h4",{className:"session-title"},t),"paneldebatt"===r?n.createElement("div",{className:"paneldebatt-members"},m.map(((e,t)=>n.createElement("h5",{className:"small-heading"},e.name,n.createElement("span",{className:"text-faded"}," - ",e.bio))))):g(p)),("intro"===r||"paneldebatt"===r)&&n.createElement("div",{className:"stream-description"},"intro"===r?n.createElement("p",{className:"stream-description-text",dangerouslySetInnerHTML:{__html:a}}):n.createElement(n.Fragment,null)),"workshop"===r&&n.createElement("span",{className:"session-time"},n.createElement("span",{className:"label-pink",style:{marginRight:"10px"}},"Rom 1.14-1.15"),n.createElement("span",{className:"label-pink"},"kl ",l.startEnd))||n.createElement("span",{className:"session-time"},n.createElement("span",{className:"label-pink"},"kl ",l.startEnd)),n.createElement(s.default,{title:t,description:a,presenters:m,images:u(p),show:i})))}}}]);
//# sourceMappingURL=component---src-pages-smudtech-smudtech-program-card-js-0a8f70b42d66c4424043.js.map