(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(144),s=t(180),i=t(181),m=t(182),d=t(148),o=t(147),c=t(173),g=t(4),f=t.n(g),u=(t(174),t(176)),b=t.n(u),p=function(e){var a=e.posts;return l.a.createElement("div",{className:"sb1-instafeed"},a.edges.map(function(e){return l.a.createElement("div",{key:e.node.id,className:"sb1-instafeed__article"},l.a.createElement("img",{src:e.node.localFile.childImageSharp.fixed.src,alt:""}),l.a.createElement("ul",null,l.a.createElement("li",null,"Likes: ",e.node.likes),l.a.createElement("li",null,"Comments: ",e.node.comments),l.a.createElement("li",null,"Timestamp: ",l.a.createElement(b.a,{time:e.node.timestamp}))),l.a.createElement("p",null,e.node.caption))}))},k=function(e){e.children;return l.a.createElement(r.StaticQuery,{query:"1225086240",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{posts:e.allInstaNode}))},data:c})};k.propTypes={children:f.a.node.isRequired};var v=k,h=t(177),E=(t(178),function(e){var a=e.posts;return l.a.createElement("div",{className:"sb1-mediumfeed"},a.edges.map(function(e){return l.a.createElement("div",{key:e.node.id,className:"sb1-mediumfeed__article"},l.a.createElement("h4",{className:"ffe-h4"},e.node.title),l.a.createElement("p",{className:"ffe-small-text"},"Av ",e.node.author.name),l.a.createElement("img",{src:"https://cdn-images-1.medium.com/max/500/"+e.node.virtuals.previewImage.imageId,alt:""}),l.a.createElement("p",{className:"ffe-body-text"},e.node.virtuals.subtitle),l.a.createElement("a",{className:"ffe-link-text",href:"https://medium.com/sparebank1-digital/"+e.node.uniqueSlug},"Les hele artikkelen"))}))}),_=function(e){e.children;return l.a.createElement(r.StaticQuery,{query:"3810606814",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{posts:e.allMediumPost}))},data:h})};_.propTypes={children:f.a.node.isRequired};var j=_,y=t(149),I={backgroundColor:"#ccc",height:"200px",width:"200px",borderRadius:"50%",margin:"10px"};a.default=function(){return l.a.createElement(d.a,null,l.a.createElement(o.a,{title:"Vi søker nye medarbeidere",keywords:["gatsby","application","react"]}),l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(m.a,{center:!0},l.a.createElement("p",null,"Vi søker nye medarbeidere – vil du være med på laget?"))),l.a.createElement(i.a,null,l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4,offset:2},center:!0},l.a.createElement("div",{style:I}),"Unni utvikler"),l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4},center:!0},l.a.createElement("div",{style:I}),"Dennis designer")),l.a.createElement(i.a,null,l.a.createElement(m.a,{sm:{cols:12},lg:{cols:8,offset:2},center:!0},l.a.createElement("p",null,"Unni og Dennis forteller om hvordan det er å jobbe i Banksamarbeidet. Det gjøres ved å stille spørsmål på plakater a la rekrutteringsideen til UX."))),l.a.createElement(i.a,null,l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4,offset:2},center:!0},l.a.createElement("div",{style:I}),l.a.createElement("h3",{className:"ffe-h3"},"Fagdager")),l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4},center:!0},l.a.createElement("div",{style:I}),l.a.createElement("h3",{className:"ffe-h3"},"Fagforum"))),l.a.createElement(i.a,null,l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4,offset:2},center:!0},l.a.createElement("div",{style:I}),l.a.createElement("h3",{className:"ffe-h3"},"Hackathon")),l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4},center:!0},l.a.createElement("div",{style:I}),l.a.createElement("h3",{className:"ffe-h3"},"Designsystem"))),l.a.createElement(i.a,null,l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4,offset:2},center:!0},l.a.createElement("h3",{className:"ffe-h3"},"Siste fra Medium"),l.a.createElement("div",null,l.a.createElement(j,null))),l.a.createElement(m.a,{sm:{cols:12},md:{cols:6},lg:{cols:4},center:!0},l.a.createElement("h3",{className:"ffe-h3"},"Siste fra Instagram"),l.a.createElement("div",null,l.a.createElement(v,null)))),l.a.createElement(i.a,{topPadding:!0,background:"green-mint"},l.a.createElement(m.a,{sm:{cols:12},md:{cols:12},lg:{cols:8,offset:2},center:!0},l.a.createElement("h3",{className:"ffe-h3"},"Ledige stillinger"),l.a.createElement(y.a,null)))),l.a.createElement(r.Link,{to:"/ansatte/"},"Les om våre ansatte"),l.a.createElement("br",null))}},149:function(e,a,t){"use strict";var n=t(150),l=t(0),r=t.n(l),s=t(144),i=t(179);a.a=function(){return r.a.createElement("div",{className:"sb1-joblist"},r.a.createElement(s.StaticQuery,{query:"393136019",render:function(e){return e.allHRmanagerJob.edges.map(function(e){return"dummy"===e.node.Name?r.a.createElement(i.a,{element:"a",className:"sb1-joblist__link",href:"https://www.webcruiter.no/WcMain/AdvertViewPublic.aspx?oppdragsnr=4004904858&Company_Id=3670262172&Culture_Id=NB-NO&cols=3,5,7&orderby=5&listtype=1&urltarget=_blank",target:"_blank",rel:"noopener noreferrer"},"Utvikler? Bli med å skape morgendagens bank"):r.a.createElement("div",{key:e.node.Id,className:"sb1-joblist__opening"},r.a.createElement(i.a,{element:"a",className:"sb1-joblist__link",href:e.node.AdvertisementUrl,target:"_blank",rel:"noopener noreferrer"},e.node.Name))})},data:n}))}},150:function(e){e.exports={data:{allHRmanagerJob:{edges:[{node:{Id:7,Name:"dummy",ShortDescription:"",AdvertisementUrl:"",LastUpdated:"/Date(1549611757000+0100)/",Created:"/Date(1549611757000+0100)/"}}]}}}},173:function(e){e.exports={data:{allInstaNode:{edges:[{node:{id:"Bua9s4lgb_m",likes:108,comments:null,original:"https://instagram.fosl3-1.fna.fbcdn.net/vp/dd9288449228c4333a27318ea7502411/5D25FE7C/t51.2885-15/e35/51964519_295483837810874_5760506295131079800_n.jpg?_nc_ht=instagram.fosl3-1.fna.fbcdn.net",timestamp:1551347987,caption:"Å vite hvem du lager løsninger for er helt avgjørende og som regel betyr det at du ikke kan ta utganspunkt i egne behov. Derfor er det fantastisk at vi fikk til en gjennomgang av Needscope og målgruppe for alle som jobber med de digitale løsningene 🙌🏼🤓 #godesammen #kundesentrisk",localFile:{childImageSharp:{fixed:{src:"/jobbsb1/static/fe3cde362950481b8fc9b226c60ff018/b1e5c/51964519_295483837810874_5760506295131079800_n.jpg"}}}}},{node:{id:"Bt3UFL1ggX6",likes:57,comments:3,original:"https://instagram.fosl3-1.fna.fbcdn.net/vp/06796a85fa7cff51b499c2be55e02b90/5D1E8177/t51.2885-15/e35/50758912_352324985615346_7201117429157100910_n.jpg?_nc_ht=instagram.fosl3-1.fna.fbcdn.net",timestamp:1550151761,caption:"Vi elsker fagtorsdag! Fagtorsdag til alle ❤️🧡💛💚💙💜 #godesammen #sparebank1design",localFile:{childImageSharp:{fixed:{src:"/jobbsb1/static/a47da73fc8a8fe77e7002af560a35d58/b1e5c/50758912_352324985615346_7201117429157100910_n.jpg"}}}}},{node:{id:"Bt1RHdMg4vC",likes:62,comments:1,original:"https://instagram.fosl3-1.fna.fbcdn.net/vp/a1e5c328758e86b48505320007dc6112/5D15F88E/t51.2885-15/e35/50703213_125077925215146_705529316683317436_n.jpg?_nc_ht=instagram.fosl3-1.fna.fbcdn.net",timestamp:1550083098,caption:"Årets første fagkveld handlet om fintech i Kina! \nRekordoppmøte når Heidi Berg @heiheidiberg fra nHack fortalte om teknologiutviklingen og hvordan de har gått fra et kontantbasert samfunn til ren mobilbetaling 🧧📲\n#sparebank1 #godesammen",localFile:{childImageSharp:{fixed:{src:"/jobbsb1/static/c0b449add43f093a9258d4e01bc53eaf/b1e5c/50703213_125077925215146_705529316683317436_n.jpg"}}}}},{node:{id:"BtyDPIAivsA",likes:88,comments:2,original:"https://instagram.fosl3-1.fna.fbcdn.net/vp/3a57d5babf15ab62da4258e9b197c102/5D092BA2/t51.2885-15/e35/50826291_2199282773733732_5707565634534880_n.jpg?_nc_ht=instagram.fosl3-1.fna.fbcdn.net",timestamp:1549975157,caption:"Veldig bra meet up om designsystem i dag! At flere nå har dedikerte team som jobber med designsystemet, nettopp for å effektivisere arbeidet for alle team, høres ut som en smart vei å gå 🙌🏼 #godesammen",localFile:{childImageSharp:{fixed:{src:"/jobbsb1/static/5575cb2a2d64e46ac0454dbafbab49bf/b1e5c/50826291_2199282773733732_5707565634534880_n.jpg"}}}}},{node:{id:"BtvgWtCik6C",likes:68,comments:null,original:"https://instagram.fosl3-1.fna.fbcdn.net/vp/81112ed4d3fad51da1e87bda1580f31c/5D139F93/t51.2885-15/e35/50995867_562027140986161_4923667178377039844_n.jpg?_nc_ht=instagram.fosl3-1.fna.fbcdn.net",timestamp:1549889760,caption:"Sharing is caring! Design-gjengen jobber for tiden med å få delt innsikt og kunnskap med alle på engasjerende måte 🌟#sparebank1design #godesammen",localFile:{childImageSharp:{fixed:{src:"/jobbsb1/static/3a2a17bf165c7033a73b47bbaed2ad7b/b1e5c/50995867_562027140986161_4923667178377039844_n.jpg"}}}}},{node:{id:"BtgTyamAWuh",likes:58,comments:4,original:"https://instagram.fosl3-1.fna.fbcdn.net/vp/baabf8b53030b878a49aae0ec4b2e296/5D1CDC05/t51.2885-15/e35/50851589_113817373051750_3522952014983242117_n.jpg?_nc_ht=instagram.fosl3-1.fna.fbcdn.net",timestamp:1549379855,caption:"I dag har vi hatt en morsom sammen med Kitchen med fullt fokus på innholdsproduksjon 📸#strikeapose #sparebank1design",localFile:{childImageSharp:{fixed:{src:"/jobbsb1/static/4809f02ad333b01f7c49748576b4f44f/b1e5c/50851589_113817373051750_3522952014983242117_n.jpg"}}}}}]}}}},177:function(e){e.exports={data:{allMediumPost:{edges:[{node:{id:"733195c9-e648-5dc6-9e3f-01f7a6b14a18",title:"Hvem er i nabolaget?",uniqueSlug:"hvem-er-i-nabolaget-54d068f68a67",virtuals:{subtitle:"En stor del av arbeidet når en jobber med maskinlæring, er å forstå dataene en jobber med. En måte å bli bedre kjent med dataene på, er å…",previewImage:{imageId:"0*zL-lxOuvDJXQRIXt"}},author:{name:"Vidar Moe"}}},{node:{id:"6942650f-9e2a-5173-bb96-dd809550f0a0",title:"Tekstanalyse for realister — eller hvordan gjøre tekst til tall",uniqueSlug:"tekstanalyse-for-realister-eller-hvordan-gjøre-tekst-til-tall-99943afccfc1",virtuals:{subtitle:"Mye av informasjonen vi utveksler mellom oss, utveksler vi skriftlig. Med maskinlæring kan vi trekke ut meningen av denne informasjonen…",previewImage:{imageId:"1*BDdeC0EU4AxoGYwHrjy0gQ.jpeg"}},author:{name:"Vidar Moe"}}},{node:{id:"fd8c1b37-6364-5c06-9dc0-63f78e4575e5",title:"Learning machine learning: de allra bästa kurserna",uniqueSlug:"learning-machine-learning-de-allra-bästa-kurserna-bfa3584639d4",virtuals:{subtitle:"Att vara programmerare bör vara att alltid lära sig något nytt. Att konstant operera på gränsen av sin egen kompetens gør yrkesvalet…",previewImage:{imageId:"1*6FPpgL4uuFR2H0C1R5RQzw.jpeg"}},author:{name:"Jonas Nordstrand"}}},{node:{id:"83536f9e-7c5e-5c96-8897-4c115255d049",title:"Kjenn dine data",uniqueSlug:"kjenn-dine-data-5ce7fadb1d22",virtuals:{subtitle:"Når man starter et maskinlæringsprosjekt er det veldig fristende å gå rett på de forskjellige maskinlæringsalgoritmene. I et forsøk på å…",previewImage:{imageId:"0*vIs6neLQ3Rug1j9m"}},author:{name:"Inge Johnsen"}}},{node:{id:"c5aaaee5-ab17-5982-a572-69c59a7579d0",title:"Evinnelige og Forbanna Sjekklister — Nekrolog",uniqueSlug:"evinnelige-og-forbanna-sjekklister-nekrolog-864a38f58461",virtuals:{subtitle:"«Den tredje lord Moynihan, som er død i Manilla i en alder av 55 år, gav med sin personlighet og karriere kritikere av adelsvesenet mange…",previewImage:{imageId:"1*4EkoLJepB3SExa3J-ussSg.png"}},author:{name:"Jan Erik Modal"}}},{node:{id:"0fb8e7e0-7973-5c83-972e-27127596f1ce",title:"Same Same but different — Bruk av data i maskinlæring",uniqueSlug:"same-same-but-different-bruk-av-data-i-maskinlæring-cfbee554c254",virtuals:{subtitle:"Født tidlig på sekstitallet. Ikke eldst og ikke yngst i søskenflokken. Datter av en kontorfullmektig. \nVisuelt betinget dysleksi, men…",previewImage:{imageId:"1*_UqFOETC_OnjQ2JrP9ff_w.png"}},author:{name:"Jan Erik Modal"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-11cfa5e58c1a53f79a49.js.map