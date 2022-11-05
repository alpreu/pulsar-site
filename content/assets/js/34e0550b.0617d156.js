"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview"},r=void 0,s={unversionedId:"functions-overview",id:"functions-overview",title:"Pulsar Functions overview",description:"This section introduces the following content:",source:"@site/docs/functions-overview.md",sourceDirName:".",slug:"/functions-overview",permalink:"/docs/next/functions-overview",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-overview.md",tags:[],version:"current",frontMatter:{id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Schema evolution and compatibility",permalink:"/docs/next/schema-evolution-compatibility"},next:{title:"Concepts",permalink:"/docs/next/functions-concepts"}},l={},u=[{value:"What are Pulsar Functions",id:"what-are-pulsar-functions",level:2},{value:"Why use Pulsar Functions",id:"why-use-pulsar-functions",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Word count example",id:"word-count-example",level:3},{value:"Content-based routing example",id:"content-based-routing-example",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section introduces the following content:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-are-pulsar-functions"},"What are Pulsar Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-use-pulsar-functions"},"Why use Pulsar Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-cases"},"Use cases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#whats-next"},"What's next?"))),(0,o.kt)("h2",{id:"what-are-pulsar-functions"},"What are Pulsar Functions"),(0,o.kt)("p",null,"Pulsar Functions are a serverless computing framework that runs on top of Pulsar and processes messages in the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"consumes messages from one or more topics,"),(0,o.kt)("li",{parentName:"ul"},"applies a user-defined processing logic to the messages,"),(0,o.kt)("li",{parentName:"ul"},"publishes the outputs of the messages to other topics.")),(0,o.kt)("p",null,"The diagram below illustrates the three steps in the functions computing process. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pulsar Functions execute user-defined code on data published to Pulsar topics",src:n(25141).Z,width:"1346",height:"620"})),(0,o.kt)("p",null,"Each time a function receives a message, it completes the following consume-apply-publish steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Consumes the message from one or more ",(0,o.kt)("strong",{parentName:"li"},"input topics"),". "),(0,o.kt)("li",{parentName:"ol"},"Applies the customized (user-supplied) processing logic to the message."),(0,o.kt)("li",{parentName:"ol"},"Publishes the output of the message, including:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"writes output messages to an ",(0,o.kt)("strong",{parentName:"li"},"output topic")," in Pulsar"),(0,o.kt)("li",{parentName:"ol"},"writes logs to a ",(0,o.kt)("strong",{parentName:"li"},"log topic")," (if it is configured)for debugging"),(0,o.kt)("li",{parentName:"ol"},"writes ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-develop-state"},"state")," updates to BookKeeper (if it is configured) ")))),(0,o.kt)("p",null,"You can write functions in Java, Python, and Go. For example, you can use Pulsar Functions to set up the following processing chain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Python function listens for the ",(0,o.kt)("inlineCode",{parentName:"li"},"raw-sentences"),' topic and "sanitizes" incoming strings (removing extraneous white space and converting all characters to lowercase) and then publishes the results to a ',(0,o.kt)("inlineCode",{parentName:"li"},"sanitized-sentences")," topic."),(0,o.kt)("li",{parentName:"ul"},"A Java function listens for the ",(0,o.kt)("inlineCode",{parentName:"li"},"sanitized-sentences")," topic, counts the number of times each word appears within a specified time ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-concepts#window-function"},"window"),", and publishes the results to a ",(0,o.kt)("inlineCode",{parentName:"li"},"results")," topic."),(0,o.kt)("li",{parentName:"ul"},"A Python function listens for the ",(0,o.kt)("inlineCode",{parentName:"li"},"results")," topic and writes the results to a MySQL table.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/functions-develop"},"Develop Pulsar Functions")," for more details."),(0,o.kt)("h2",{id:"why-use-pulsar-functions"},"Why use Pulsar Functions"),(0,o.kt)("p",null,"Pulsar Functions perform simple computations on messages before routing the messages to consumers. These Lambda-style functions are specifically designed and integrated with Pulsar. The framework provides a simple computing framework on your Pulsar cluster and takes care of the underlying details of sending and receiving messages. You only need to focus on the business logic."),(0,o.kt)("p",null,"Pulsar Functions enable your organization to maximize the value of your data and enjoy the benefits of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplified deployment and operations - you can create a data pipeline without deploying a separate Stream Processing Engine (SPE), such as ",(0,o.kt)("a",{parentName:"li",href:"http://storm.apache.org/"},"Apache Storm"),", ",(0,o.kt)("a",{parentName:"li",href:"https://heron.incubator.apache.org/"},"Apache Heron"),", or ",(0,o.kt)("a",{parentName:"li",href:"https://flink.apache.org/"},"Apache Flink"),"."),(0,o.kt)("li",{parentName:"ul"},"Serverless computing (when you use Kubernetes runtime)"),(0,o.kt)("li",{parentName:"ul"},"Maximized developer productivity (both language-native interfaces and SDKs for Java/Python/Go)."),(0,o.kt)("li",{parentName:"ul"},"Easy troubleshooting")),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"Below are two simple examples of use cases for Pulsar Functions."),(0,o.kt)("h3",{id:"word-count-example"},"Word count example"),(0,o.kt)("p",null,"This figure shows the process of implementing the classic word count use case."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Word count example using Pulsar Functions",src:n(37966).Z,width:"1769",height:"916"})),(0,o.kt)("p",null,"In this example, the function calculates a sum of the occurrences of every individual word published to a given topic."),(0,o.kt)("h3",{id:"content-based-routing-example"},"Content-based routing example"),(0,o.kt)("p",null,"This figure demonstrates the process of implementing a content-based routing use case. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Count-based routing example using Pulsar Functions",src:n(70874).Z,width:"1772",height:"836"})),(0,o.kt)("p",null,"In this example, a function takes items (strings) as input and publishes them to either a ",(0,o.kt)("inlineCode",{parentName:"p"},"fruits")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"vegetables")," topic, depending on the item. If an item is neither fruit nor vegetable, a warning is logged to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/functions-develop-log"},"log topic"),"."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-concepts"},"Function concepts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-cli"},"Function CLIs and configs"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For developers")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-develop"},"Develop a function"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-debug"},"Debug a function"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-package"},"Package a function"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-deploy"},"Deploy a function"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For admins/operators")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-worker"},"Set up function workers"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-runtime"},"Configure function runtime"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/functions-deploy"},"Deploy a function"),".")))}p.isMDXComponent=!0},25141:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/function-overview-df56ee014ed344f64e7e0f807bd576c2.svg"},70874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-functions-routing-example-22b3f2b036505ad4d4dfd5f878de3ae3.png"},37966:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-functions-word-count-f7b0d99f0a0e03e0b20fd0aa0ff6ef48.png"}}]);