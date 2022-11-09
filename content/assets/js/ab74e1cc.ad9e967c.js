"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93194],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,l(l({ref:e},u),{},{components:a})):n.createElement(k,l({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42355:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"contribution",title:"Documentation Contribution Guide",sidebar_label:"Contribution Guide"},l=void 0,i={unversionedId:"documentation/contribution",id:"documentation/contribution",title:"Documentation Contribution Guide",description:"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar docs.",source:"@site/contribute/documentation/contribution.md",sourceDirName:"documentation",slug:"/documentation/contribution",permalink:"/contribute/documentation/contribution",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/documentation/contribution.md",tags:[],version:"current",lastUpdatedBy:"Yan",lastUpdatedAt:1667960765,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"contribution",title:"Documentation Contribution Guide",sidebar_label:"Contribution Guide"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/contribute/documentation/overview"},next:{title:"Label Guide",permalink:"/contribute/documentation/label"}},s={},p=[{value:"Documentation and website repos",id:"documentation-and-website-repos",level:2},{value:"Intro to doc and website repos",id:"intro-to-doc-and-website-repos",level:3},{value:"Relationships between doc and website repos",id:"relationships-between-doc-and-website-repos",level:3},{value:"Update versioned docs",id:"update-versioned-docs",level:2},{value:"Update reference docs",id:"update-reference-docs",level:2},{value:"Update Pulsar configuration docs",id:"update-pulsar-configuration-docs",level:3},{value:"Update client configuration docs",id:"update-client-configuration-docs",level:3},{value:"Update CLI tool docs",id:"update-cli-tool-docs",level:3},{value:"Update client/function matrix",id:"update-clientfunction-matrix",level:2},{value:"References",id:"references",level:2}],u={toc:p};function c(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar docs."),(0,r.kt)("h2",{id:"documentation-and-website-repos"},"Documentation and website repos"),(0,r.kt)("p",null,"This chapter shows the organization of Pulsar documentation and website repos."),(0,r.kt)("h3",{id:"intro-to-doc-and-website-repos"},"Intro to doc and website repos"),(0,r.kt)("p",null,"The Pulsar website consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Documentation")),(0,r.kt)("p",{parentName:"li"},"Pulsar documentation repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/site2"},"pulsar/site2")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(50810).Z,width:"936",height:"372"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")),(0,r.kt)("p",{parentName:"li"},"Pulsar website repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site"},"pulsar-site")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(87775).Z,width:"936",height:"224"})))),(0,r.kt)("h3",{id:"relationships-between-doc-and-website-repos"},"Relationships between doc and website repos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Repo"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"PR example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/site2"},"pulsar/site2")),(0,r.kt)("td",{parentName:"tr",align:null},"All files related to Pulsar documentation (English) are stored in this repo."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/pull/13811"},"[feat][doc] add docs for shedding strategy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Website"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site"},"pulsar-site")),(0,r.kt)("td",{parentName:"tr",align:null},"- All files related to the Pulsar website are stored in the ",(0,r.kt)("strong",{parentName:"td"},"main")," branch in this repo. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - The website is built and put in in the ",(0,r.kt)("strong",{parentName:"td"},"asf-site-next")," branch in this repo."),(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/pull/114"},"[feat][workflow] add links of doc contribution guides to Pulsar contribution page")," ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/pull/108"},"[improve][website] add download links for previous versions"))))),(0,r.kt)("p",null,"Files in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/site2"},"pulsar/site2 (master branch)")," are synced to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/site2/website-next"},"pulsar-site/website-next (main branch)")," every 6 hours. You can check the sync status and progress at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/actions/workflows/ci-pulsar-website-docs-sync.yaml"},"pulsar-site Actions"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Summary")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"pulsar/site2/",(0,r.kt)("strong",{parentName:"li"},"website")," = pulsar-site site2/",(0,r.kt)("strong",{parentName:"li"},"website-next")),(0,r.kt)("li",{parentName:"ul"},"pulsar/site2/",(0,r.kt)("strong",{parentName:"li"},"docs")," = pulsar-site/site2/",(0,r.kt)("strong",{parentName:"li"},"website-next/docs")))),(0,r.kt)("h2",{id:"update-versioned-docs"},"Update versioned docs"),(0,r.kt)("p",null,"If you want to update versioned docs, go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/site2/website/versioned_docs"},"pulsar/site2/website/versioned_docs/")," to find your desired one."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f",(0,r.kt)("strong",{parentName:"p"},"BREAKING CHANGE")),(0,r.kt)("p",{parentName:"blockquote"},"If you want to update docs for 2.8.x and later versions, follow the steps below.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the correct doc set."),(0,r.kt)("p",{parentName:"li"},"For example, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/site2/website/versioned_docs/version-2.8.x"},"version-2.8.x"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/site2/website/versioned_docs/version-2.9.x"},"version-2.9.x"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/site2/website/versioned_docs/version-2.10.x"},"version-2.10.x"),"."),(0,r.kt)("p",{parentName:"li"},"For why and how we make this change, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/16637"},"PIP-190: Simplify documentation release and maintenance strategy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add specific instructions."),(0,r.kt)("p",{parentName:"li"},"For example, if you want to add docs for an improvement introduced in 2.8.2, you can add the following instructions."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},":::note\n\nThis <feature / configuration / xx> is available for 2.8.2 and later versions.\n\n:::\n")))),(0,r.kt)("h2",{id:"update-reference-docs"},"Update reference docs"),(0,r.kt)("p",null,"If you want to update ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/reference/#/latest/"},"Pulsar configuration docs"),", pay attention to the doc source files."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some docs are generated from code ",(0,r.kt)("strong",{parentName:"p"},"automatically"),". If you want to update the docs, you need to update the source code files.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some configuration docs are updated ",(0,r.kt)("strong",{parentName:"p"},"manually")," using .md files."))),(0,r.kt)("h3",{id:"update-pulsar-configuration-docs"},"Update Pulsar configuration docs"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Components")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Update where\u2026")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Notes"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Broker"),(0,r.kt)("td",null,"org.apache.pulsar.broker.ServiceConfiguration"),(0,r.kt)("td",{rowspan:"5"},"These components are ",(0,r.kt)("strong",null,"internal"),".",(0,r.kt)("p",null,"These configuration docs are generated from code ",(0,r.kt)("strong",null,"automatically")),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Client"),(0,r.kt)("td",null,"org.apache.pulsar.client.impl.conf.ClientConfigurationData")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"WebSocket"),(0,r.kt)("td",null,"org.apache.pulsar.websocket.service.WebSocketProxyConfiguration")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Proxy"),(0,r.kt)("td",null,"org.apache.pulsar.proxy.server.ProxyConfiguration")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Standalone"),(0,r.kt)("td",null,"org.apache.pulsar.broker.ServiceConfiguration")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BookKeeper"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://github.com/apache/pulsar/blob/master/site2/docs/reference-configuration-bookkeeper.md"},"reference-configuration-bookkeeper.md")),(0,r.kt)("td",{rowspan:"4"},"These components are ",(0,r.kt)("strong",null,"external"),".",(0,r.kt)("p",null,"These configuration docs are updated ",(0,r.kt)("strong",null,"manually")),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Log4j"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://github.com/apache/pulsar/blob/master/site2/docs/reference-configuration-log4j.md"},"reference-configuration-log4j.md"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Log4j shell"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://github.com/apache/pulsar/blob/master/site2/docs/reference-configuration-log4j-shell.md"},"reference-configuration-log4j-shell.md"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ZooKeeper"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://github.com/apache/pulsar/blob/master/site2/docs/reference-configuration-zookeeper.md"},"reference-configuration-zookeeper.md")))),(0,r.kt)("h3",{id:"update-client-configuration-docs"},"Update client configuration docs"),(0,r.kt)("p",null,"Pulsar Java configuration docs are generated from code automatically."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Components"),(0,r.kt)("th",{parentName:"tr",align:null},"Update where\u2026"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.pulsar.client.impl.conf.ClientConfigurationData")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Producer"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.pulsar.client.impl.conf.ProducerConfigurationData")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.pulsar.client.impl.conf.ConsumerConfigurationData")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reader"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.pulsar.client.impl.conf.ReaderConfigurationData")))),(0,r.kt)("h3",{id:"update-cli-tool-docs"},"Update CLI tool docs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Components"),(0,r.kt)("th",{parentName:"tr",align:null},"Update where\u2026"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-admin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/admin/cli"},"pulsar/pulsar-client-tools/src/main/java/org/apache/pulsar/admin/cli/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},"Different commands are updated in different code files.",(0,r.kt)("br",null),"Details see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/bin/pulsar"},"pulsar/bin/pulsar"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/client/cli"},"pulsar/pulsar-client-tools/src/main/java/org/apache/pulsar/client/cli/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-perf"),(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("inlineCode",{parentName:"td"},"websocket-producer"),": ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/proxy/socket/client"},"pulsar/pulsar-testclient/src/main/java/org/apache/pulsar/proxy/socket/client/"),(0,r.kt)("br",null),(0,r.kt)("br",null)," - Other commands: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/testclient"},"pulsar/pulsar-testclient/src/main/java/org/apache/pulsar/testclient/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-shell"),(0,r.kt)("td",{parentName:"tr",align:null},"reference-cli-pulsar-shell.md")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-daemon"),(0,r.kt)("td",{parentName:"tr",align:null},"reference-cli-pulsar-daemon.md ",(0,r.kt)("br",null),(0,r.kt)("br",null)," (It's almost not updated and only contains 3 commands, so it's managed in ",(0,r.kt)("inlineCode",{parentName:"td"},"md")," file rather than being generated automatically)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bookkeeper"),(0,r.kt)("td",{parentName:"tr",align:null},"reference-cli-bookkeeper.md")))),(0,r.kt)("h2",{id:"update-clientfunction-matrix"},"Update client/function matrix"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Pulsar Feature Matrix")," outlines every feature supported by the Pulsar client and function."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It\u2019s public and everyone has access to edit it. Feel free to reach out to ",(0,r.kt)("inlineCode",{parentName:"p"},"liuyu@apache.org")," if you have problems in editing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This matrix will be moved to the Pulsar website (instead of the spreadsheet) in the future.")))),(0,r.kt)("p",null,"If you want to update the Pulsar Feature Matrix, follow the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit your code and doc PRs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your PR reviewed and merged.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Pulsar Feature Matrix"),", check the box in the corresponding cell with the links of PRs and doc site."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(14266).Z,width:"584",height:"442"})))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"For more guides on how to make contributions to Pulsar docs, see ",(0,r.kt)("a",{parentName:"p",href:"./../README.md"},"Pulsar Documentation Contribution Overview"),"."))}c.isMDXComponent=!0},50810:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/contribution-1-6e007372147055ffc809119dc205f535.png"},87775:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/contribution-2-e9220326a189b7c0d798adb80b9e3884.png"},14266:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/contribution-3-e5e553d47d971e39c37b9ed5cdee3ff3.png"}}]);