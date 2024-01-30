"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[929],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={hide_table_of_contents:!0},l="Dashboard",o={unversionedId:"AppGuide/Trade/Guides/Dashboard",id:"AppGuide/Trade/Guides/Dashboard",title:"Dashboard",description:"The dashboard is designed to help Pendle users manage all of your positions. It offers a comprehensive view of your portfolio, allowing you to easily track all of your historical and current performance on Pendle itself.",source:"@site/docs/AppGuide/Trade/Guides/Dashboard.md",sourceDirName:"AppGuide/Trade/Guides",slug:"/AppGuide/Trade/Guides/Dashboard",permalink:"/cn/AppGuide/Trade/Guides/Dashboard",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"\u9886\u53d6\u6536\u76ca\uff0f\u5956\u52b1",permalink:"/cn/AppGuide/Trade/Guides/Claim"},next:{title:"\u8ba1\u7b97\u673a",permalink:"/cn/AppGuide/Trade/Calculator"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"My Total Balance",id:"my-total-balance",level:4},{value:"My Claimable Yield &amp; Rewards",id:"my-claimable-yield--rewards",level:4},{value:"Leaderboard",id:"leaderboard",level:4},{value:"Transfer Events",id:"transfer-events",level:4},{value:"All My Positions",id:"all-my-positions",level:2},{value:"Eligibility for Seasonal Trading Competition",id:"eligibility-for-seasonal-trading-competition",level:2},{value:"P&amp;L Calculation Basics",id:"pl-calculation-basics",level:2},{value:"Seasonal P&amp;L Calculation",id:"seasonal-pl-calculation",level:2},{value:"Pendle Transaction Events and Implications",id:"pendle-transaction-events-and-implications",level:2},{value:"External Events and Implications",id:"external-events-and-implications",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"The dashboard is designed to help Pendle users manage all of your positions. It offers a comprehensive view of your portfolio, allowing you to easily track all of your historical and current performance on Pendle itself."),(0,r.kt)("p",null,"Yield and rewards accrued from any Yield Tokens (YT) and Liquidity Provision (LP) positions can also be directly monitored and claimed here."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/AppGuide/dashboard.png",alt:"Dashboard"}),(0,r.kt)("figcaption",null,"The upper part of the dashboard provides an overview of your positions.")),(0,r.kt)("h4",{id:"my-total-balance"},"My Total Balance"),(0,r.kt)("p",null,"Total current, ",(0,r.kt)("em",{parentName:"p"},"active")," positions on the selected chain in dollar terms"),(0,r.kt)("h4",{id:"my-claimable-yield--rewards"},"My Claimable Yield & Rewards"),(0,r.kt)("p",null,"All of the accrued yield and rewards from YT and LP that can be ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pendle.finance/AppGuide/Trade/Guides/Claim"},"claimed")," on the selected chain"),(0,r.kt)("h4",{id:"leaderboard"},"Leaderboard"),(0,r.kt)("p",null,"Shows your P&L ranking compared to other yield traders on the Seasonal Leaderboard. Note that only rankings \u22651000 will be shown. You can access the Leaderboard by clicking the button ",(0,r.kt)("a",{parentName:"p",href:"https://app.pendle.finance/trade/dashboard/leaderboard/valuation"},"here"),"."),(0,r.kt)("h4",{id:"transfer-events"},"Transfer Events"),(0,r.kt)("p",null,"Asset Transfers to and from external parties or wallets, including deposit to liquid staking and money markets, are not synced in real time; instead, a global sync takes place periodically.\nYou can manually trigger a sync event on your own wallet using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sync Transfers")," button, with usage limited to once every hour. "),(0,r.kt)("h2",{id:"all-my-positions"},"All My Positions"),(0,r.kt)("p",null,"The lower part of the Dashboard breaks down your Pendle positions by Assets, including which active positions you hold for that particular asset (i.e. PT, YT or LP), its Total Position Value as well as P&L."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"All My Positions",src:a(8799).Z,title:"All My Positions",width:"2000",height:"529"})),(0,r.kt)("p",null,"You can click on \u201cDetails\u201d for an even more comprehensive view of the asset position, which will show you a further breakdown of your position by PT, YT and LP, alongside a dynamic P&L chart (coming soon)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Position",src:a(5910).Z,title:"My Position",width:"2000",height:"1023"})),(0,r.kt)("p",null,"The \u201cTransactions\u201d tab shows all the transactions related to the asset, including realized profit by transactions. Clicking on the actions (e.g. \u201cClaim Yield\u201d or \u201cLP Transferred Out\u201d) under the column will bring you to the transaction page on the blockchain explorer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Transactions",src:a(7106).Z,title:"My Transactions",width:"2000",height:"898"})),(0,r.kt)("h2",{id:"eligibility-for-seasonal-trading-competition"},"Eligibility for Seasonal Trading Competition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Position Value:")," Position must reach $1,000 at some throughout the season"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Transaction Value:")," $1000 total transaction value within the season (Season 2 onwards)")),(0,r.kt)("h2",{id:"pl-calculation-basics"},"P&L Calculation Basics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Eligible Assets:")," Only PT, YT, and LP assets in your wallet contribute to your Profit and Loss (P&L)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Personal Dashboard"),": Dashboard accessible by connecting your wallet. Data is updated live."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Global Dashboard"),": Dashboard accessible through leaderboard or URL sharing. No wallet connection required and allows access to other people\u2019s dashboards. Data is updated daily."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Capital"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The theoretical maximum capital used on Pendle (Exiting a position reduces the capital and entering a position increases the capital). The highest capital amount throughout the duration is taken as the total capital."),(0,r.kt)("li",{parentName:"ul"},"Capital is tracked in accounting asset terms for each pool and consolidated as $ amount displayed on top of the dashboard"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Calculation Methodology:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"P&L is calculated by individual pools in accounting asset terms (stETH in wstETH pool, DAI in sDAI pool, etc)."),(0,r.kt)("li",{parentName:"ul"},"P&L numbers obtained above are then converted to $ using the latest accounting asset price and displayed on the UI"),(0,r.kt)("li",{parentName:"ul"},"P&L from each pool is then aggregated to show overall P&L on top of the main dashboard"),(0,r.kt)("li",{parentName:"ul"},"This means that P&L will be positive as long as you are up in terms of accounting asset even though you have less in $ amount due to accounting asset price going down"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"P&L Calculation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On entering a position (PT, YT or LP), the ",(0,r.kt)("inlineCode",{parentName:"li"},"average buy price")," of the asset is tracked and updated after taking swap fee and price impact into account."),(0,r.kt)("li",{parentName:"ul"},"On exiting a position, the difference between the ",(0,r.kt)("inlineCode",{parentName:"li"},"output amount")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"average buy price")," is taken to calculate the realized P&L from the transaction."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"P&L types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Realized P&L:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Obtained from claiming rewards, yield, or exiting a position (PT/YT/LP)."),(0,r.kt)("li",{parentName:"ul"},"All amounts are calculated and fixed in terms of $ amount at the time of transaction."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unrealized P&L:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Obtained from unclaimed rewards, unclaimed yield, and difference between current market prices of active positions (PT/YT/LP) and average buy."),(0,r.kt)("li",{parentName:"ul"},"All amounts are calculated in terms of accounting assets and converted to $ amount using the prevailing accounting asset price on the UI."))),(0,r.kt)("li",{parentName:"ul"},"Net P&L is the sum of realized P&L and unrealized P&L"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Price and Data Update Frequency"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Personal dashboard viewed through connecting wallet is updated live, albeit with a 1 to 5 minutes delay from the time transaction is made"),(0,r.kt)("li",{parentName:"ul"},"Live update extends to the transaction entries, position value, capital and prices of assets (accounting asset and reward tokens) relevant to the P&L calculation"),(0,r.kt)("li",{parentName:"ul"},"Global dashboard (other people\u2019s dashboards) accessible through leaderboard is updated daily"),(0,r.kt)("li",{parentName:"ul"},"The delayed update extends to transaction entries, position value, capital and prices of assets (accounting asset and reward tokens) relevant to P&L calculation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Implications:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Realized P&L is fixed in accounting asset and $ terms"),(0,r.kt)("li",{parentName:"ul"},"Unrealized profit/loss from unclaimed rewards is influenced by reward asset price fluctuations until the rewards are claimed (which realizes the profit/loss)."),(0,r.kt)("li",{parentName:"ul"},"Transactions on the global dashboard and leaderboard will only be updated the next day"),(0,r.kt)("li",{parentName:"ul"},"External incentives such as trading incentives, leaderboard rewards, etc do not count towards P&L calculation")))),(0,r.kt)("h2",{id:"seasonal-pl-calculation"},"Seasonal P&L Calculation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Calculation Methodology:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Calculation mirrors all-time P&L."),(0,r.kt)("li",{parentName:"ul"},"At the season start, a snapshot of all positions and unclaimed rewards in accounting asset terms is taken."),(0,r.kt)("li",{parentName:"ul"},"This snapshot recalculates a new ",(0,r.kt)("inlineCode",{parentName:"li"},"average buy price")," for each held asset using the market price when snapshot is taken. The newly calculated ",(0,r.kt)("inlineCode",{parentName:"li"},"average buy price")," will only be used for current season\u2019s P&L."),(0,r.kt)("li",{parentName:"ul"},"P&L is reset to 0. Only balance changes, rewards and yield after the snapshot will be taken into consideration in seasonal P&L."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Implications:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Seasonal P&L can be positive even if all-time P&L remains negative (if the season starts with a lower asset price that later increases)"),(0,r.kt)("li",{parentName:"ul"},"Past realized and unrealized profits do not contribute to seasonal P&L."),(0,r.kt)("li",{parentName:"ul"},"This process is akin to closing all positions and reopening them at the start of the season.")))),(0,r.kt)("h2",{id:"pendle-transaction-events-and-implications"},"Pendle Transaction Events and Implications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"P&L impact and explanation"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Position and status updates"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Mint"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Mint PT and YT from the underlying asset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy price of PT and YT updated ",(0,r.kt)("br",null)," \u2014 PT and YT positions increase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Redeem"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Redeem PT and YT into the underlying asset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of PT and YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 PT and YT positions decrease ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of PT \u2192 Realized gain/loss ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of YT \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Buy PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Buy PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of PT updated ",(0,r.kt)("br",null)," \u2014 PT position increases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Sell PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sell PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Incur P&L based on current price and average buy price of PT  ",(0,r.kt)("br",null)," \u2014 Update Realized"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 PT position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of PT \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Buy YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Buy YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of YT updated ",(0,r.kt)("br",null)," \u2014 YT position increases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Sell YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sell YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 YT position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of YT \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Zap in"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Liquidity provision to the pool with single token input"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of LP updated ",(0,r.kt)("br",null)," \u2014 LP position increases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Zap out"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Liquidity removal from the pool with single token output"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of LP"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 LP position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of LP \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ZPI Zap in"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Zero price impact liquidity addition to the pool with single token input"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of LP updated ",(0,r.kt)("br",null)," \u2014 Average Buy Price of YT updated ",(0,r.kt)("br",null)," \u2014 LP and YT position increases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Add Dual Liquidity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Liquidity provision to pool with dual tokens input (PT + underlying)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average buy price of LP updated ",(0,r.kt)("br",null)," \u2014 LP position increases ",(0,r.kt)("br",null)," \u2014 PT position decreases ",(0,r.kt)("br",null)," \u2014 unrealized gain/loss of PT \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Remove Dual Liquidity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Liquidity removal from pool with dual tokens output (PT + underlying)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of LP"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 LP position decreases ",(0,r.kt)("br",null)," \u2014 PT position increases ",(0,r.kt)("br",null)," \u2014 Average Buy price of PT updated ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of LP \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Swap YT to PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Swap YT to PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of PT updated ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," \u2014 PT position increases ",(0,r.kt)("br",null)," \u2014 YT position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of YT \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Swap PT to YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Swap PT to YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of YT updated ",(0,r.kt)("br",null)," \u2014 YT position increases ",(0,r.kt)("br",null)," \u2014 PT position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of PT \u2192 Realized gain/loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Claim Rewards"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Claim accrued Rewards from LP and YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on reward amount in terms of accounting asset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rewards accrued becomes realized gain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Claim Yield"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Claim accrued interest from YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"- Incur P&L based on yield amount in terms of accounting asset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"- Yield accrued becomes realized gain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"PT Transfer Out"),(0,r.kt)("td",{parentName:"tr",align:"center"},"PT transferred out of the wallet (including transferring to a Money Market to be used as collateral)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of PT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 PT position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of PT \u2192 Realized gain/loss ",(0,r.kt)("br",null)," \u2014 Treated as market sell PT ",(0,r.kt)("br",null)," \u2014 Price used is that of when the transaction is synced NOT when the transaction is made")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"PT Transfer In"),(0,r.kt)("td",{parentName:"tr",align:"center"},"PT transferred into the wallet (including from withdrawal from a Money Market)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of PT updated ",(0,r.kt)("br",null)," \u2014 PT position increases ",(0,r.kt)("br",null)," \u2014 Treated as market buy PT ",(0,r.kt)("br",null)," \u2014 Price used is that of when the transaction is synced NOT when the transaction is made")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"YT Transfer Out"),(0,r.kt)("td",{parentName:"tr",align:"center"},"YT transferred out of the wallet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of YT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 YT position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of YT \u2192 Realized gain/loss ",(0,r.kt)("br",null)," \u2014 Treated as market sell YT ",(0,r.kt)("br",null)," \u2014 Price used is that of when the transaction is synced NOT when the transaction is made")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"YT Transfer In"),(0,r.kt)("td",{parentName:"tr",align:"center"},"YT transferred into the wallet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of YT updated ",(0,r.kt)("br",null)," \u2014 YT position increases ",(0,r.kt)("br",null)," \u2014 Treated as market buy YT ",(0,r.kt)("br",null)," \u2014 Price used is that of when the transaction is synced NOT when the transaction is made")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"LP Transfer Out"),(0,r.kt)("td",{parentName:"tr",align:"center"},"LP transferred out of the wallet (including depositing into liquid lockers)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Incur P&L based on current price and average buy price of LP"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 LP position decreases ",(0,r.kt)("br",null)," \u2014 Unrealized gain/loss of LP \u2192 Realized gain/loss ",(0,r.kt)("br",null)," \u2014 Treated as market sell LP ",(0,r.kt)("br",null)," \u2014 Price used is that of when the transaction is synced NOT when the transaction is made")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"LP Transfer In"),(0,r.kt)("td",{parentName:"tr",align:"center"},"LP transferred into the wallet (including withdrawing from liquid lockers)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No Impact"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Average Buy Price of LP updated ",(0,r.kt)("br",null)," \u2014 LP position increases ",(0,r.kt)("br",null)," \u2014 Treated as market buy LP ",(0,r.kt)("br",null)," \u2014 Price used is that of when the transaction is synced NOT when the transaction is made")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Current price > average buy price \u2192 profit"),(0,r.kt)("li",{parentName:"ul"},"Current price < average buy price \u2192 loss"),(0,r.kt)("li",{parentName:"ul"},"All prices are in terms of accounting asset (ETH for wstETH pool, DAI for sDAI pool, etc) for calculation purposes"))),(0,r.kt)("h2",{id:"external-events-and-implications"},"External Events and Implications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Event"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Implications"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Accounting asset price changes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 $ amount of P&L will change ",(0,r.kt)("br",null)," \u2014 Unrealized P&L from unclaimed yields and rewards will change depending on the new exchange rate between reward assets and accounting assets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Reward asset price changes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2014 Unrealized P&L from unclaimed yields and rewards will change depending on the new exchange rate between reward assets and accounting assets")))))}u.isMDXComponent=!0},8799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/all_my_positions-85a8cdde3a7005f285d165115b0bbb07.png"},5910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my_position-e06cf725cf9a1f82ecff619e34857122.png"},7106:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my_transactions-35d5c6fb63296d1d2e1a38f04a89d30d.png"}}]);