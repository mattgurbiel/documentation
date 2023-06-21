module.exports = {
  myAutogeneratedSidebar: [
    {
      type: "doc",
      id: "Home",
      label: "Home",
    },
    {
      type: "doc",
      id: "Introduction",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "FAQ",
      label: "FAQ",
    },
    {
      type: "category",
      label: "Protocol Mechanics",
      items: [
        { type: "doc", id: "ProtocolMechanics/Glossary" },
        { type: "category",
        label: "Yield Tokenization",
        items: [
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/SY" },
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/Minting" },
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/PT" },
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/YT" },
        ]
        },
        { type: "doc", id: "ProtocolMechanics/AMM" },
        {
          type: "category",
          label: "Tokenomics, vePENDLE, Fees",
          items: [
            { type: "doc", id: "ProtocolMechanics/Mechanisms/Tokenomics" },
            { type: "doc", id: "ProtocolMechanics/Mechanisms/vePENDLE" },
            { type: "doc", id: "ProtocolMechanics/Mechanisms/Fees" },
            {
              type: "category",
              label: "Guides",
              items: [
                { type: "doc", id: "ProtocolMechanics/Mechanisms/Guides/Lock" },
                { type: "doc", id: "ProtocolMechanics/Mechanisms/Guides/ClaimRewards" },
                { type: "doc", id: "ProtocolMechanics/Mechanisms/Guides/ChannelIncentives" },
                { type: "doc", id: "ProtocolMechanics/Mechanisms/Guides/ApplyBoost" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "App Guide",
      items: [
        { type: "doc", id: "AppGuide/Earn" },
        {
          type: "category",
          label: "Pendle Trade",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Guides",
              collapsed: true,
              items: [
                { type: "doc", id: "AppGuide/Trade/Guides/UsingTrade" },
                { type: "doc", id: "AppGuide/Trade/Guides/Mint" },
                { type: "doc", id: "AppGuide/Trade/Guides/Swap" },
                { type: "doc", id: "AppGuide/Trade/Guides/Pool" },
                { type: "doc", id: "AppGuide/Trade/Guides/Claim" },
              ],
            },
            { type: "doc", id: "AppGuide/Trade/Calculator" },
            { type: "doc", id: "AppGuide/Trade/Pools" },
          ],
        },
        { type: "doc", id: "AppGuide/CreatingNewPools" },
      ],
    },
    {
      type: "category",
      label: "Developers",
      items: [
        { type: "doc", id: "Developers/Overview" },
        { type: "doc", id: "Developers/DeveloperFAQ" },
        { type: "doc", id: "Developers/HighLevelArchitecture" },
        {
          type: "category",
          label: "Contracts",
          items: [
            { type: "doc", id: "Developers/Contracts/PendleRouter" },
            { type: "doc", id: "Developers/Contracts/PendleRouterStatic" },
            { type: "doc", id: "Developers/Contracts/vePENDLE" },
          ],
        },
        {
          type: "category",
          label: "Deployments",
          items: [
            { type: "doc", id: "Developers/Deployments/Ethereum" },
            { type: "doc", id: "Developers/Deployments/Arbitrum" },
            { type: "doc", id: "Developers/Deployments/BNBChain" },
          ],
        },
        {
          type: "category",
          label: "Integration",
          items: [
            { type: "doc", id: "Developers/Integration/PTOracle" },
            { type: "doc", id: "Developers/Integration/LPOracle" },
            { type: "doc", id: "Developers/Integration/PTAsCollateral" },
            { type: "doc", id: "Developers/Integration/LPAsCollateral" },
            { type: "doc", id: "Developers/Integration/PriceImpactCalculation" },
          ],
        },
        {
          type: "category",
          label: "SDK",
          items: [
            { type: "doc", id: "Developers/SDK/GettingStarted" },
            {
              label: "Add and remove liquidity",
              type: "doc",
              id: "Developers/SDK/add-remove-liquidity.mts",
            },
            {
              label: "PT and YT trading",
              type: "doc",
              id: "Developers/SDK/buy-pt-yt.mts",
            },
            { 
              label: "Doing more things with Pendle SDK Router",
              type: "doc",
              id: "Developers/SDK/doing-more-thing-with-router.mts",
            },
            {
              label: "Using Multicall",
              type: "doc",
              id: "Developers/SDK/Multicall.mts",
            },
            {
              label: "Error handling",
              type: "doc",
              id: "Developers/SDK/error-handling.mts",
            },
            {
              label: "Utility types and functions",
              type: "doc",
              id: "Developers/SDK/utilities-types-and-functions.mts",
            },
            {
              label: "Documentation playground",
              type: "doc", 
              id: "Developers/SDK/sdk-doc-playground.mts",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      label: "Whitepapers",
      href: 'https://github.com/pendle-finance/pendle-v2-resources/tree/main/whitepapers',
    },
    {
      type: "link",
      label: "Learn In-App",
      href: 'https://app.pendle.finance/pro/education/learn',
    },
    {
      type: "link",
      label: "Yield Trading Handbook",
      href: 'https://handbook.pendle.finance/',
    },
  ],
};
