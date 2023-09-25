"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[9878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),h=r,f=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={hide_table_of_contents:!0},o="Swap",s={unversionedId:"AppGuide/Trade/Guides/Swap",id:"AppGuide/Trade/Guides/Swap",title:"Swap",description:"Getting Fixed Yield with PT",source:"@site/docs/AppGuide/Trade/Guides/Swap.md",sourceDirName:"AppGuide/Trade/Guides",slug:"/AppGuide/Trade/Guides/Swap",permalink:"/AppGuide/Trade/Guides/Swap",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Mint",permalink:"/AppGuide/Trade/Guides/Mint"},next:{title:"Pool",permalink:"/AppGuide/Trade/Guides/Pool"}},p={},l=[{value:"Getting Fixed Yield with PT",id:"getting-fixed-yield-with-pt",level:2},{value:"Boosting your yield exposure with YT",id:"boosting-your-yield-exposure-with-yt",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"swap"},"Swap"),(0,r.kt)("h2",{id:"getting-fixed-yield-with-pt"},"Getting Fixed Yield with PT"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://app.pendle.finance/pro/markets/"},"Markets"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;PT Swaps 1&quot;",src:a(3214).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Select your desired asset by clicking on the PT bar.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;PT Swaps 2&quot;",src:a(4207).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Make sure you\u2019re on the \u201cSwap\u201d tab, then choose your input asset.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;PT Swaps 3&quot;",src:a(4913).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Enter the transaction volume. You can control your slippage tolerance with the gear icon in the top right corner.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;PT Swaps 4&quot;",src:a(7631).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Review the output information.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rate: The exchange rate between the input and output token"),(0,r.kt)("li",{parentName:"ul"},"Min. Received: The minimum amount of tokens that the user will received"),(0,r.kt)("li",{parentName:"ul"},"Effective Fixed APY: The fixed APY that you are effectively getting from this trade, after taking into account price impact and swap fees. This is equivalent to the final execution price/average price of acquisition for PT.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;PT Swaps 5&quot;",src:a(469).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Once you\u2019re ready, approve the transaction and Swap!")),(0,r.kt)("h2",{id:"boosting-your-yield-exposure-with-yt"},"Boosting your yield exposure with YT"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://app.pendle.finance/pro/markets/"},"Markets"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;YT Swaps 1&quot;",src:a(4235).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Select your desired asset by clicking on the YT bar.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;YT Swaps 2&quot;",src:a(1242).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Make sure you\u2019re on the \u201cSwap\u201d tab, then choose your input asset.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;YT Swaps 3&quot;",src:a(4917).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Enter the transaction volume. You can control your slippage tolerance with the gear icon in the top right corner.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;YT Swaps 4&quot;",src:a(3729).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Review the output information.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rate: The exchange rate between the input and output token"),(0,r.kt)("li",{parentName:"ul"},"Notional value traded: The amount of underlying asset needed to generate the trade. This can also be treated as the amount of yield exposure (i.e. YT generates yield from $122,366 worth of DAI deposit)."),(0,r.kt)("li",{parentName:"ul"},"Min. Received: The minimum amount of tokens that the user will received"),(0,r.kt)("li",{parentName:"ul"},"Effective Fixed APY: The fixed APY that you are effectively getting from this trade, after taking into account price impact and swap fees. This is equivalent to the final execution price/average price of acquisition for YT.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;YT Swaps 5&quot;",src:a(6262).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Once you\u2019re ready, approve the transaction and Swap!")))}d.isMDXComponent=!0},3214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pt-swaps-1-a33c92e1819ac5f2e83afee76a85af04.png"},4207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pt-swaps-2-b73d95ae3609208b7dab71cbe76f8c0f.png"},4913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pt-swaps-3-63fc6c3a028347ac849b12e64c38fec9.png"},7631:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pt-swaps-4-8bca8ab6d8d3acbabfff120c3c102a08.png"},469:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pt-swaps-5-1dcf80623a949326c43186ae4e4d680a.png"},4235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yt-swaps-1-a33c92e1819ac5f2e83afee76a85af04.png"},1242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yt-swaps-2-30b9bfc1ba33a42ffa6a52820e949520.png"},4917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yt-swaps-3-3fd6a09c2b22ae82d2389471cf847163.png"},3729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yt-swaps-4-e7bbf6aab27c8713dd62195dd4146e68.png"},6262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yt-swaps-5-ff1d33c44c5608ce722116f04932b59c.png"}}]);