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
          label: "Tokenomics + vePENDLE",
          items: [
            { type: "doc", id: "ProtocolMechanics/Tokenomics+vePENDLE/Tokenomics" },
            { type: "doc", id: "ProtocolMechanics/Tokenomics+vePENDLE/vePENDLE" },
            {
              type: "category",
              label: "Guides",
              items: [
                { type: "doc", id: "ProtocolMechanics/Tokenomics+vePENDLE/Guides/Lock" },
                { type: "doc", id: "ProtocolMechanics/Tokenomics+vePENDLE/Guides/ClaimRewards" },
                { type: "doc", id: "ProtocolMechanics/Tokenomics+vePENDLE/Guides/ChannelIncentives" },
                { type: "doc", id: "ProtocolMechanics/Tokenomics+vePENDLE/Guides/ApplyBoost" },
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
        { type: "doc", id: "AppGuide/Simple" },
        {
          type: "category",
          label: "Pro UI",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Guides",
              collapsed: true,
              items: [
                { type: "doc", id: "AppGuide/Pro/Guides/UsingPro" },
                { type: "doc", id: "AppGuide/Pro/Guides/Mint" },
                { type: "doc", id: "AppGuide/Pro/Guides/Swap" },
                { type: "doc", id: "AppGuide/Pro/Guides/Farm" },
                { type: "doc", id: "AppGuide/Pro/Guides/Claim" },
              ],
            },
            { type: "doc", id: "AppGuide/Pro/Calculator" },
            { type: "doc", id: "AppGuide/Pro/Pools" },
          ],
        },
        { type: "doc", id: "AppGuide/CreatingNewPools" },
      ],
    },
    {
      type: "category",
      label: "Developers",
      items: [
        {
          type: "category",
          label: "Deployed Contracts",
          items: [
            { type: "doc", id: "Developers/DeployedContracts/Ethereum" },
            { type: "doc", id: "Developers/DeployedContracts/Arbitrum" },
          ],
        },
        { type: "doc", id: "Developers/PTOracles" },

        { type: "doc", id: "Developers/SDK" },
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
      href: 'https://app.pendle.finance/pro/learn',
    },
    {
      type: "link",
      label: "Yield Trading Handbook",
      href: 'https://handbook.pendle.finance/',
    },
  ],
};
