"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[3088],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>g});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=a.createContext({}),c=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=c(r),f=o,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||n;return r?a.createElement(g,l(l({ref:e},s),{},{components:r})):a.createElement(g,l({ref:e},s))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7979:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={hide_table_of_contents:!0},l="Calculator",i={unversionedId:"AppGuide/Trade/Calculator",id:"AppGuide/Trade/Calculator",title:"Calculator",description:"The Pendle Yield Calculator helps you to predict the potential returns from various strategies on Pendle, letting you identify the best yield opportunities available.",source:"@site/docs/AppGuide/Trade/Calculator.md",sourceDirName:"AppGuide/Trade",slug:"/AppGuide/Trade/Calculator",permalink:"/AppGuide/Trade/Calculator",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Dashboard",permalink:"/AppGuide/Trade/Guides/Dashboard"},next:{title:"Pools",permalink:"/AppGuide/Trade/Pools"}},u={},c=[{value:"Tutorial",id:"tutorial",level:2}],s={toc:c},p="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calculator"},"Calculator"),(0,o.kt)("p",null,"The Pendle Yield Calculator helps you to predict the potential returns from various strategies on Pendle, letting you identify the best yield opportunities available."),(0,o.kt)("h2",{id:"tutorial"},"Tutorial"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Go to Pendle Trade and click on "Calculator".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;Tutorial 1&quot;",src:r(7769).Z,width:"800",height:"450"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select one or more of the 3 strategies.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;Tutorial 2&quot;",src:r(2349).Z,width:"800",height:"450"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Pick an Underlying Asset and the corresponding Maturity Date from the dropdowns.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;Tutorial 3&quot;",src:r(8628).Z,width:"800",height:"450"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select the amount of Initial Capital you wish to supply. You can toggle the input between USD and Underlying by clicking on the respective buttons in the top right corner.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;Tutorial 4&quot;",src:r(6981).Z,width:"800",height:"450"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Key in your expected Average Future APY. This can also be used to test out the profit scenarios for various APYs. Note: Default set to the current Underlying APY.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;Tutorial 5&quot;",src:r(422).Z,width:"800",height:"450"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"If LP is selected, there will be an additional field to vary the Target Lock Duration and Target PENDLE Locked. You can also use this to check the precise minimum requirements for Max Boost.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;Tutorial 6&quot;",src:r(8113).Z,width:"800",height:"450"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Click \u201cCalculate\u201d and on the right, a table estimating the profit and APY generated by your strategy and inputs will appear.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;Tutorial 7&quot;",src:r(2194).Z,width:"800",height:"450"})))}d.isMDXComponent=!0},7769:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-1-ffb49053270d756229a1042e84874578.png"},2349:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-2-b7a1a86ceb9afcb2e8151d778025fdde.png"},8628:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-3-c6b2be29da1034bb7201542dae4f8d15.png"},6981:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-4-65d25f975a8e83c5f83a4059c04c0da4.png"},422:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-5-aebb6b5e40c32bfcc4c408fed848a8d9.png"},8113:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-6-0e5633204deebfc592087ed55adc00b8.png"},2194:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-7-ba86b9a3aee7a27a21dc0fdeeceb84b7.png"}}]);