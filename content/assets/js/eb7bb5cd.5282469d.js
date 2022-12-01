"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[540],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),d=r,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},76451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={id:"functions-debug-log-topic",title:"Debug with log topic",sidebar_label:"Debug with log topic"},a=void 0,l={unversionedId:"functions-debug-log-topic",id:"functions-debug-log-topic",title:"Debug with log topic",description:"When using Pulsar Functions, you can generate logs predefined in functions to a specified log topic and configure consumers to consume messages from the log topic.",source:"@site/docs/functions-debug-log-topic.md",sourceDirName:".",slug:"/functions-debug-log-topic",permalink:"/docs/next/functions-debug-log-topic",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-debug-log-topic.md",tags:[],version:"current",frontMatter:{id:"functions-debug-log-topic",title:"Debug with log topic",sidebar_label:"Debug with log topic"},sidebar:"docsSidebar",previous:{title:"Debug with localrun mode",permalink:"/docs/next/functions-debug-localrun"},next:{title:"Debug with Functions CLI",permalink:"/docs/next/functions-debug-cli"}},c={},s=[],u={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When using Pulsar Functions, you can generate logs predefined in functions to a specified log topic and configure consumers to consume messages from the log topic. "),(0,r.kt)("p",null,"For example, the following function logs either a WARNING-level or INFO-level log based on whether the incoming string contains the word ",(0,r.kt)("inlineCode",{parentName:"p"},"danger")," or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n')),(0,r.kt)("p",null,"As shown in the example, you can get the logger via ",(0,r.kt)("inlineCode",{parentName:"p"},"context.getLogger()")," and assign the logger to the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG")," variable of ",(0,r.kt)("inlineCode",{parentName:"p"},"slf4j"),", so you can define your desired logs in a function using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG")," variable. "),(0,r.kt)("p",null,"Meanwhile, you need to specify the topic that the logs can be produced to. The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n")),(0,r.kt)("p",null,"The message published to a log topic contains several properties: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loglevel"),": the level of the log message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fqn"),": the fully qualified function name that pushes this log message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instance"),": the ID of the function instance that pushes this log message.")))}p.isMDXComponent=!0}}]);