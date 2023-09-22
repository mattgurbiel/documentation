"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[929],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={hide_table_of_contents:!0},i="Dashboard (Beta)",o={unversionedId:"AppGuide/Trade/Guides/Dashboard",id:"AppGuide/Trade/Guides/Dashboard",title:"Dashboard (Beta)",description:"The dashboard is designed to help Pendle users manage all of your positions. It offers a comprehensive view of your portfolio, allowing you to easily track all of your historical and current performance on Pendle itself.",source:"@site/docs/AppGuide/Trade/Guides/Dashboard.md",sourceDirName:"AppGuide/Trade/Guides",slug:"/AppGuide/Trade/Guides/Dashboard",permalink:"/cn/AppGuide/Trade/Guides/Dashboard",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"\u9886\u53d6\u6536\u76ca\uff0f\u5956\u52b1",permalink:"/cn/AppGuide/Trade/Guides/Claim"},next:{title:"Leaderboard (Beta)",permalink:"/cn/AppGuide/Trade/Guides/Leaderboard"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"My Total Balance",id:"my-total-balance",level:4},{value:"My Net Seasonal P&amp;L",id:"my-net-seasonal-pl",level:4},{value:"My Claimable Yield &amp; Rewards",id:"my-claimable-yield--rewards",level:4},{value:"Leaderboard",id:"leaderboard",level:4},{value:"All My Positions",id:"all-my-positions",level:2},{value:"P&amp;L - Actions and Impact",id:"pl---actions-and-impact",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboard-beta"},"Dashboard (Beta)"),(0,r.kt)("p",null,"The dashboard is designed to help Pendle users manage all of your positions. It offers a comprehensive view of your portfolio, allowing you to easily track all of your historical and current performance on Pendle itself."),(0,r.kt)("p",null,"Yield and rewards accrued from any Yield Tokens (YT) and Liquidity Provision (LP) positions can also be directly monitored and claimed here."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/AppGuide/dashboard.png",alt:"Dashboard"}),(0,r.kt)("figcaption",null,"The upper part of the dashboard provides an overview of your positions.")),(0,r.kt)("h4",{id:"my-total-balance"},"My Total Balance"),(0,r.kt)("p",null,"Total current, ",(0,r.kt)("em",{parentName:"p"},"active")," positions on the selected chain in dollar terms"),(0,r.kt)("h4",{id:"my-net-seasonal-pl"},"My Net Seasonal P&L"),(0,r.kt)("p",null,"Total realized P&L on the selected chain in the season (the current Beta season spans from Nov 2022 till now). Do note that the P&L here will be counted in underlying terms. For example:"),(0,r.kt)("p",null,"Buy 1 PT-stETH with 0.9 ETH ($1000), ",(0,r.kt)("em",{parentName:"p"},"1 month later\u2026.")),(0,r.kt)("p",null,"Sell 1 PT-stETH for 0.8 ETH ($1200)"),(0,r.kt)("p",null,"The buy-and-sell transactions above will be logged as a ",(0,r.kt)("em",{parentName:"p"},"loss")," of 0.1 ETH, converted to dollar terms ($150) based on ETH price at the point of sale, despite there being a net profit in dollar terms from ETH price appreciation."),(0,r.kt)("p",null,"The P&L figure only includes realized positions. Unclaimed yield and rewards ",(0,r.kt)("em",{parentName:"p"},"will not")," count towards this P&L figure. You will have to claim the unclaimed positions for them to be included in the P&L and the overall leaderboard number."),(0,r.kt)("p",null,"For more information on how Pendle transactions are logged as P&L, you can look at the table below."),(0,r.kt)("h4",{id:"my-claimable-yield--rewards"},"My Claimable Yield & Rewards"),(0,r.kt)("p",null,"All of the accrued yield and rewards from YT and LP that can be ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pendle.finance/AppGuide/Trade/Guides/Claim"},"claimed")," on the selected chain"),(0,r.kt)("h4",{id:"leaderboard"},"Leaderboard"),(0,r.kt)("p",null,"Shows your P&L ranking compared to other yield traders on the Seasonal Leaderboard. Note that only rankings \u22651000 will be shown. You can access the Leaderboard by clicking the button ",(0,r.kt)("a",{parentName:"p",href:"https://app.pendle.finance/trade/dashboard/leaderboard/valuation"},"here"),"."),(0,r.kt)("p",null,"All of the figures shown are applicable to the selected chain only. You can switch the display by simply connecting to a different network (e.g. switching from Ethereum \u2192 Arbitrum) on the app."),(0,r.kt)("h2",{id:"all-my-positions"},"All My Positions"),(0,r.kt)("p",null,"The lower part of the Dashboard breaks down your Pendle positions by Assets, including which active positions you hold for that particular asset (i.e. PT, YT or LP), its Total Position Value as well as P&L."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"All My Positions",src:a(8799).Z,title:"All My Positions",width:"2000",height:"529"})),(0,r.kt)("p",null,"You can click on \u201cDetails\u201d for an even more comprehensive view of the asset position, which will show you a further breakdown of your position by PT, YT and LP, alongside a dynamic P&L chart (coming soon)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Position",src:a(5910).Z,title:"My Position",width:"2000",height:"1023"})),(0,r.kt)("p",null,"The \u201cTransactions\u201d tab shows all the transactions related to the asset, including realized profit by transactions. Clicking on the actions (e.g. \u201cClaim Yield\u201d or \u201cLP Transferred Out\u201d) under the column will bring you to the transaction page on the blockchain explorer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Transactions",src:a(7106).Z,title:"My Transactions",width:"2000",height:"898"})),(0,r.kt)("h2",{id:"pl---actions-and-impact"},"P&L - Actions and Impact"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Actions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"P&L Impact"),(0,r.kt)("th",{parentName:"tr",align:null},"Position Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add Dual Liquidity"),(0,r.kt)("td",{parentName:"tr",align:null},"Liquidity provision to pool with dual tokens input"),(0,r.kt)("td",{parentName:"tr",align:null},"Involves selling of PT. The average buying price of LP will be adjusted, which will incur P&L."),(0,r.kt)("td",{parentName:"tr",align:null},"PT position decreases, LP position increases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zap in"),(0,r.kt)("td",{parentName:"tr",align:null},"Liquidity provision to pool with single token input"),(0,r.kt)("td",{parentName:"tr",align:null},"The average buying price of LP will be adjusted. No impact on P&L."),(0,r.kt)("td",{parentName:"tr",align:null},"LP position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zap in (ZPI)"),(0,r.kt)("td",{parentName:"tr",align:null},"Zero price impact liquidity addition to pool with single token input"),(0,r.kt)("td",{parentName:"tr",align:null},"The average buying price of YT and LP will be adjusted. No impact on P&L."),(0,r.kt)("td",{parentName:"tr",align:null},"YT and LP positions increase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remove Dual Liquidity"),(0,r.kt)("td",{parentName:"tr",align:null},"Liquidity removal from pool with dual tokens output"),(0,r.kt)("td",{parentName:"tr",align:null},"P&L will be incurred with LP sale (if price is higher than the average LP buying price). The average buying price of PT will be adjusted."),(0,r.kt)("td",{parentName:"tr",align:null},"LP position decreases, PT position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zap Out"),(0,r.kt)("td",{parentName:"tr",align:null},"Liquidity removal from pool with single token output"),(0,r.kt)("td",{parentName:"tr",align:null},"P&L will be incurred with LP sale (if price is higher than the average LP buying price)."),(0,r.kt)("td",{parentName:"tr",align:null},"LP position decreases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mint"),(0,r.kt)("td",{parentName:"tr",align:null},"Minting of PT and YT from underlying"),(0,r.kt)("td",{parentName:"tr",align:null},"The average buying price of PT and YT will be adjusted. No impact on P&L."),(0,r.kt)("td",{parentName:"tr",align:null},"PT and YT positions increase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Redeem"),(0,r.kt)("td",{parentName:"tr",align:null},"Redemption of underlying from PT and YT"),(0,r.kt)("td",{parentName:"tr",align:null},"P&L will be incurred from PT and YT sale (depending on the average buying price of both)."),(0,r.kt)("td",{parentName:"tr",align:null},"PT and YT positions decrease.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Swap YT to PT"),(0,r.kt)("td",{parentName:"tr",align:null},"Swap YT to PT"),(0,r.kt)("td",{parentName:"tr",align:null},"P&L will be incurred from YT sale. The average buying price of PT will be adjusted."),(0,r.kt)("td",{parentName:"tr",align:null},"YT position decreases, PT position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Swap PT to YT"),(0,r.kt)("td",{parentName:"tr",align:null},"Swap PT to YT"),(0,r.kt)("td",{parentName:"tr",align:null},"P&L will be incurred from PT sale. The average buying price of YT will be adjusted."),(0,r.kt)("td",{parentName:"tr",align:null},"PT position decreases, YT position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Claim Yield"),(0,r.kt)("td",{parentName:"tr",align:null},"Claim YT accrued yield"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive P&L"),(0,r.kt)("td",{parentName:"tr",align:null},"No change(s) in positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Claim Rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"Claim LP accrued rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive P&L."),(0,r.kt)("td",{parentName:"tr",align:null},"No change(s) in positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LP Transferred In"),(0,r.kt)("td",{parentName:"tr",align:null},"Receipt of LP in wallet, includes LP withdrawal from liquid lockers"),(0,r.kt)("td",{parentName:"tr",align:null},"Considered as an LP buy. The average buying price of LP will be adjusted. No impact on P&L."),(0,r.kt)("td",{parentName:"tr",align:null},"LP position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LP Transferred Out"),(0,r.kt)("td",{parentName:"tr",align:null},"Sending LP out of wallet, includes LP deposit into liquid lockers"),(0,r.kt)("td",{parentName:"tr",align:null},"Considered as an LP sale. P&L will be incurred."),(0,r.kt)("td",{parentName:"tr",align:null},"LP position decreases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Buy PT"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy PT"),(0,r.kt)("td",{parentName:"tr",align:null},"No impact on P&L. The average PT buying price will be adjusted."),(0,r.kt)("td",{parentName:"tr",align:null},"PT position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sell PT"),(0,r.kt)("td",{parentName:"tr",align:null},"Sell PT"),(0,r.kt)("td",{parentName:"tr",align:null},"Depends on the Implied APY sold at. If Implied APY during sale is lower than the average buying price, P&L will be positive."),(0,r.kt)("td",{parentName:"tr",align:null},"PT position decreases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Buy YT"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy YT"),(0,r.kt)("td",{parentName:"tr",align:null},"No impact on P&L. The average YT buying price will be adjusted."),(0,r.kt)("td",{parentName:"tr",align:null},"YT position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sell YT"),(0,r.kt)("td",{parentName:"tr",align:null},"Sell YT"),(0,r.kt)("td",{parentName:"tr",align:null},"Depends on the Implied APY sold at. If Implied APY during sale is higher than the average buying price, P&L will be positive."),(0,r.kt)("td",{parentName:"tr",align:null},"YT position decreases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"YT Transferred In"),(0,r.kt)("td",{parentName:"tr",align:null},"Receipt of YT in wallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Considered as Buy YT"),(0,r.kt)("td",{parentName:"tr",align:null},"YT position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"YT Transferred Out"),(0,r.kt)("td",{parentName:"tr",align:null},"Sending YT out of wallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Considered as Sell YT"),(0,r.kt)("td",{parentName:"tr",align:null},"YT position decreases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PT Transferred In"),(0,r.kt)("td",{parentName:"tr",align:null},"Receipt of PT in wallet, includes withdrawal of PT collateral from money markets"),(0,r.kt)("td",{parentName:"tr",align:null},"Considered as Buy PT"),(0,r.kt)("td",{parentName:"tr",align:null},"PT position increases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PT Transferred Out"),(0,r.kt)("td",{parentName:"tr",align:null},"Sending PT out of wallet, includes depositing PT as collateral into money markets"),(0,r.kt)("td",{parentName:"tr",align:null},"Considered as Sell PT"),(0,r.kt)("td",{parentName:"tr",align:null},"PT position decreases.")))))}c.isMDXComponent=!0},8799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/all_my_positions-85a8cdde3a7005f285d165115b0bbb07.png"},5910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my_position-e06cf725cf9a1f82ecff619e34857122.png"},7106:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my_transactions-35d5c6fb63296d1d2e1a38f04a89d30d.png"}}]);