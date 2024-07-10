import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'migaloo',
  assets: [
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/B1F66414EA8D434F52150F7EC1E79BC917BE78B60E7D5FB089607936FAE67139',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/B1F66414EA8D434F52150F7EC1E79BC917BE78B60E7D5FB089607936FAE67139',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-121',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-53'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/AEE2F7EF838464848886097FA71AAB4A3A085F16D7585A0ED8B972383710B69F',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/AEE2F7EF838464848886097FA71AAB4A3A085F16D7585A0ED8B972383710B69F',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primary_color_hex: '#343434'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-39',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/29278C138D7BDA1A32C544A6CAEBA89FD02BA0DD56937C331924985BCF1524CA',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/29278C138D7BDA1A32C544A6CAEBA89FD02BA0DD56937C331924985BCF1524CA',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primary_color_hex: '#fc4454'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/3EEF3E486C8CE8ECA37512967D7FAAD54728367336874AD03931AD12E4D9C53B',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/3EEF3E486C8CE8ECA37512967D7FAAD54728367336874AD03931AD12E4D9C53B',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primary_color_hex: '#645ca4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/7B1F816B491BB08812213F157AA1B5B06994D8139DA1F0D3DEF76993778A4EBE',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/7B1F816B491BB08812213F157AA1B5B06994D8139DA1F0D3DEF76993778A4EBE',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/1C2D8505A29823310B4484E4C63CFDCB08C0D3B57537A615A45F4E5D42CDC789',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/1C2D8505A29823310B4484E4C63CFDCB08C0D3B57537A615A45F4E5D42CDC789',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/9DA44D4D38B3BAF79CCE7EECE15D8D3F67904C9710EE1C6FCDE07288CA9C045C',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/9DA44D4D38B3BAF79CCE7EECE15D8D3F67904C9710EE1C6FCDE07288CA9C045C',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/FFA5D90EDC3B7974B3F1E4F66E7AD99D6FAABF8C372E2EE72185824BAFF77A9B',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/FFA5D90EDC3B7974B3F1E4F66E7AD99D6FAABF8C372E2EE72185824BAFF77A9B',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/9E531EC0621230B80FDBD6D00E37ABA292D4743D5DCAD7A3D79A714F114EC6E5',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/9E531EC0621230B80FDBD6D00E37ABA292D4743D5DCAD7A3D79A714F114EC6E5',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/05BB049185F73887B5010F121C4034B7FF055D049F7D09D3123C923D451732BC',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/05BB049185F73887B5010F121C4034B7FF055D049F7D09D3123C923D451732BC',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1FC428A0B612FE568730A624C02C2156577C7FE54FDCF30423BADF23A93E213F',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/1FC428A0B612FE568730A624C02C2156577C7FE54FDCF30423BADF23A93E213F',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D3A7D8C8D20FADD4158AC3D827AF464B5DDAABCFCA09AD72EDF0C663D1BC012E',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/D3A7D8C8D20FADD4158AC3D827AF464B5DDAABCFCA09AD72EDF0C663D1BC012E',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2C6C49CA180F4975113055E63EAC783C5572A1B8155371A22B4F437A682117FD',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/2C6C49CA180F4975113055E63EAC783C5572A1B8155371A22B4F437A682117FD',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-210',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/54EE2583A6907B48E1AF14594F6E91B95E358D9D871E9FAD7D6D6B709E813FE7',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/54EE2583A6907B48E1AF14594F6E91B95E358D9D871E9FAD7D6D6B709E813FE7',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/12DF4DBD62C4FE64ED5AA5B98077DD8871EC46E12D68A2E1F243705A495B8EAD',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/12DF4DBD62C4FE64ED5AA5B98077DD8871EC46E12D68A2E1F243705A495B8EAD',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/A92B5E87F11F0C24BFDEDDCE2B36AF5FF6D18910030E99BF58CC4D8309176843',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/A92B5E87F11F0C24BFDEDDCE2B36AF5FF6D18910030E99BF58CC4D8309176843',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/96658DE44BF70C47C26582AFB16454253ADA7CA03AA5FC2F196296A468E6625B',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/96658DE44BF70C47C26582AFB16454253ADA7CA03AA5FC2F196296A468E6625B',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-58',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/B1F66414EA8D434F52150F7EC1E79BC917BE78B60E7D5FB089607936FAE67139',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/B1F66414EA8D434F52150F7EC1E79BC917BE78B60E7D5FB089607936FAE67139',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-121',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-53'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/AEE2F7EF838464848886097FA71AAB4A3A085F16D7585A0ED8B972383710B69F',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/AEE2F7EF838464848886097FA71AAB4A3A085F16D7585A0ED8B972383710B69F',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primary_color_hex: '#343434'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-39',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/29278C138D7BDA1A32C544A6CAEBA89FD02BA0DD56937C331924985BCF1524CA',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/29278C138D7BDA1A32C544A6CAEBA89FD02BA0DD56937C331924985BCF1524CA',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primary_color_hex: '#fc4454'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/3EEF3E486C8CE8ECA37512967D7FAAD54728367336874AD03931AD12E4D9C53B',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/3EEF3E486C8CE8ECA37512967D7FAAD54728367336874AD03931AD12E4D9C53B',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primary_color_hex: '#645ca4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/7B1F816B491BB08812213F157AA1B5B06994D8139DA1F0D3DEF76993778A4EBE',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/7B1F816B491BB08812213F157AA1B5B06994D8139DA1F0D3DEF76993778A4EBE',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/1C2D8505A29823310B4484E4C63CFDCB08C0D3B57537A615A45F4E5D42CDC789',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/1C2D8505A29823310B4484E4C63CFDCB08C0D3B57537A615A45F4E5D42CDC789',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/9DA44D4D38B3BAF79CCE7EECE15D8D3F67904C9710EE1C6FCDE07288CA9C045C',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/9DA44D4D38B3BAF79CCE7EECE15D8D3F67904C9710EE1C6FCDE07288CA9C045C',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/FFA5D90EDC3B7974B3F1E4F66E7AD99D6FAABF8C372E2EE72185824BAFF77A9B',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/FFA5D90EDC3B7974B3F1E4F66E7AD99D6FAABF8C372E2EE72185824BAFF77A9B',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/9E531EC0621230B80FDBD6D00E37ABA292D4743D5DCAD7A3D79A714F114EC6E5',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/9E531EC0621230B80FDBD6D00E37ABA292D4743D5DCAD7A3D79A714F114EC6E5',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/05BB049185F73887B5010F121C4034B7FF055D049F7D09D3123C923D451732BC',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/05BB049185F73887B5010F121C4034B7FF055D049F7D09D3123C923D451732BC',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1FC428A0B612FE568730A624C02C2156577C7FE54FDCF30423BADF23A93E213F',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/1FC428A0B612FE568730A624C02C2156577C7FE54FDCF30423BADF23A93E213F',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D3A7D8C8D20FADD4158AC3D827AF464B5DDAABCFCA09AD72EDF0C663D1BC012E',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/D3A7D8C8D20FADD4158AC3D827AF464B5DDAABCFCA09AD72EDF0C663D1BC012E',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2C6C49CA180F4975113055E63EAC783C5572A1B8155371A22B4F437A682117FD',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/2C6C49CA180F4975113055E63EAC783C5572A1B8155371A22B4F437A682117FD',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-102',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-210',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/54EE2583A6907B48E1AF14594F6E91B95E358D9D871E9FAD7D6D6B709E813FE7',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/54EE2583A6907B48E1AF14594F6E91B95E358D9D871E9FAD7D6D6B709E813FE7',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/12DF4DBD62C4FE64ED5AA5B98077DD8871EC46E12D68A2E1F243705A495B8EAD',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/12DF4DBD62C4FE64ED5AA5B98077DD8871EC46E12D68A2E1F243705A495B8EAD',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/A92B5E87F11F0C24BFDEDDCE2B36AF5FF6D18910030E99BF58CC4D8309176843',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/A92B5E87F11F0C24BFDEDDCE2B36AF5FF6D18910030E99BF58CC4D8309176843',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/96658DE44BF70C47C26582AFB16454253ADA7CA03AA5FC2F196296A468E6625B',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/96658DE44BF70C47C26582AFB16454253ADA7CA03AA5FC2F196296A468E6625B',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-120',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-58',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/5E4FD529FEB6E329682D2FE07AD2C46C50EB711700CF19FB812A2A20326FA457',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/5E4FD529FEB6E329682D2FE07AD2C46C50EB711700CF19FB812A2A20326FA457',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/87635B762976673FD5C6F45518A10AA2A283F8F9ED54E3349B84924634A06EB7',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/87635B762976673FD5C6F45518A10AA2A283F8F9ED54E3349B84924634A06EB7',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/30D5011FCC5F78E3BC85997FD197475D11C0C304F0209C81829A6B1156E1567C',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/30D5011FCC5F78E3BC85997FD197475D11C0C304F0209C81829A6B1156E1567C',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-642',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-642',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/7F977DD9265DD84BBFF026C93AC87B3CEABDA4064E5A0B1059CB14B056D629D5',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/7F977DD9265DD84BBFF026C93AC87B3CEABDA4064E5A0B1059CB14B056D629D5',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-57',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/C6E9743113F3CEEDBA77DD2716647E704CAD494EF7D92F47520C42525A23FD8E',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/C6E9743113F3CEEDBA77DD2716647E704CAD494EF7D92F47520C42525A23FD8E',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primary_color_hex: '#9c1c1c'
          }
        }],
      socials: {
        website: 'https://www.sei.io/',
        twitter: 'https://twitter.com/SeiNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/942C773E4FB3EC42C643499216DC2FE051BE35A0CA698F88914B6D358AFC2A3B',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/942C773E4FB3EC42C643499216DC2FE051BE35A0CA698F88914B6D358AFC2A3B',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png',
          theme: {
            primary_color_hex: '#2b1619'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/294784AEC606DBCDC595033731D96044C8DE473FA102A61CF490DCBC3C0B9F04',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/294784AEC606DBCDC595033731D96044C8DE473FA102A61CF490DCBC3C0B9F04',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#b7dfbd'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-269',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/0D56341FC4A3EC39925202ACA596959D271974508E9717E8683D92678FB7B3D1',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/0D56341FC4A3EC39925202ACA596959D271974508E9717E8683D92678FB7B3D1',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-104',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-56'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/5E4FD529FEB6E329682D2FE07AD2C46C50EB711700CF19FB812A2A20326FA457',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/5E4FD529FEB6E329682D2FE07AD2C46C50EB711700CF19FB812A2A20326FA457',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/87635B762976673FD5C6F45518A10AA2A283F8F9ED54E3349B84924634A06EB7',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/87635B762976673FD5C6F45518A10AA2A283F8F9ED54E3349B84924634A06EB7',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/30D5011FCC5F78E3BC85997FD197475D11C0C304F0209C81829A6B1156E1567C',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/30D5011FCC5F78E3BC85997FD197475D11C0C304F0209C81829A6B1156E1567C',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-642',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-642',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/7F977DD9265DD84BBFF026C93AC87B3CEABDA4064E5A0B1059CB14B056D629D5',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/7F977DD9265DD84BBFF026C93AC87B3CEABDA4064E5A0B1059CB14B056D629D5',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-57',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/C6E9743113F3CEEDBA77DD2716647E704CAD494EF7D92F47520C42525A23FD8E',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/C6E9743113F3CEEDBA77DD2716647E704CAD494EF7D92F47520C42525A23FD8E',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primary_color_hex: '#9c1c1c'
          }
        }],
      socials: {
        website: 'https://www.sei.io/',
        twitter: 'https://twitter.com/SeiNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/942C773E4FB3EC42C643499216DC2FE051BE35A0CA698F88914B6D358AFC2A3B',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/942C773E4FB3EC42C643499216DC2FE051BE35A0CA698F88914B6D358AFC2A3B',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png',
          theme: {
            primary_color_hex: '#2b1619'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/294784AEC606DBCDC595033731D96044C8DE473FA102A61CF490DCBC3C0B9F04',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/294784AEC606DBCDC595033731D96044C8DE473FA102A61CF490DCBC3C0B9F04',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#b7dfbd'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-269',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/0D56341FC4A3EC39925202ACA596959D271974508E9717E8683D92678FB7B3D1',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/0D56341FC4A3EC39925202ACA596959D271974508E9717E8683D92678FB7B3D1',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-104',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-56'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/D8536583D4A5F7EBDD5D80056E6085501B4685C67C89930A5FD2F0C3A2EFB228',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/D8536583D4A5F7EBDD5D80056E6085501B4685C67C89930A5FD2F0C3A2EFB228',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primary_color_hex: '#2c2c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/AAF6CEBDF3E51AB8C746073FD349FADC056A5517FB8646B556DDBBEB6D7ECCBD',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/AAF6CEBDF3E51AB8C746073FD349FADC056A5517FB8646B556DDBBEB6D7ECCBD',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/6A171A9A6DBBF5DDB976CD215EAA667641FA8EE35EDC95ACDBF68C810B62F0F5',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/6A171A9A6DBBF5DDB976CD215EAA667641FA8EE35EDC95ACDBF68C810B62F0F5',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primary_color_hex: '#342c52'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/F68DBD13D4F5E660A121C5DF056FEDE99B945DEC75852619A5D036EE0341DF3C',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/F68DBD13D4F5E660A121C5DF056FEDE99B945DEC75852619A5D036EE0341DF3C',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primary_color_hex: '#3142fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/E7E026B5DD193646610A90F539B1545444169747E41BE69E51C3FD54711147A2',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/E7E026B5DD193646610A90F539B1545444169747E41BE69E51C3FD54711147A2',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primary_color_hex: '#b8a2dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/AE0C9CE569EE20F96337C1F71F77134C44643400EF57A9FA5E55E5F129A988E3',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/AE0C9CE569EE20F96337C1F71F77134C44643400EF57A9FA5E55E5F129A988E3',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primary_color_hex: '#7b04eb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/94FE39D7691ADFBC695713A005247EA86EE61C3603FE710C150DB9DEB6840C30',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/94FE39D7691ADFBC695713A005247EA86EE61C3603FE710C150DB9DEB6840C30',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primary_color_hex: '#694c90'
          }
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/5CF3A796D9DF0CF79BDC4F6727F219FF82AC2FB6946BBD3241B63B4DD34185E1',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/5CF3A796D9DF0CF79BDC4F6727F219FF82AC2FB6946BBD3241B63B4DD34185E1',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primary_color_hex: '#f2b854'
          }
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/833AF07E9DCC93D75C210FA3F0081D5F8F84AE4DD93687ED4AFDE3A3DE47F09E',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/833AF07E9DCC93D75C210FA3F0081D5F8F84AE4DD93687ED4AFDE3A3DE47F09E',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg',
          theme: {
            primary_color_hex: '#c49df3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The governance token of the White Whale protocol on Terra.',
      type_asset: 'cw20',
      address: 'terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
      denom_units: [{
          denom: 'ibc/BCF262B55DF305B2DB415D2C2B3E4950CE0675D2480C17D3547A7A91F054DB8F',
          exponent: 0,
          aliases: ['cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/BCF262B55DF305B2DB415D2C2B3E4950CE0675D2480C17D3547A7A91F054DB8F',
      name: 'Whale Token',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png',
          theme: {
            primary_color_hex: '#43b24b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6E15A0D87B3D8D2D875E87B401C2721A416028273FA9DAA5322559BB880128F7',
          exponent: 0,
          aliases: ['cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp']
        }, {
          denom: 'bluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
      base: 'ibc/6E15A0D87B3D8D2D875E87B401C2721A416028273FA9DAA5322559BB880128F7',
      name: 'Bonded Luna',
      display: 'bluna',
      symbol: 'bLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png',
          theme: {
            primary_color_hex: '#fbdb5b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9DBBAEDF7AAC8D5B3213366B293760E8E30B5BEB0A6BAEE0F10B3167E902175F',
          exponent: 0,
          aliases: ['cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun']
        }, {
          denom: 'beth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
      base: 'ibc/9DBBAEDF7AAC8D5B3213366B293760E8E30B5BEB0A6BAEE0F10B3167E902175F',
      name: 'Bonded ETH',
      display: 'beth',
      symbol: 'bETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png',
          theme: {
            primary_color_hex: '#54b649'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/29559719FF04754152805849D896B53682A211F7378DF5108CF52882E3607434',
          exponent: 0,
          aliases: ['cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu']
        }, {
          denom: 'aust',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
      base: 'ibc/29559719FF04754152805849D896B53682A211F7378DF5108CF52882E3607434',
      name: 'Anchor Terra USD',
      display: 'aust',
      symbol: 'aUST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png',
          theme: {
            primary_color_hex: '#dd7e7f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/17C04B44BA8D887CDB6D15DCEE0561FAF7AE493876747BB908DA4A877B142B21',
          exponent: 0,
          aliases: ['cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76']
        }, {
          denom: 'anc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
      base: 'ibc/17C04B44BA8D887CDB6D15DCEE0561FAF7AE493876747BB908DA4A877B142B21',
      name: 'Anchor Token',
      display: 'anc',
      symbol: 'ANC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3639D691837A2534719B9FE80F2F2768837C826F031F5273F0ADD118BEF13FED',
          exponent: 0,
          aliases: ['cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6']
        }, {
          denom: 'mir',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
      base: 'ibc/3639D691837A2534719B9FE80F2F2768837C826F031F5273F0ADD118BEF13FED',
      name: 'Mirror',
      display: 'mir',
      symbol: 'MIR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png',
          theme: {
            primary_color_hex: '#142444'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E6CE87D38D7CE8149F9D1AEFAB7AD1648763684A8414926D130EFD79558D21C',
          exponent: 0,
          aliases: ['cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz']
        }, {
          denom: 'maapl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
      base: 'ibc/0E6CE87D38D7CE8149F9D1AEFAB7AD1648763684A8414926D130EFD79558D21C',
      name: 'Apple Inc.',
      display: 'maapl',
      symbol: 'mAAPL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png',
          theme: {
            primary_color_hex: '#acacac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D877C714B25D11E4E1E11D22C873F3E3F0FFF21E42777464913E5C05CD7DB2F8',
          exponent: 0,
          aliases: ['cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n']
        }, {
          denom: 'mabnb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
      base: 'ibc/D877C714B25D11E4E1E11D22C873F3E3F0FFF21E42777464913E5C05CD7DB2F8',
      name: 'Airbnb Inc.',
      display: 'mabnb',
      symbol: 'mABNB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png',
          theme: {
            primary_color_hex: '#e4545c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CE171E8C213734D30AB8A9C23D702AE9B42DB043D0D788DA7429DC36D7341AF5',
          exponent: 0,
          aliases: ['cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy']
        }, {
          denom: 'mamc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
      base: 'ibc/CE171E8C213734D30AB8A9C23D702AE9B42DB043D0D788DA7429DC36D7341AF5',
      name: 'AMC Entertainment Holdings Inc.',
      display: 'mamc',
      symbol: 'mAMC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png',
          theme: {
            primary_color_hex: '#cc2444'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5D041ED2C833233E855574B2AAB2375B25446ABE160259788D5BBC2C2673B206',
          exponent: 0,
          aliases: ['cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z']
        }, {
          denom: 'mamd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
      base: 'ibc/5D041ED2C833233E855574B2AAB2375B25446ABE160259788D5BBC2C2673B206',
      name: 'Advanced Micro Devices, Inc.',
      display: 'mamd',
      symbol: 'mAMD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D1AA8FB2CAA33E23C444A9DFAFA5FBB82075638B1E566CB8211C32C523D5A288',
          exponent: 0,
          aliases: ['cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2']
        }, {
          denom: 'mamzn',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
      base: 'ibc/D1AA8FB2CAA33E23C444A9DFAFA5FBB82075638B1E566CB8211C32C523D5A288',
      name: 'Amazon.com, Inc.',
      display: 'mamzn',
      symbol: 'mAMZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/117FDFB30AA363439850383F72F4680D197654EC46E65583AFCDBEFC93D14E64',
          exponent: 0,
          aliases: ['cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6']
        }, {
          denom: 'markk',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
      base: 'ibc/117FDFB30AA363439850383F72F4680D197654EC46E65583AFCDBEFC93D14E64',
      name: 'ARK Innovation ETF',
      display: 'markk',
      symbol: 'mARKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png',
          theme: {
            primary_color_hex: '#0d0d25'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DC2677C64BE2BF1805F533A576E35F2E962B7A73F0E9B119502882F944D3D088',
          exponent: 0,
          aliases: ['cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa']
        }, {
          denom: 'mbaba',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
      base: 'ibc/DC2677C64BE2BF1805F533A576E35F2E962B7A73F0E9B119502882F944D3D088',
      name: 'Alibaba Group Holding Limited',
      display: 'mbaba',
      symbol: 'mBABA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png',
          theme: {
            primary_color_hex: '#f38506'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/22AD1EC7FC1240C038912C4665441A62D8FABF648AABD7AFDC2DB2A20AB48CFB',
          exponent: 0,
          aliases: ['cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw']
        }, {
          denom: 'mbtc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
      base: 'ibc/22AD1EC7FC1240C038912C4665441A62D8FABF648AABD7AFDC2DB2A20AB48CFB',
      name: 'Bitcoin',
      display: 'mbtc',
      symbol: 'mBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png',
          theme: {
            primary_color_hex: '#f4941c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D2BA32DB8563811609F3F852888FFCD7FEA1917A0CF0C4EEB150AF813F4BE529',
          exponent: 0,
          aliases: ['cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph']
        }, {
          denom: 'mcoin',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
      base: 'ibc/D2BA32DB8563811609F3F852888FFCD7FEA1917A0CF0C4EEB150AF813F4BE529',
      name: 'Coinbase Global, Inc.',
      display: 'mcoin',
      symbol: 'mCOIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png',
          theme: {
            primary_color_hex: '#1454f4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D6134B65B2CED43D478691F60988B5BAE47D2AB35198C0EAA4959F9D3A551737',
          exponent: 0,
          aliases: ['cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5']
        }, {
          denom: 'mdis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
      base: 'ibc/D6134B65B2CED43D478691F60988B5BAE47D2AB35198C0EAA4959F9D3A551737',
      name: 'The Walt Disney Company',
      display: 'mdis',
      symbol: 'mDIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png',
          theme: {
            primary_color_hex: '#050505'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E6A0BE1B9ED9B51F45779B1FA564C1B2DDE0BEB7C29376FCC68BC0CC0C36599',
          exponent: 0,
          aliases: ['cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r']
        }, {
          denom: 'mdot',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
      base: 'ibc/0E6A0BE1B9ED9B51F45779B1FA564C1B2DDE0BEB7C29376FCC68BC0CC0C36599',
      name: 'Polkadot',
      display: 'mdot',
      symbol: 'mDOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2E38137313985574485E7241897949AF7945F7EE27EB4F706B2A963DD895FD01',
          exponent: 0,
          aliases: ['cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx']
        }, {
          denom: 'meth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
      base: 'ibc/2E38137313985574485E7241897949AF7945F7EE27EB4F706B2A963DD895FD01',
      name: 'Ether',
      display: 'meth',
      symbol: 'mETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png',
          theme: {
            primary_color_hex: '#5c648e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/98A7135E3E6CDD609E0B46592BE5B30329B907E949B31125881D45A37112EEF5',
          exponent: 0,
          aliases: ['cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7']
        }, {
          denom: 'mfb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
      base: 'ibc/98A7135E3E6CDD609E0B46592BE5B30329B907E949B31125881D45A37112EEF5',
      name: 'Facebook Inc.',
      display: 'mfb',
      symbol: 'mFB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png',
          theme: {
            primary_color_hex: '#1c74f4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/8BECD6125E06DAC0902ADC61D458A5DC3A6686918C0A75910C1F2A05B06885FC',
          exponent: 0,
          aliases: ['cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls']
        }, {
          denom: 'mglxy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
      base: 'ibc/8BECD6125E06DAC0902ADC61D458A5DC3A6686918C0A75910C1F2A05B06885FC',
      name: 'Galaxy Digital Holdings Ltd',
      display: 'mglxy',
      symbol: 'mGLXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png',
          theme: {
            primary_color_hex: '#1d4cac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/379B6AD66E26E214E2315DB2D37784527BCF019CE22BB599F1BC6DE66B859CE7',
          exponent: 0,
          aliases: ['cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p']
        }, {
          denom: 'mgme',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
      base: 'ibc/379B6AD66E26E214E2315DB2D37784527BCF019CE22BB599F1BC6DE66B859CE7',
      name: 'GameStop Corp',
      display: 'mgme',
      symbol: 'mGME',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png',
          theme: {
            primary_color_hex: '#070707'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5BB43C3FB68746C67664463431C0BF6C3A79F48C265C8BCEAC97A316533F4BE6',
          exponent: 0,
          aliases: ['cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt']
        }, {
          denom: 'mgoogl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
      base: 'ibc/5BB43C3FB68746C67664463431C0BF6C3A79F48C265C8BCEAC97A316533F4BE6',
      name: 'Alphabet Inc.',
      display: 'mgoogl',
      symbol: 'mGOOGL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png',
          theme: {
            primary_color_hex: '#34ac54'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/80AA3DFE0E8762D9B09290BD9B1AD01288D9FC2A019371D038621D349E0B2E65',
          exponent: 0,
          aliases: ['cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v']
        }, {
          denom: 'mgs',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
      base: 'ibc/80AA3DFE0E8762D9B09290BD9B1AD01288D9FC2A019371D038621D349E0B2E65',
      name: 'Goldman Sachs Group Inc.',
      display: 'mgs',
      symbol: 'mGS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png',
          theme: {
            primary_color_hex: '#749cc4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2B1A0FB7F2143EBDC60C78AC405EE0E4D285CB29C5B8E61AAF930D79FE2B696A',
          exponent: 0,
          aliases: ['cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr']
        }, {
          denom: 'mhood',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
      base: 'ibc/2B1A0FB7F2143EBDC60C78AC405EE0E4D285CB29C5B8E61AAF930D79FE2B696A',
      name: 'Robinhood Markets, Inc.',
      display: 'mhood',
      symbol: 'mHOOD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png',
          theme: {
            primary_color_hex: '#54c48c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/461263C3629E3203B837A7AE6F3C1B23341A740786B5222E730BA16397FE807D',
          exponent: 0,
          aliases: ['cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq']
        }, {
          denom: 'miau',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
      base: 'ibc/461263C3629E3203B837A7AE6F3C1B23341A740786B5222E730BA16397FE807D',
      name: 'iShares Gold Trust',
      display: 'miau',
      symbol: 'mIAU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AFC79D1A1D1FC5376F44768A3E1A00F8B035E7153ABC38C6CE76242C301BCB19',
          exponent: 0,
          aliases: ['cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec']
        }, {
          denom: 'miau',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
      base: 'ibc/AFC79D1A1D1FC5376F44768A3E1A00F8B035E7153ABC38C6CE76242C301BCB19',
      name: 'iShares Gold Trust',
      display: 'miau',
      symbol: 'mIAU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BCAC49BA42C7A52138E6780175B25C208CA355D4723A48E7AE2A9D075789059B',
          exponent: 0,
          aliases: ['cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2']
        }, {
          denom: 'mjnj',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
      base: 'ibc/BCAC49BA42C7A52138E6780175B25C208CA355D4723A48E7AE2A9D075789059B',
      name: 'Johnson & Johnson',
      display: 'mjnj',
      symbol: 'mJNJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png',
          theme: {
            primary_color_hex: '#c41d2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/794DFC0799119A5BC8D18782EB9BE56E3FAFE558B048AFED2025CDD19BCC7D25',
          exponent: 0,
          aliases: ['cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm']
        }, {
          denom: 'mko',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
      base: 'ibc/794DFC0799119A5BC8D18782EB9BE56E3FAFE558B048AFED2025CDD19BCC7D25',
      name: 'Coca-Cola',
      display: 'mko',
      symbol: 'mKO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png',
          theme: {
            primary_color_hex: '#fcc9cc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A813C79B640B5429C6FB9C02C0C0229253829F1E19F7E96F13CF210D952EAC7C',
          exponent: 0,
          aliases: ['cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6']
        }, {
          denom: 'mmsft',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
      base: 'ibc/A813C79B640B5429C6FB9C02C0C0229253829F1E19F7E96F13CF210D952EAC7C',
      name: 'Microsoft Corporation',
      display: 'mmsft',
      symbol: 'mMSFT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png',
          theme: {
            primary_color_hex: '#04a4ec'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9AF591DBDDF18B83C13E654DB253C2396F283F2C9C9F5A4217331CBCD82FACD9',
          exponent: 0,
          aliases: ['cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k']
        }, {
          denom: 'mnflx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
      base: 'ibc/9AF591DBDDF18B83C13E654DB253C2396F283F2C9C9F5A4217331CBCD82FACD9',
      name: 'Netflix, Inc.',
      display: 'mnflx',
      symbol: 'mNFLX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png',
          theme: {
            primary_color_hex: '#af040c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FF3C2C246D0BB7AF54FBC93C3E0FFD96217B2828B9C24FB69AFCF4A1320C83A0',
          exponent: 0,
          aliases: ['cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p']
        }, {
          denom: 'mnio',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
      base: 'ibc/FF3C2C246D0BB7AF54FBC93C3E0FFD96217B2828B9C24FB69AFCF4A1320C83A0',
      name: 'NIO Inc.',
      display: 'mnio',
      symbol: 'mNIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A61E571AB287837DF9ED60C21D4E888715CF814723AD6A20EECF76C0A4930937',
          exponent: 0,
          aliases: ['cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g']
        }, {
          denom: 'mnke',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
      base: 'ibc/A61E571AB287837DF9ED60C21D4E888715CF814723AD6A20EECF76C0A4930937',
      name: 'NIKE, Inc.',
      display: 'mnke',
      symbol: 'mNKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9E131204958E219C7ED3A51D458B69056C11F7C6B7A9F281E25D83F626EE0D8D',
          exponent: 0,
          aliases: ['cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8']
        }, {
          denom: 'mnvda',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
      base: 'ibc/9E131204958E219C7ED3A51D458B69056C11F7C6B7A9F281E25D83F626EE0D8D',
      name: 'NVIDIA Corporation',
      display: 'mnvda',
      symbol: 'mNVDA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png',
          theme: {
            primary_color_hex: '#74bc04'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A67497E4C10738126FFAC63A7548644CCD3EA0466CA9AC76C7D15CA5E073FB31',
          exponent: 0,
          aliases: ['cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx']
        }, {
          denom: 'mpypl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
      base: 'ibc/A67497E4C10738126FFAC63A7548644CCD3EA0466CA9AC76C7D15CA5E073FB31',
      name: 'PayPal Holdings Inc',
      display: 'mpypl',
      symbol: 'mPYPL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png',
          theme: {
            primary_color_hex: '#24377a'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/14EABCE633B66603E29C134FA84FE06AA347D8B034FC46369A0024522FD8DCF4',
          exponent: 0,
          aliases: ['cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp']
        }, {
          denom: 'mqqq',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
      base: 'ibc/14EABCE633B66603E29C134FA84FE06AA347D8B034FC46369A0024522FD8DCF4',
      name: 'Invesco QQQ Trust',
      display: 'mqqq',
      symbol: 'mQQQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png',
          theme: {
            primary_color_hex: '#041c7c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6CEA15D573B096B627BEA63F7BBB228ABA8EE4DF20F7FC9A926CC94E5E73F1F8',
          exponent: 0,
          aliases: ['cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga']
        }, {
          denom: 'msbux',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
      base: 'ibc/6CEA15D573B096B627BEA63F7BBB228ABA8EE4DF20F7FC9A926CC94E5E73F1F8',
      name: 'Starbucks Corporation',
      display: 'msbux',
      symbol: 'mSBUX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png',
          theme: {
            primary_color_hex: '#047444'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DFDAE1567248649CF9D5EC1835ABB12761AFBC2AED5EB19060FF408908EF0911',
          exponent: 0,
          aliases: ['cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp']
        }, {
          denom: 'mslv',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
      base: 'ibc/DFDAE1567248649CF9D5EC1835ABB12761AFBC2AED5EB19060FF408908EF0911',
      name: 'iShares Silver Trust',
      display: 'mslv',
      symbol: 'mSLV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DEB942DE9DD098BA4CFBB6654F5444F25A56C0EB33C5329D9D15FB8AF0E551DF',
          exponent: 0,
          aliases: ['cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc']
        }, {
          denom: 'mspy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
      base: 'ibc/DEB942DE9DD098BA4CFBB6654F5444F25A56C0EB33C5329D9D15FB8AF0E551DF',
      name: 'SPDR S&P 500',
      display: 'mspy',
      symbol: 'mSPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EA218D93FD0E3688E9B4AC62E295D99DEA2043990FB082544841D1009DC25BC4',
          exponent: 0,
          aliases: ['cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh']
        }, {
          denom: 'msq',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
      base: 'ibc/EA218D93FD0E3688E9B4AC62E295D99DEA2043990FB082544841D1009DC25BC4',
      name: 'Square, Inc.',
      display: 'msq',
      symbol: 'mSQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F329E5D2BFFBAD5F16983DF2549CE6F6A655BFD24723724B05B63EC3B2BE1C93',
          exponent: 0,
          aliases: ['cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh']
        }, {
          denom: 'mtsla',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
      base: 'ibc/F329E5D2BFFBAD5F16983DF2549CE6F6A655BFD24723724B05B63EC3B2BE1C93',
      name: 'Tesla, Inc.',
      display: 'mtsla',
      symbol: 'mTSLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png',
          theme: {
            primary_color_hex: '#e41c34'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2B8084B5048DB35C40AE85744B3FD45B0DDAC5A86D8D9EF64EE99A54B08B8456',
          exponent: 0,
          aliases: ['cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg']
        }, {
          denom: 'mtwtr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
      base: 'ibc/2B8084B5048DB35C40AE85744B3FD45B0DDAC5A86D8D9EF64EE99A54B08B8456',
      name: 'Twitter, Inc.',
      display: 'mtwtr',
      symbol: 'mTWTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png',
          theme: {
            primary_color_hex: '#2cace4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/90D8F8EF83A5E35C82377AB9A735969A18B57E026F01D5725923612C2BFFC698',
          exponent: 0,
          aliases: ['cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf']
        }, {
          denom: 'muso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
      base: 'ibc/90D8F8EF83A5E35C82377AB9A735969A18B57E026F01D5725923612C2BFFC698',
      name: 'United States Oil Fund, LP',
      display: 'muso',
      symbol: 'mUSO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ECA2DFCADA8C767E650717148A935ACE1FEDA0FE48D422B4DF9C3BBF0B3031FD',
          exponent: 0,
          aliases: ['cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx']
        }, {
          denom: 'mvixy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
      base: 'ibc/ECA2DFCADA8C767E650717148A935ACE1FEDA0FE48D422B4DF9C3BBF0B3031FD',
      name: 'ProShares VIX Short-Term Futures ETF',
      display: 'mvixy',
      symbol: 'mVIXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C0AA732868D82983B97A95DB5C90ADED46A9954998FCA6585D51009CBF1FBAA0',
          exponent: 0,
          aliases: ['cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45']
        }, {
          denom: 'mvixy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
      base: 'ibc/C0AA732868D82983B97A95DB5C90ADED46A9954998FCA6585D51009CBF1FBAA0',
      name: 'ProShares VIX Short-Term Futures ETF',
      display: 'mvixy',
      symbol: 'mVIXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/59779E77B0CD760AA361E2347EB58D1BE50BB1115B3E44C2FEBEE9F7E4B6D4A0',
          exponent: 0,
          aliases: ['cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr']
        }, {
          denom: 'lota',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
      base: 'ibc/59779E77B0CD760AA361E2347EB58D1BE50BB1115B3E44C2FEBEE9F7E4B6D4A0',
      name: 'loterra',
      display: 'lota',
      symbol: 'LOTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png',
          theme: {
            primary_color_hex: '#c63adc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D2504173A093D2ADD04CF33D4C2FBB9BB3E7500892B436ED2980A4D5AA8AD569',
          exponent: 0,
          aliases: ['cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7']
        }, {
          denom: 'dph',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
      base: 'ibc/D2504173A093D2ADD04CF33D4C2FBB9BB3E7500892B436ED2980A4D5AA8AD569',
      name: 'Digipharm',
      display: 'dph',
      symbol: 'DPH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png',
          theme: {
            primary_color_hex: '#2c4c9c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/56D749EC4FC9F0657D225539BB4F0962D2DCE7EA22230611E5798D2049723F8C',
          exponent: 0,
          aliases: ['cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy']
        }, {
          denom: 'mine',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
      base: 'ibc/56D749EC4FC9F0657D225539BB4F0962D2DCE7EA22230611E5798D2049723F8C',
      name: 'Pylon MINE Token',
      display: 'mine',
      symbol: 'MINE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png',
          theme: {
            primary_color_hex: '#042c44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4D022D33F748D0521F7920B496A4A9EA755C6004C46FC46970C2C8AB99A4686F',
          exponent: 0,
          aliases: ['cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y']
        }, {
          denom: 'bpsidp-24m',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
      base: 'ibc/4D022D33F748D0521F7920B496A4A9EA755C6004C46FC46970C2C8AB99A4686F',
      name: 'Pylon bDP Token for Gateway Psi 24m Pool',
      display: 'bpsidp-24m',
      symbol: 'bPsiDP-24m',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png',
          theme: {
            primary_color_hex: '#3d6d8e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D60B1882B75C011585E412FB1A596B62E4373C98A964B04D6097EB6342E389D0',
          exponent: 0,
          aliases: ['cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr']
        }, {
          denom: 'spec',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
      base: 'ibc/D60B1882B75C011585E412FB1A596B62E4373C98A964B04D6097EB6342E389D0',
      name: 'Spectrum Token',
      display: 'spec',
      symbol: 'SPEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png',
          theme: {
            primary_color_hex: '#fa2d6c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DD7205ADA3EAC54E01CAEF87FD77736A557D892FB4D722FBCF05B640FD814D78',
          exponent: 0,
          aliases: ['cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4']
        }, {
          denom: 'loop',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
      base: 'ibc/DD7205ADA3EAC54E01CAEF87FD77736A557D892FB4D722FBCF05B640FD814D78',
      name: 'LOOP token',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png',
          theme: {
            primary_color_hex: '#04dff9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FC2AC53B5F1819104F5C6430FB2435E29A7FA9BFEC0E091704843F43042F993C',
          exponent: 0,
          aliases: ['cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q']
        }, {
          denom: 'loopr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
      base: 'ibc/FC2AC53B5F1819104F5C6430FB2435E29A7FA9BFEC0E091704843F43042F993C',
      name: 'LOOPR token',
      display: 'loopr',
      symbol: 'LOOPR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png',
          theme: {
            primary_color_hex: '#550555'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/571EECA4657D78B6E7B3CAF86F8FD0C65F74552ED65745A7F90204B8E247CBAA',
          exponent: 0,
          aliases: ['cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n']
        }, {
          denom: 'stt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
      base: 'ibc/571EECA4657D78B6E7B3CAF86F8FD0C65F74552ED65745A7F90204B8E247CBAA',
      name: 'StarTerra Token',
      display: 'stt',
      symbol: 'STT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png',
          theme: {
            primary_color_hex: '#f5e604'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3BDEADB9655A8E4E573E829AABA198AA2332268B18E3E9F226B3FCEF8A30E9CC',
          exponent: 0,
          aliases: ['cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6']
        }, {
          denom: 'twd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
      base: 'ibc/3BDEADB9655A8E4E573E829AABA198AA2332268B18E3E9F226B3FCEF8A30E9CC',
      name: 'TWD Token',
      display: 'twd',
      symbol: 'TWD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png',
          theme: {
            primary_color_hex: '#25abe3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6FE10582B89D7E0E220A797C003562C76876076323263F0301D12C060F2A9CFB',
          exponent: 0,
          aliases: ['cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc']
        }, {
          denom: 'xtra',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
      base: 'ibc/6FE10582B89D7E0E220A797C003562C76876076323263F0301D12C060F2A9CFB',
      name: 'xterra Token',
      display: 'xtra',
      symbol: 'XTRA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png',
          theme: {
            primary_color_hex: '#0c9cd4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9B651FCCDE2FB0A29BE783B32B3B861CAD82900747DDB377006461A518B2595D',
          exponent: 0,
          aliases: ['cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63']
        }, {
          denom: 'miaw',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
      base: 'ibc/9B651FCCDE2FB0A29BE783B32B3B861CAD82900747DDB377006461A518B2595D',
      name: 'MIAW Token',
      display: 'miaw',
      symbol: 'MIAW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png',
          theme: {
            primary_color_hex: '#060606'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9114AABBE0644F2D7B426B703FBC3F01BA3C6F16059D5018F87D3E612F6E786C',
          exponent: 0,
          aliases: ['cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608']
        }, {
          denom: 'psi',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra12897djskt9rge8dtmm86w654g7kzckkd698608',
      base: 'ibc/9114AABBE0644F2D7B426B703FBC3F01BA3C6F16059D5018F87D3E612F6E786C',
      name: 'Nexus Governance Token',
      display: 'psi',
      symbol: 'Psi',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png',
          theme: {
            primary_color_hex: '#1c1c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4997475CAD7F16FE3AF24A11DE5E832B6DEBE924BDCA3130B76F8AC360B2AF92',
          exponent: 0,
          aliases: ['cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j']
        }, {
          denom: 'nluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
      base: 'ibc/4997475CAD7F16FE3AF24A11DE5E832B6DEBE924BDCA3130B76F8AC360B2AF92',
      name: 'Nexus nLuna Token',
      display: 'nluna',
      symbol: 'nLuna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3A4823C4B70E13C94F395B6A0AFDACFA789C6ECCB5D579793C397EC88AF34E24',
          exponent: 0,
          aliases: ['cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn']
        }, {
          denom: 'neth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
      base: 'ibc/3A4823C4B70E13C94F395B6A0AFDACFA789C6ECCB5D579793C397EC88AF34E24',
      name: 'Nexus nETH Token',
      display: 'neth',
      symbol: 'nETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0614E418BDF9474B4D90EC9665DE838D0175728CFBF3D269F1E87A129A9F45DF',
          exponent: 0,
          aliases: ['cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj']
        }, {
          denom: 'cnluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
      base: 'ibc/0614E418BDF9474B4D90EC9665DE838D0175728CFBF3D269F1E87A129A9F45DF',
      name: 'nLuna autocompounder share representation',
      display: 'cnluna',
      symbol: 'cnLuna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/304E673F963E9843ABB7731B16F96700B0683F8BB919353CEA968FA0683F1822',
          exponent: 0,
          aliases: ['cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756']
        }, {
          denom: 'cneth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
      base: 'ibc/304E673F963E9843ABB7731B16F96700B0683F8BB919353CEA968FA0683F1822',
      name: 'nETH autocompounder share representation',
      display: 'cneth',
      symbol: 'cnETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E3F1ACAB2DA3C9123D9805902EB29FF47EBB40643B8B51EC40C3B74AC1B23A7',
          exponent: 0,
          aliases: ['cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636']
        }, {
          denom: 'navax',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
      base: 'ibc/0E3F1ACAB2DA3C9123D9805902EB29FF47EBB40643B8B51EC40C3B74AC1B23A7',
      name: 'Nexus nAVAX Token',
      display: 'navax',
      symbol: 'nAVAX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/262216F7419306C3D3F2AE6182FAFF2D565DDA65A1C3D73A8D5FAA75013DE979',
          exponent: 0,
          aliases: ['cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade']
        }, {
          denom: 'natom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
      base: 'ibc/262216F7419306C3D3F2AE6182FAFF2D565DDA65A1C3D73A8D5FAA75013DE979',
      name: 'Nexus nATOM Token',
      display: 'natom',
      symbol: 'nATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/27BDEC8200AE430DE9C09D8D3D65B6F876ADE5FEBF55203D62A79C8298938703',
          exponent: 0,
          aliases: ['cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5']
        }, {
          denom: 'vkr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
      base: 'ibc/27BDEC8200AE430DE9C09D8D3D65B6F876ADE5FEBF55203D62A79C8298938703',
      name: 'VKR Token',
      display: 'vkr',
      symbol: 'VKR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/38CB1EB8BD4B40FBEFCB806D51B3AAF2C3AF48FFCF3D8FD15BC3F17B8B2357CA',
          exponent: 0,
          aliases: ['cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03']
        }, {
          denom: 'orion',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
      base: 'ibc/38CB1EB8BD4B40FBEFCB806D51B3AAF2C3AF48FFCF3D8FD15BC3F17B8B2357CA',
      name: 'Orion Money (Portal)',
      display: 'orion',
      symbol: 'ORION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png',
          theme: {
            primary_color_hex: '#04bc74'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/30BE1EF2FDB274C0D75069F968E7CD493DE330CBE67B6D02DB3E85E5F233E38E',
          exponent: 0,
          aliases: ['cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc']
        }, {
          denom: 'tland',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
      base: 'ibc/30BE1EF2FDB274C0D75069F968E7CD493DE330CBE67B6D02DB3E85E5F233E38E',
      name: 'TerraLand Token',
      display: 'tland',
      symbol: 'TLAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png',
          theme: {
            primary_color_hex: '#c3a990'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/947638EF5D68F7D0EF37CBEB663AE895B7AA97BEA1BAEC139DD3E803F2E8B2C7',
          exponent: 0,
          aliases: ['cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg']
        }, {
          denom: 'vust',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
      base: 'ibc/947638EF5D68F7D0EF37CBEB663AE895B7AA97BEA1BAEC139DD3E803F2E8B2C7',
      name: 'Vault UST',
      display: 'vust',
      symbol: 'vUST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png',
          theme: {
            primary_color_hex: '#3ccb64'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EF1DE042DAF1A8D9B008BE6AA48AE3C658515EE267F023E8F64A678C2F82A1B4',
          exponent: 0,
          aliases: ['cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r']
        }, {
          denom: 'eth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
      base: 'ibc/EF1DE042DAF1A8D9B008BE6AA48AE3C658515EE267F023E8F64A678C2F82A1B4',
      name: 'Ether (Portal)',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png',
          theme: {
            primary_color_hex: '#2d2831'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E4E9483AB63C182FCAD03570E0D102CDDD3732F91691B0F1F45D934124282CB3',
          exponent: 0,
          aliases: ['cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
      base: 'ibc/E4E9483AB63C182FCAD03570E0D102CDDD3732F91691B0F1F45D934124282CB3',
      name: 'Wrapped BTC (Portal)',
      display: 'wbtc',
      symbol: 'WBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png',
          theme: {
            primary_color_hex: '#f3931e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/850AB866E9D3F66A73BF8CA6DB8ECEF129C39C671CA800A18EFDB49250FFB03D',
          exponent: 0,
          aliases: ['cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk']
        }, {
          denom: 'sol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
      base: 'ibc/850AB866E9D3F66A73BF8CA6DB8ECEF129C39C671CA800A18EFDB49250FFB03D',
      name: 'SOL (Portal)',
      display: 'sol',
      symbol: 'SOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D5FB90FA59AAAF69F61A1CF2BFAB43575054D9127EA04EB49C11BE1B8A8906D6',
          exponent: 0,
          aliases: ['cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq']
        }, {
          denom: 'maticet',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
      base: 'ibc/D5FB90FA59AAAF69F61A1CF2BFAB43575054D9127EA04EB49C11BE1B8A8906D6',
      name: 'MATIC (Portal from Ethereum)',
      display: 'maticet',
      symbol: 'MATICet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png',
          theme: {
            primary_color_hex: '#8447e1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/92C5A58F9473DD4431B8E9DA4A352554B09539C3294D42632116CCCAAB7B7139',
          exponent: 0,
          aliases: ['cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8']
        }, {
          denom: 'bnb',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
      base: 'ibc/92C5A58F9473DD4431B8E9DA4A352554B09539C3294D42632116CCCAAB7B7139',
      name: 'Binance Coin (Portal)',
      display: 'bnb',
      symbol: 'BNB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png',
          theme: {
            primary_color_hex: '#f4bc2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ED58215EF205066F7993540559BB741BD3A9064DCD556FEB84ACFDB562AD833E',
          exponent: 0,
          aliases: ['cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av']
        }, {
          denom: 'cake',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
      base: 'ibc/ED58215EF205066F7993540559BB741BD3A9064DCD556FEB84ACFDB562AD833E',
      name: 'PancakeSwap Token (Portal)',
      display: 'cake',
      symbol: 'CAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png',
          theme: {
            primary_color_hex: '#d0894d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B429EF78C02815A33A40B904525B5921ED37D7BC2C0B3343F60EEEBE6883C1D1',
          exponent: 0,
          aliases: ['cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym']
        }, {
          denom: 'link',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
      base: 'ibc/B429EF78C02815A33A40B904525B5921ED37D7BC2C0B3343F60EEEBE6883C1D1',
      name: 'Chainlink (Portal)',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
          theme: {
            primary_color_hex: '#345cd4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/55CACAE76125B1DDD31B0C6DA7CEC60630804D104F47F91678F15C53E451400A',
          exponent: 0,
          aliases: ['cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a']
        }, {
          denom: 'sushi',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
      base: 'ibc/55CACAE76125B1DDD31B0C6DA7CEC60630804D104F47F91678F15C53E451400A',
      name: 'SushiToken (Portal)',
      display: 'sushi',
      symbol: 'SUSHI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png',
          theme: {
            primary_color_hex: '#cd68ac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/33B48781BF15012E9A6151C732B19CF9721B9B5B0BD599FD6DB504C15A74FAD1',
          exponent: 0,
          aliases: ['cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf']
        }, {
          denom: 'uni',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
      base: 'ibc/33B48781BF15012E9A6151C732B19CF9721B9B5B0BD599FD6DB504C15A74FAD1',
      name: 'Uniswap (Portal)',
      display: 'uni',
      symbol: 'UNI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png',
          theme: {
            primary_color_hex: '#b01e66'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E261633E4F3355780244D7251A0C63CFB6BF67A787A0856694D94C8204246128',
          exponent: 0,
          aliases: ['cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva']
        }, {
          denom: 'usdtet',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
      base: 'ibc/E261633E4F3355780244D7251A0C63CFB6BF67A787A0856694D94C8204246128',
      name: 'Tether USD (Portal from Ethereum)',
      display: 'usdtet',
      symbol: 'USDTet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png',
          theme: {
            primary_color_hex: '#56a995'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9B6696ED84C26EE8DB88FC15547117E9DF0BFE3C3096D18D78330F12956B5E74',
          exponent: 0,
          aliases: ['cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06']
        }, {
          denom: 'usdcet',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
      base: 'ibc/9B6696ED84C26EE8DB88FC15547117E9DF0BFE3C3096D18D78330F12956B5E74',
      name: 'USD Coin (Portal from Ethereum)',
      display: 'usdcet',
      symbol: 'USDCet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png',
          theme: {
            primary_color_hex: '#2a75c9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/11E64FDCDC6C58300CC57D48AFDDDA3A3146B0EA8266F65B8E9384C02E4AD251',
          exponent: 0,
          aliases: ['cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
      base: 'ibc/11E64FDCDC6C58300CC57D48AFDDDA3A3146B0EA8266F65B8E9384C02E4AD251',
      name: 'Kujira Token',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png',
          theme: {
            primary_color_hex: '#24242c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AE76A6550A49D9A4D7F7672E7FEB1F4D5083E86D9938DC71D72CD7CA613076AD',
          exponent: 0,
          aliases: ['cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw']
        }, {
          denom: 'skuji',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
      base: 'ibc/AE76A6550A49D9A4D7F7672E7FEB1F4D5083E86D9938DC71D72CD7CA613076AD',
      name: 'Staked KUJI',
      display: 'skuji',
      symbol: 'sKUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png',
          theme: {
            primary_color_hex: '#252933'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/58B8B9392AC646CC1DFED9F9E1874F2296987565D59BBA165940217E2E866692',
          exponent: 0,
          aliases: ['cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur']
        }, {
          denom: 'wsteth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
      base: 'ibc/58B8B9392AC646CC1DFED9F9E1874F2296987565D59BBA165940217E2E866692',
      name: 'Lido wstETH (Portal)',
      display: 'wsteth',
      symbol: 'wstETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png',
          theme: {
            primary_color_hex: '#9cdcfc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B71002633CAB3A6FCA1F6E54AF57519ADF6C5F909E2E44C15EDF404C85535CFC',
          exponent: 0,
          aliases: ['cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap']
        }, {
          denom: 'wstsol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
      base: 'ibc/B71002633CAB3A6FCA1F6E54AF57519ADF6C5F909E2E44C15EDF404C85535CFC',
      name: 'Lido wstSOL (Portal)',
      display: 'wstsol',
      symbol: 'wstSOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png',
          theme: {
            primary_color_hex: '#1dbffc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D0FC6C7B16D5568AE0FC0557FF888B29D777E3CAA446822A64C99546DA7768CF',
          exponent: 0,
          aliases: ['cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj']
        }, {
          denom: 'wsbsol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
      base: 'ibc/D0FC6C7B16D5568AE0FC0557FF888B29D777E3CAA446822A64C99546DA7768CF',
      name: 'Lido bonded SOL (Portal)',
      display: 'wsbsol',
      symbol: 'wsbSOL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/048F036D1ECC8AE2D26435EF6C9AA1ACBBA3743F9E31966E14E5711AEF1CBE63',
          exponent: 0,
          aliases: ['cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z']
        }, {
          denom: 'ldo',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
      base: 'ibc/048F036D1ECC8AE2D26435EF6C9AA1ACBBA3743F9E31966E14E5711AEF1CBE63',
      name: 'Lido DAO (Portal)',
      display: 'ldo',
      symbol: 'LDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png',
          theme: {
            primary_color_hex: '#f49c8c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/09F296B2336A3B2391CCC454DC4A466EA351F06D8B7C38638087D47BEE811C2C',
          exponent: 0,
          aliases: ['cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz']
        }, {
          denom: 'webeth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
      base: 'ibc/09F296B2336A3B2391CCC454DC4A466EA351F06D8B7C38638087D47BEE811C2C',
      name: 'Lido Bonded ETH (Wormhole)',
      display: 'webeth',
      symbol: 'webETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E44072502CD109E5B775A21C4B83E486FAD81EB107252D184EF4518795177436',
          exponent: 0,
          aliases: ['cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc']
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
      base: 'ibc/E44072502CD109E5B775A21C4B83E486FAD81EB107252D184EF4518795177436',
      name: 'Lido staked Luna',
      display: 'stluna',
      symbol: 'stLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png',
          theme: {
            primary_color_hex: '#1fc0fb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/97FC6DD800F0C29C0A271E9BAFECB63B619D0F5329CEF101AFC4D77CC8DCEB9C',
          exponent: 0,
          aliases: ['cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh']
        }, {
          denom: 'xdefi',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
      base: 'ibc/97FC6DD800F0C29C0A271E9BAFECB63B619D0F5329CEF101AFC4D77CC8DCEB9C',
      name: 'XDEFI (Portal)',
      display: 'xdefi',
      symbol: 'XDEFI',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/132FA30C798374D808D8920BFEBEEE6FA97B0AF082927BBC29F8710A6A0B62DB',
          exponent: 0,
          aliases: ['cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl']
        }, {
          denom: 'btl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
      base: 'ibc/132FA30C798374D808D8920BFEBEEE6FA97B0AF082927BBC29F8710A6A0B62DB',
      name: 'Bitlocus Token',
      display: 'btl',
      symbol: 'BTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png',
          theme: {
            primary_color_hex: '#5cbc8c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CF1B0BF883FDD19F19252C40A54333AB4094A30E57B7D96747BFE68323EA1217',
          exponent: 0,
          aliases: ['cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup']
        }, {
          denom: 'lunax',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
      base: 'ibc/CF1B0BF883FDD19F19252C40A54333AB4094A30E57B7D96747BFE68323EA1217',
      name: 'LunaX Token',
      display: 'lunax',
      symbol: 'LunaX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png',
          theme: {
            primary_color_hex: '#cdcdce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FF77B77B363117B5C6F356428636667295A31F9BB06C147B4363364EE2A4212B',
          exponent: 0,
          aliases: ['cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7']
        }, {
          denom: 'luni',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
      base: 'ibc/FF77B77B363117B5C6F356428636667295A31F9BB06C147B4363364EE2A4212B',
      name: 'LUNI',
      display: 'luni',
      symbol: 'LUNI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png',
          theme: {
            primary_color_hex: '#232742'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2212EDBD0F77A64B54AC193C5F9D31840BD6FDAD04AB95CCC3FBAC299D98F786',
          exponent: 0,
          aliases: ['cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu']
        }, {
          denom: 'ply',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
      base: 'ibc/2212EDBD0F77A64B54AC193C5F9D31840BD6FDAD04AB95CCC3FBAC299D98F786',
      name: 'PlayNity Token',
      display: 'ply',
      symbol: 'PLY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png',
          theme: {
            primary_color_hex: '#070706'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A660C159A5333572F18E9BCEE715E51E01627458F4A98EEE73E3565C8D59F1D9',
          exponent: 0,
          aliases: ['cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj']
        }, {
          denom: 'tfloki',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
      base: 'ibc/A660C159A5333572F18E9BCEE715E51E01627458F4A98EEE73E3565C8D59F1D9',
      name: 'TFLOKI',
      display: 'tfloki',
      symbol: 'TFLOKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png',
          theme: {
            primary_color_hex: '#f6c911'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/93C53C18687171754C7A8FC9258198611D54F8047B2A568422282DD2A14589C9',
          exponent: 0,
          aliases: ['cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u']
        }, {
          denom: 'tftic',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
      base: 'ibc/93C53C18687171754C7A8FC9258198611D54F8047B2A568422282DD2A14589C9',
      name: 'TFLOKI Genesis Ticket',
      display: 'tftic',
      symbol: 'TFTIC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/36A8FC4FFDFB3146472B14F165F7A6612C9197E8945E841ED1FAFED03743FFE2',
          exponent: 0,
          aliases: ['cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86']
        }, {
          denom: 'tfticii',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
      base: 'ibc/36A8FC4FFDFB3146472B14F165F7A6612C9197E8945E841ED1FAFED03743FFE2',
      name: 'TFLOKI New World Ticket',
      display: 'tfticii',
      symbol: 'TFTICII',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/496EC008B7D2335DF53626745FCDEDA798C7CE2E56AB39E1A0C9A03579BA5A92',
          exponent: 0,
          aliases: ['cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28']
        }, {
          denom: 'tfticiii',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
      base: 'ibc/496EC008B7D2335DF53626745FCDEDA798C7CE2E56AB39E1A0C9A03579BA5A92',
      name: 'TFLOKI Aviator Ticket',
      display: 'tfticiii',
      symbol: 'TFTICIII',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F007D844E2E57797A74298AAC024CC15EE34B2076DAC39A687425B13710CFFE0',
          exponent: 0,
          aliases: ['cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26']
        }, {
          denom: 'moon',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
      base: 'ibc/F007D844E2E57797A74298AAC024CC15EE34B2076DAC39A687425B13710CFFE0',
      name: 'Moon Token',
      display: 'moon',
      symbol: 'MOON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png',
          theme: {
            primary_color_hex: '#ebb30c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A97C363C7F923F65B1576BA5D5EC0FC6CF01771AAFB16AF808FCA8E729AA06A3',
          exponent: 0,
          aliases: ['cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
      base: 'ibc/A97C363C7F923F65B1576BA5D5EC0FC6CF01771AAFB16AF808FCA8E729AA06A3',
      name: 'Astroport Token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/68E590B39BD364750C04DF22D00386708F97C950522F3682BFE381B6850F3672',
          exponent: 0,
          aliases: ['cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7']
        }, {
          denom: 'xastro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
      base: 'ibc/68E590B39BD364750C04DF22D00386708F97C950522F3682BFE381B6850F3672',
      name: 'Staked Astroport Token',
      display: 'xastro.cw20',
      symbol: 'xASTRO.cw20',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro-cw20.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AC3A9BFFED04F4F4CE157F5F6270BEC9885E8618C7867839CE081670DE02F276',
          exponent: 0,
          aliases: ['cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq']
        }, {
          denom: 'halo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
      base: 'ibc/AC3A9BFFED04F4F4CE157F5F6270BEC9885E8618C7867839CE081670DE02F276',
      name: 'Angel Protocol Token',
      display: 'halo',
      symbol: 'HALO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png',
          theme: {
            primary_color_hex: '#54a4dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A332A25A9A73957ABBFEAD7EFF3D0329BCE35EC82D6F36AA89FCE2B5094FF121',
          exponent: 0,
          aliases: ['cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j']
        }, {
          denom: 'pug',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
      base: 'ibc/A332A25A9A73957ABBFEAD7EFF3D0329BCE35EC82D6F36AA89FCE2B5094FF121',
      name: 'AstroPug Token',
      display: 'pug',
      symbol: 'PUG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png',
          theme: {
            primary_color_hex: '#252424'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/21B7749D810ABF14D5B6A68049336778CA9A7371E5541938DB3E2C61ED885796',
          exponent: 0,
          aliases: ['cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf']
        }, {
          denom: 'orne',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
      base: 'ibc/21B7749D810ABF14D5B6A68049336778CA9A7371E5541938DB3E2C61ED885796',
      name: 'Orne Token',
      display: 'orne',
      symbol: 'ORNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png',
          theme: {
            primary_color_hex: '#fbfbfb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/63C24DD7740969A93EA087324D7E9D353471E4A531D59F24757539C5F532D65F',
          exponent: 0,
          aliases: ['cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y']
        }, {
          denom: 'tns',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
      base: 'ibc/63C24DD7740969A93EA087324D7E9D353471E4A531D59F24757539C5F532D65F',
      name: 'Terra Name Service',
      display: 'tns',
      symbol: 'TNS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png',
          theme: {
            primary_color_hex: '#2442cf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/67A826723772A8341D7B9CE308628DBABB5B19891770B81C6007051B053C6EB1',
          exponent: 0,
          aliases: ['cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm']
        }, {
          denom: 'xrune',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
      base: 'ibc/67A826723772A8341D7B9CE308628DBABB5B19891770B81C6007051B053C6EB1',
      name: 'Thorstarter',
      display: 'xrune',
      symbol: 'XRUNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FA7067E9FA246D81DF2DF136CB5D63D26BECD0F1DB34E0BA686CA9EA0C26A6C8',
          exponent: 0,
          aliases: ['cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784']
        }, {
          denom: 'alot',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
      base: 'ibc/FA7067E9FA246D81DF2DF136CB5D63D26BECD0F1DB34E0BA686CA9EA0C26A6C8',
      name: 'Alpha Pack Token',
      display: 'alot',
      symbol: 'aLOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png',
          theme: {
            primary_color_hex: '#c7bea1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/32C4692674C1AC5E145D93393A3CA3896546F4CC169F36119DD015BB32BA4C72',
          exponent: 0,
          aliases: ['cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe']
        }, {
          denom: 'sity',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
      base: 'ibc/32C4692674C1AC5E145D93393A3CA3896546F4CC169F36119DD015BB32BA4C72',
      name: 'CurioSITY play to earn token',
      display: 'sity',
      symbol: 'SITY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A2B2739FAE29BFC3A29B257C0A7C13AEBDE2684C6DAE7327D312C0AFA04330B9',
          exponent: 0,
          aliases: ['cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7']
        }, {
          denom: 'glow',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
      base: 'ibc/A2B2739FAE29BFC3A29B257C0A7C13AEBDE2684C6DAE7327D312C0AFA04330B9',
      name: 'Glow Token',
      display: 'glow',
      symbol: 'GLOW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png',
          theme: {
            primary_color_hex: '#262238'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5DEC7D16F42736EB722566FE7C5A6E30547261BA5E6023F1E4494518A1A96FA0',
          exponent: 0,
          aliases: ['cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
      base: 'ibc/5DEC7D16F42736EB722566FE7C5A6E30547261BA5E6023F1E4494518A1A96FA0',
      name: 'Apollo DAO Token',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png',
          theme: {
            primary_color_hex: '#10192a'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/349F858394E3D16D329A7682964FFB864DC29F2B75BCC6557432053EAE0FA035',
          exponent: 0,
          aliases: ['cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u']
        }, {
          denom: 'abr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
      base: 'ibc/349F858394E3D16D329A7682964FFB864DC29F2B75BCC6557432053EAE0FA035',
      name: 'Allbridge',
      display: 'abr',
      symbol: 'ABR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6611C1F0E6C274ECC2E89010176DFDD01AA208CF87D5344B43B6DCCEF11F0610',
          exponent: 0,
          aliases: ['cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc']
        }, {
          denom: 'whgtps',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
      base: 'ibc/6611C1F0E6C274ECC2E89010176DFDD01AA208CF87D5344B43B6DCCEF11F0610',
      name: 'Global Transaction Payment Solu',
      display: 'whgtps',
      symbol: 'whGTPS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/49D125F7A413F9E1B73EFF348C4E3988261D8E952D8E8489B50901C4D394252A',
          exponent: 0,
          aliases: ['cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw']
        }, {
          denom: 'prism',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
      base: 'ibc/49D125F7A413F9E1B73EFF348C4E3988261D8E952D8E8489B50901C4D394252A',
      name: 'Prism Protocol Token',
      display: 'prism',
      symbol: 'PRISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png',
          theme: {
            primary_color_hex: '#f6f6f6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ACF33437E0ECD74E7370B4EDD7CB0EE956B1CD08D1497BF632F2C057A1AEEE39',
          exponent: 0,
          aliases: ['cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq']
        }, {
          denom: 'sdollar',
          exponent: 2
        }],
      type_asset: 'cw20',
      address: 'terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
      base: 'ibc/ACF33437E0ECD74E7370B4EDD7CB0EE956B1CD08D1497BF632F2C057A1AEEE39',
      name: 'Space Dollar',
      display: 'sdollar',
      symbol: 'SDOLLAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/7605C9F8A6130D448249D1D64239EBC52F61F421557C1F3F3A33F4B574CF711B',
          exponent: 0,
          aliases: ['cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k']
        }, {
          denom: 'whsail',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
      base: 'ibc/7605C9F8A6130D448249D1D64239EBC52F61F421557C1F3F3A33F4B574CF711B',
      name: 'SAIL',
      display: 'whsail',
      symbol: 'whSAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png',
          theme: {
            primary_color_hex: '#0472b3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4D5E6A381A119AE44B745AA1FFDBF0DDCE7FD93E1E76DDF976B354E23F57F0DA',
          exponent: 0,
          aliases: ['cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu']
        }, {
          denom: 'whgsail',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
      base: 'ibc/4D5E6A381A119AE44B745AA1FFDBF0DDCE7FD93E1E76DDF976B354E23F57F0DA',
      name: 'SolanaSail Governance Token V2',
      display: 'whgsail',
      symbol: 'whgSAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png',
          theme: {
            primary_color_hex: '#046baa'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/796CBE7588E3841A0F15BE8AD778C67AC625782303981B451726252EE490CF56',
          exponent: 0,
          aliases: ['cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz']
        }, {
          denom: 'xprism',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
      base: 'ibc/796CBE7588E3841A0F15BE8AD778C67AC625782303981B451726252EE490CF56',
      name: 'Prism Governance Token',
      display: 'xprism',
      symbol: 'xPRISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png',
          theme: {
            primary_color_hex: '#242434'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AF40EAF7D47DD4AFEE79B005672E6E6F06AD11D2C7AC14E7C2FD8978C77BE700',
          exponent: 0,
          aliases: ['cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5']
        }, {
          denom: 'cde',
          exponent: 9
        }],
      type_asset: 'cw20',
      address: 'terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
      base: 'ibc/AF40EAF7D47DD4AFEE79B005672E6E6F06AD11D2C7AC14E7C2FD8978C77BE700',
      name: 'CAPITRADE TOKEN',
      display: 'cde',
      symbol: 'CDE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DB3B5A33D7004636763413BD6CD69F249A3B1FF3FA3A145B90767301F0694FB4',
          exponent: 0,
          aliases: ['cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8']
        }, {
          denom: 'ctx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
      base: 'ibc/DB3B5A33D7004636763413BD6CD69F249A3B1FF3FA3A145B90767301F0694FB4',
      name: 'C2X Token',
      display: 'ctx',
      symbol: 'CTX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png',
          theme: {
            primary_color_hex: '#04b4fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/713D30434F5EDAD11F43EA00D52100870BE3DA7732B30D02D6B1D32B73F943F2',
          exponent: 0,
          aliases: ['cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau']
        }, {
          denom: 'cluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
      base: 'ibc/713D30434F5EDAD11F43EA00D52100870BE3DA7732B30D02D6B1D32B73F943F2',
      name: 'Prism cLuna Token',
      display: 'cluna',
      symbol: 'cLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png',
          theme: {
            primary_color_hex: '#211f2e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FCDA8586D16EB41B14AD529BF775BA4295ABB1AD64E909D677A444A8334EFD83',
          exponent: 0,
          aliases: ['cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2']
        }, {
          denom: 'pluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
      base: 'ibc/FCDA8586D16EB41B14AD529BF775BA4295ABB1AD64E909D677A444A8334EFD83',
      name: 'Prism pLuna Token',
      display: 'pluna',
      symbol: 'pLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png',
          theme: {
            primary_color_hex: '#202030'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BD070B4B22F9EEEEFE1150E86C7822266D0BEC3E4D2FB07AB405C51415F846D5',
          exponent: 0,
          aliases: ['cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz']
        }, {
          denom: 'yluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
      base: 'ibc/BD070B4B22F9EEEEFE1150E86C7822266D0BEC3E4D2FB07AB405C51415F846D5',
      name: 'Prism yLuna Token',
      display: 'yluna',
      symbol: 'yLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png',
          theme: {
            primary_color_hex: '#202130'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/7EC1DF8FFF5254CF9CBCB6F15BBD3CC1975C60A072D89F8A66B6EEF630FFA5BE',
          exponent: 0,
          aliases: ['cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx']
        }, {
          denom: 'atlo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
      base: 'ibc/7EC1DF8FFF5254CF9CBCB6F15BBD3CC1975C60A072D89F8A66B6EEF630FFA5BE',
      name: 'Atlo Token',
      display: 'atlo',
      symbol: 'ATLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png',
          theme: {
            primary_color_hex: '#1b3667'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3897FA130B33F5335E52B9060F4DB91BB0A5AB47752E04EC574576341E9F73C9',
          exponent: 0,
          aliases: ['cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp']
        }, {
          denom: 'local',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
      base: 'ibc/3897FA130B33F5335E52B9060F4DB91BB0A5AB47752E04EC574576341E9F73C9',
      name: 'LOCAL Token',
      display: 'local',
      symbol: 'LOCAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png',
          theme: {
            primary_color_hex: '#242424'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A6F8458A46DD8EA05C0D772FCF2F79DADB648DE595F92B9ADE2256793773FD15',
          exponent: 0,
          aliases: ['cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6']
        }, {
          denom: 'luv',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
      base: 'ibc/A6F8458A46DD8EA05C0D772FCF2F79DADB648DE595F92B9ADE2256793773FD15',
      name: 'Lunaverse',
      display: 'luv',
      symbol: 'LUV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png',
          theme: {
            primary_color_hex: '#f7a02f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5EF2536333F4C26CAFC4A5E2C5315F82FECA2871FA7D05164AD39ACAD18B3B03',
          exponent: 0,
          aliases: ['cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp']
        }, {
          denom: 'robo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
      base: 'ibc/5EF2536333F4C26CAFC4A5E2C5315F82FECA2871FA7D05164AD39ACAD18B3B03',
      name: 'RoboHero',
      display: 'robo',
      symbol: 'ROBO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png',
          theme: {
            primary_color_hex: '#2473d2'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B1FE8C446277407C145995C73796B26681B58465E32DA80B6E0E4A70CDF6A99C',
          exponent: 0,
          aliases: ['cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk']
        }, {
          denom: 'luart',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
      base: 'ibc/B1FE8C446277407C145995C73796B26681B58465E32DA80B6E0E4A70CDF6A99C',
      name: 'Luart Token',
      display: 'luart',
      symbol: 'LUART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png',
          theme: {
            primary_color_hex: '#1b1429'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/27E2431F98318CAB47BCF33589C402A3564901A2945CDD6A6976F22BA339090C',
          exponent: 0,
          aliases: ['cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
      base: 'ibc/27E2431F98318CAB47BCF33589C402A3564901A2945CDD6A6976F22BA339090C',
      name: 'Mars Token',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ADAB3970B793D1C2710B946F7B55FD4A0C8CBAAA01707516B9460197EED283A7',
          exponent: 0,
          aliases: ['cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4']
        }, {
          denom: 'xmars',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
      base: 'ibc/ADAB3970B793D1C2710B946F7B55FD4A0C8CBAAA01707516B9460197EED283A7',
      name: 'xMars Token',
      display: 'xmars',
      symbol: 'XMARS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3F913758D918415A6AC2ABAEE0D6C8AF03F71F3985D4BF9788F3AD0B80D34180',
          exponent: 0,
          aliases: ['cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4']
        }, {
          denom: 'dfiat',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
      base: 'ibc/3F913758D918415A6AC2ABAEE0D6C8AF03F71F3985D4BF9788F3AD0B80D34180',
      name: 'DeFiato',
      display: 'dfiat',
      symbol: 'DFIAT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/915E8EDC121175353122809C0EACB9BACEF19E207D00210A0BA1C9EBDA97FB7A',
          exponent: 0,
          aliases: ['cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d']
        }, {
          denom: 'ceres',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
      base: 'ibc/915E8EDC121175353122809C0EACB9BACEF19E207D00210A0BA1C9EBDA97FB7A',
      name: 'Ceres Governance Token',
      display: 'ceres',
      symbol: 'CERES',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F60EF271DC2F7C0643465B15C41E9507128775B3709A93B9967D1729E4DC403F',
          exponent: 0,
          aliases: ['cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58']
        }, {
          denom: 'wasavax',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
      base: 'ibc/F60EF271DC2F7C0643465B15C41E9507128775B3709A93B9967D1729E4DC403F',
      name: 'BENQI Staked AVAX (Portal)',
      display: 'wasavax',
      symbol: 'wasAVAX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/531153BFED63BC9DE2B7A4D20437BC3827C89BB58080A3D26F2831FA2559872C',
          exponent: 0,
          aliases: ['cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr']
        }, {
          denom: 'mint',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
      base: 'ibc/531153BFED63BC9DE2B7A4D20437BC3827C89BB58080A3D26F2831FA2559872C',
      name: 'MintDAO',
      display: 'mint',
      symbol: 'MINT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/28ABEC495CA225C661D721417C7047E95AD255EEF962D631588BD2483A9D6302',
          exponent: 0,
          aliases: ['cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02']
        }, {
          denom: 'sd',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
      base: 'ibc/28ABEC495CA225C661D721417C7047E95AD255EEF962D631588BD2483A9D6302',
      name: 'Stader SD (Portal)',
      display: 'sd',
      symbol: 'SD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/58C010156B109601FA11CB7C9F48DD5BA12FA5840F6F09E616F14C16823C1638',
          exponent: 0,
          aliases: ['cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep']
        }, {
          denom: 'xsd',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
      base: 'ibc/58C010156B109601FA11CB7C9F48DD5BA12FA5840F6F09E616F14C16823C1638',
      name: 'Stader xSD',
      display: 'xsd',
      symbol: 'xSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png',
          theme: {
            primary_color_hex: '#f3f3f3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/98F70D4D2A0C94F0F86C86591B29C53C96AE6CEC850FAC1F9F759331A3F26C69',
          exponent: 0,
          aliases: ['cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r']
        }, {
          denom: 'paxg',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
      base: 'ibc/98F70D4D2A0C94F0F86C86591B29C53C96AE6CEC850FAC1F9F759331A3F26C69',
      name: 'Paxos Gold (Portal)',
      display: 'paxg',
      symbol: 'PAXG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png',
          theme: {
            primary_color_hex: '#848484'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/12BB640BB6EC83B5AB3929977C93B08A039D450ED238F2E6E6D025B0EEE9DB5D',
          exponent: 0,
          aliases: ['cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl']
        }, {
          denom: 'whdao',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
      base: 'ibc/12BB640BB6EC83B5AB3929977C93B08A039D450ED238F2E6E6D025B0EEE9DB5D',
      name: 'DAO Maker',
      display: 'whdao',
      symbol: 'whDAO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png',
          theme: {
            primary_color_hex: '#2c2c44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EC6886FB8F877C5EC367603D0444496EA77CE9E265959F44DCF78F8691424105',
          exponent: 0,
          aliases: ['cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt']
        }, {
          denom: 'link',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
      base: 'ibc/EC6886FB8F877C5EC367603D0444496EA77CE9E265959F44DCF78F8691424105',
      name: 'ChainLink Token',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
          theme: {
            primary_color_hex: '#345cd4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/8FA8D8A8C8F29C54E177E4FDD3B919161238314DD39693C8ACC50D25EE5F04C0',
          exponent: 0,
          aliases: ['cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
      base: 'ibc/8FA8D8A8C8F29C54E177E4FDD3B919161238314DD39693C8ACC50D25EE5F04C0',
      name: 'Sayve Token',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png',
          theme: {
            primary_color_hex: '#f3ebdb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CB0C95C59C8EF16384073D42D0420E193912FDB45DC12855F8DA750AB4695DF8',
          exponent: 0,
          aliases: ['cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u']
        }, {
          denom: 'guides',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
      base: 'ibc/CB0C95C59C8EF16384073D42D0420E193912FDB45DC12855F8DA750AB4695DF8',
      name: 'Guides Token',
      display: 'guides',
      symbol: 'GUIDES',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C170FE4F33A426F325BF8683E2EDC1A337476C039D0E8AE76B0401B967C4300D',
          exponent: 0,
          aliases: ['cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2']
        }, {
          denom: 'bro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
      base: 'ibc/C170FE4F33A426F325BF8683E2EDC1A337476C039D0E8AE76B0401B967C4300D',
      name: 'BRO token',
      display: 'bro',
      symbol: 'BRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D9C3BCD971B5621CA7D080105534B41DBE232DC94B19682688BD27DDC9032B33',
          exponent: 0,
          aliases: ['cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds']
        }, {
          denom: 'bbro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
      base: 'ibc/D9C3BCD971B5621CA7D080105534B41DBE232DC94B19682688BD27DDC9032B33',
      name: 'bBRO token',
      display: 'bbro',
      symbol: 'bBRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0CFC43A1E49DE63C43B9D0FFFCE4CD1A7B969A84D76775FE459F8D1AA277C161',
          exponent: 0,
          aliases: ['cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr']
        }, {
          denom: 'gtps',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
      base: 'ibc/0CFC43A1E49DE63C43B9D0FFFCE4CD1A7B969A84D76775FE459F8D1AA277C161',
      name: 'Global Transaction Payment Solut',
      display: 'gtps',
      symbol: 'GTPS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F2003DFF519010E6BF7A12376268DDE99D9F3855E2A01914FD6D1A1DAE868A54',
          exponent: 0,
          aliases: ['cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se']
        }, {
          denom: 'gfi',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
      base: 'ibc/F2003DFF519010E6BF7A12376268DDE99D9F3855E2A01914FD6D1A1DAE868A54',
      name: 'Gtps.Finance',
      display: 'gfi',
      symbol: 'GFI',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/99236405E75BDAE8DC434CCE9FE8EB183ED9463C92EE25B9840683C3ED6D7A45',
          exponent: 0,
          aliases: ['cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa']
        }, {
          denom: 'ulc',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
      base: 'ibc/99236405E75BDAE8DC434CCE9FE8EB183ED9463C92EE25B9840683C3ED6D7A45',
      name: 'Ultimatalioniscoin',
      display: 'ulc',
      symbol: 'ULC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/168133FB1F82D656C539C58967156F8E2DAC1ED6B5B745AEF0523092532430FC',
          exponent: 0,
          aliases: ['cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl']
        }, {
          denom: 'sst',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
      base: 'ibc/168133FB1F82D656C539C58967156F8E2DAC1ED6B5B745AEF0523092532430FC',
      name: 'Sooah Studio Token',
      display: 'sst',
      symbol: 'SST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/61BD3478B971B8285A702C84FF45D5A232547AA6C537DC57E74C67C9F792EA60',
          exponent: 0,
          aliases: ['cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc']
        }, {
          denom: 'atlas',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
      base: 'ibc/61BD3478B971B8285A702C84FF45D5A232547AA6C537DC57E74C67C9F792EA60',
      name: 'Star Atlas (Portal)',
      display: 'atlas',
      symbol: 'ATLAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png',
          theme: {
            primary_color_hex: '#c77a91'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9CEEB91B74E05FC7488207CCD7F04FC25BAA5D4537C3E0D9CED5F263F65A4926',
          exponent: 0,
          aliases: ['cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp']
        }, {
          denom: 'audio',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
      base: 'ibc/9CEEB91B74E05FC7488207CCD7F04FC25BAA5D4537C3E0D9CED5F263F65A4926',
      name: 'Audius (Portal)',
      display: 'audio',
      symbol: 'AUDIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png',
          theme: {
            primary_color_hex: '#7d1dc0'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EBD8619181A260C1E03C68E31CAFBE812B2998543C8320E90050E72200B7A26F',
          exponent: 0,
          aliases: ['cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m']
        }, {
          denom: 'avax',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
      base: 'ibc/EBD8619181A260C1E03C68E31CAFBE812B2998543C8320E90050E72200B7A26F',
      name: 'AVAX (Portal)',
      display: 'avax',
      symbol: 'AVAX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png',
          theme: {
            primary_color_hex: '#e74245'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E652398BED5D7B54B0FD5E5BA14568A80EFD244E28541CFB77701AEACEDD8BBC',
          exponent: 0,
          aliases: ['cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2']
        }, {
          denom: 'bat',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
      base: 'ibc/E652398BED5D7B54B0FD5E5BA14568A80EFD244E28541CFB77701AEACEDD8BBC',
      name: 'Basic Attention Token (Portal)',
      display: 'bat',
      symbol: 'BAT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png',
          theme: {
            primary_color_hex: '#f75108'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/16141312E5875FBBBCE49BEBD89B76E2A365AAD8B8D3C61C7739F8903EE45B55',
          exponent: 0,
          aliases: ['cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd']
        }, {
          denom: 'busdbs',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
      base: 'ibc/16141312E5875FBBBCE49BEBD89B76E2A365AAD8B8D3C61C7739F8903EE45B55',
      name: 'Binance USD (Portal from BSC)',
      display: 'busdbs',
      symbol: 'BUSDbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png',
          theme: {
            primary_color_hex: '#f4bc0f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/881BAB2BD0595187C6C26D44A9E6AFCDFB3F0063E125E1646464A273319CFC15',
          exponent: 0,
          aliases: ['cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95']
        }, {
          denom: 'dai',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
      base: 'ibc/881BAB2BD0595187C6C26D44A9E6AFCDFB3F0063E125E1646464A273319CFC15',
      name: 'DAI (Portal)',
      display: 'dai',
      symbol: 'DAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png',
          theme: {
            primary_color_hex: '#fbb932'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0FCE91B61C2CE7E2B3793F4C06349A4B5EB16EE93CC2202D310D6A6B21FA61AC',
          exponent: 0,
          aliases: ['cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8']
        }, {
          denom: 'maticpo',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
      base: 'ibc/0FCE91B61C2CE7E2B3793F4C06349A4B5EB16EE93CC2202D310D6A6B21FA61AC',
      name: 'MATIC (Portal from Polygon)',
      display: 'maticpo',
      symbol: 'MATICpo',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png',
          theme: {
            primary_color_hex: '#8445e3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/94E4EE4BEFE484F8B8CBF59B04D5DD0D1A3A620BDD212D02B4FE2C8500E2472F',
          exponent: 0,
          aliases: ['cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y']
        }, {
          denom: 'mimet',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
      base: 'ibc/94E4EE4BEFE484F8B8CBF59B04D5DD0D1A3A620BDD212D02B4FE2C8500E2472F',
      name: 'Magic Internet Money',
      display: 'mimet',
      symbol: 'MIMet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png',
          theme: {
            primary_color_hex: '#6f6df0'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/994849FD38793FE7A35474FD5A94F03BB68AE3C6219608507BEB9AF46C223F99',
          exponent: 0,
          aliases: ['cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q']
        }, {
          denom: 'ray',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
      base: 'ibc/994849FD38793FE7A35474FD5A94F03BB68AE3C6219608507BEB9AF46C223F99',
      name: 'Raydium (Portal)',
      display: 'ray',
      symbol: 'RAY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png',
          theme: {
            primary_color_hex: '#4d75f2'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2B0D408D6475CDAF46BEA1600D6EE0123829DF67B45CDFFE5240A877127B8525',
          exponent: 0,
          aliases: ['cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc']
        }, {
          denom: 'sbr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
      base: 'ibc/2B0D408D6475CDAF46BEA1600D6EE0123829DF67B45CDFFE5240A877127B8525',
      name: 'Saber (Portal)',
      display: 'sbr',
      symbol: 'SBR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png',
          theme: {
            primary_color_hex: '#161527'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F32C7CC714D834B7CBD6394E986BC1D0D097AAA72ADB35B856A1C4B6428122FC',
          exponent: 0,
          aliases: ['cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd']
        }, {
          denom: 'shib',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
      base: 'ibc/F32C7CC714D834B7CBD6394E986BC1D0D097AAA72ADB35B856A1C4B6428122FC',
      name: 'Shiba Inu (Portal)',
      display: 'shib',
      symbol: 'SHIB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png',
          theme: {
            primary_color_hex: '#f99e0e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0B0FC4D98C56D2EA9AC0EDA8E632A0276D0E829F9AB9E8D640FD58587F069C40',
          exponent: 0,
          aliases: ['cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c']
        }, {
          denom: 'srmso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
      base: 'ibc/0B0FC4D98C56D2EA9AC0EDA8E632A0276D0E829F9AB9E8D640FD58587F069C40',
      name: 'Serum (Portal from Solana)',
      display: 'srmso',
      symbol: 'SRMso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png',
          theme: {
            primary_color_hex: '#40c2d6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/871430C6D8424EE737B03834FE4E786EBED1C0537EBFC4F6FF9689AEB2D70DA8',
          exponent: 0,
          aliases: ['cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w']
        }, {
          denom: 'usdcav',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
      base: 'ibc/871430C6D8424EE737B03834FE4E786EBED1C0537EBFC4F6FF9689AEB2D70DA8',
      name: 'USD Coin (Portal from Avalanche)',
      display: 'usdcav',
      symbol: 'USDCav',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png',
          theme: {
            primary_color_hex: '#2775cb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/1DA4DCA9531A5DDC83EC37607707988CBE1BE0CBEDC37026AED1DD9627814099',
          exponent: 0,
          aliases: ['cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu']
        }, {
          denom: 'usdcbs',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
      base: 'ibc/1DA4DCA9531A5DDC83EC37607707988CBE1BE0CBEDC37026AED1DD9627814099',
      name: 'USD Coin (Portal from BSC)',
      display: 'usdcbs',
      symbol: 'USDCbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png',
          theme: {
            primary_color_hex: '#2675cb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B7FA1B5C55B4C44FCED668EB0FF2CF40553F6E7EA613F92E9753DA63187B62B8',
          exponent: 0,
          aliases: ['cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x']
        }, {
          denom: 'usdcpo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
      base: 'ibc/B7FA1B5C55B4C44FCED668EB0FF2CF40553F6E7EA613F92E9753DA63187B62B8',
      name: 'USD Coin (Portal from Polygon)',
      display: 'usdcpo',
      symbol: 'USDCpo',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png',
          theme: {
            primary_color_hex: '#2a73cc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/71A11BE4885046D634D7605F27E98D2E90334B27923728A2DAFF7B2B91B930AE',
          exponent: 0,
          aliases: ['cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4']
        }, {
          denom: 'usdcso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
      base: 'ibc/71A11BE4885046D634D7605F27E98D2E90334B27923728A2DAFF7B2B91B930AE',
      name: 'USD Coin (Portal from Solana)',
      display: 'usdcso',
      symbol: 'USDCso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png',
          theme: {
            primary_color_hex: '#2a76cc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EEB2DBC1681D2C30689176F24B7BE1B9A74F2FDB423F7B205D293EDC8E6F12DC',
          exponent: 0,
          aliases: ['cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx']
        }, {
          denom: 'usdtav',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
      base: 'ibc/EEB2DBC1681D2C30689176F24B7BE1B9A74F2FDB423F7B205D293EDC8E6F12DC',
      name: 'Tether USD (Portal from Avalanche)',
      display: 'usdtav',
      symbol: 'USDTav',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png',
          theme: {
            primary_color_hex: '#55ac94'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0CBC8D67ACFDA2AD87D0FA68F58B5C1DED8A0C248924F751813139D883856231',
          exponent: 0,
          aliases: ['cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd']
        }, {
          denom: 'usdtbs',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
      base: 'ibc/0CBC8D67ACFDA2AD87D0FA68F58B5C1DED8A0C248924F751813139D883856231',
      name: 'Tether USD (Portal from BSC)',
      display: 'usdtbs',
      symbol: 'USDTbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png',
          theme: {
            primary_color_hex: '#55ac94'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/8B7F11B200FF278DEF34A32CDBA35CA0D764ACEC7D3D5A86FA91C77384269967',
          exponent: 0,
          aliases: ['cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5']
        }, {
          denom: 'usdtso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
      base: 'ibc/8B7F11B200FF278DEF34A32CDBA35CA0D764ACEC7D3D5A86FA91C77384269967',
      name: 'Tether USD (Portal from Solana)',
      display: 'usdtso',
      symbol: 'USDTso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png',
          theme: {
            primary_color_hex: '#54ac96'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6A91224C1FF49A6AB239100B2837D650E08A86ECB925517566B39418D4143E0B',
          exponent: 0,
          aliases: ['cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3']
        }, {
          denom: 'gohm',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
      base: 'ibc/6A91224C1FF49A6AB239100B2837D650E08A86ECB925517566B39418D4143E0B',
      name: 'Governance OHM (Portal)',
      display: 'gohm',
      symbol: 'gOHM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png',
          theme: {
            primary_color_hex: '#b3bec1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/30C103C9EFB812DBA491448620818946524B830667FD03939065FCAF6429C658',
          exponent: 0,
          aliases: ['cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y']
        }, {
          denom: 'msol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
      base: 'ibc/30C103C9EFB812DBA491448620818946524B830667FD03939065FCAF6429C658',
      name: 'Marinade staked SOL (Portal)',
      display: 'msol',
      symbol: 'mSOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png',
          theme: {
            primary_color_hex: '#c8e8e1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9C2C9E707F5E83852CF83527D9D1D0A879DF44659A9652F02953900FD3D8DBA3',
          exponent: 0,
          aliases: ['cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d']
        }, {
          denom: 'steth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
      base: 'ibc/9C2C9E707F5E83852CF83527D9D1D0A879DF44659A9652F02953900FD3D8DBA3',
      name: 'Lido Staked Ether (Portal)',
      display: 'steth',
      symbol: 'stETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png',
          theme: {
            primary_color_hex: '#04a4fb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/27A69396BDADEB51DA6D4EBD8BE4DDBE9856983860137FA75F66DF71779EFCA4',
          exponent: 0,
          aliases: ['cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc']
        }, {
          denom: 'lct',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
      base: 'ibc/27A69396BDADEB51DA6D4EBD8BE4DDBE9856983860137FA75F66DF71779EFCA4',
      name: 'LCT Token',
      display: 'lct',
      symbol: 'LCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png',
          theme: {
            primary_color_hex: '#2664a3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/443CB3B597011BE47D6FD40580BD6799D5F79C6028A3D500FD9C0A761F1DD21A',
          exponent: 0,
          aliases: ['cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a']
        }, {
          denom: 'batom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
      base: 'ibc/443CB3B597011BE47D6FD40580BD6799D5F79C6028A3D500FD9C0A761F1DD21A',
      name: 'Bonded ATOM',
      display: 'batom',
      symbol: 'bATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4C0C78B284B12F7775E33052CB7E049382B697BC5307B23130CCAE59B8631FDB',
          exponent: 0,
          aliases: ['cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn']
        }, {
          denom: 'webatom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
      base: 'ibc/4C0C78B284B12F7775E33052CB7E049382B697BC5307B23130CCAE59B8631FDB',
      name: 'pStake Bonded ATOM (Wormhole)',
      display: 'webatom',
      symbol: 'webATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6B2B3CA79343D8B1AD16624C5A98B5B769253F7A2FFCD744CFD27D99256D6F00',
          exponent: 0,
          aliases: ['cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn']
        }, {
          denom: 'wcoin',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
      base: 'ibc/6B2B3CA79343D8B1AD16624C5A98B5B769253F7A2FFCD744CFD27D99256D6F00',
      name: 'Willisch Coin',
      display: 'wcoin',
      symbol: 'WCOIN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0097F293119C91584BD57CC62C2BF49FA08B3B99FD650FDD1A0A045E5C4F864E',
          exponent: 0,
          aliases: ['cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy']
        }, {
          denom: 'lctfancard',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
      base: 'ibc/0097F293119C91584BD57CC62C2BF49FA08B3B99FD650FDD1A0A045E5C4F864E',
      name: 'LCT Fancard Token',
      display: 'lctfancard',
      symbol: 'LCTfancard',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png',
          theme: {
            primary_color_hex: '#2968a5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B8981F3670B9FE45FEAC61E6194A147D7A8439804EB171B5C138836E36055E85',
          exponent: 0,
          aliases: ['cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang']
        }, {
          denom: 'kntc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
      base: 'ibc/B8981F3670B9FE45FEAC61E6194A147D7A8439804EB171B5C138836E36055E85',
      name: 'Kinetic Token',
      display: 'kntc',
      symbol: 'KNTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/55A7C9C5D2A182BC061573D994FD135EB5ABCAB59AF599373F9F8C7D7AE6D574',
          exponent: 0,
          aliases: ['cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex']
        }, {
          denom: 'kust',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
      base: 'ibc/55A7C9C5D2A182BC061573D994FD135EB5ABCAB59AF599373F9F8C7D7AE6D574',
      name: 'Kinetic kUST Token',
      display: 'kust',
      symbol: 'kUST',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A395ABA74112A49F2F4B93CA8C2DC382BE2FC30525E40C6631C370DE8AFA92C0',
          exponent: 0,
          aliases: ['cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv']
        }, {
          denom: 'steak',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
      base: 'ibc/A395ABA74112A49F2F4B93CA8C2DC382BE2FC30525E40C6631C370DE8AFA92C0',
      name: 'Steak Token',
      display: 'steak',
      symbol: 'STEAK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5053AA3CAE1D5BCAA756AFE826C9EF240BDDF52696F8C43EC9992139AEC0AD78',
          exponent: 0,
          aliases: ['cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m']
        }, {
          denom: 'cst',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
      base: 'ibc/5053AA3CAE1D5BCAA756AFE826C9EF240BDDF52696F8C43EC9992139AEC0AD78',
      name: 'CST Token',
      display: 'cst',
      symbol: 'CST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png',
          theme: {
            primary_color_hex: '#5d2616'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/1C6CAC32042DF98DF725E9D8D875B0486D2B2133F23A4D377F812D2A8A2639B6',
          exponent: 0,
          aliases: ['cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam']
        }, {
          denom: 'cstfancard',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
      base: 'ibc/1C6CAC32042DF98DF725E9D8D875B0486D2B2133F23A4D377F812D2A8A2639B6',
      name: 'CST Fancard Token',
      display: 'cstfancard',
      symbol: 'CSTfancard',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png',
          theme: {
            primary_color_hex: '#5d2616'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C2363C0B27817CD40F8B8C44C8EECDDD80EE471BD4E955493942293E177AD970',
          exponent: 0,
          aliases: ['cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj']
        }, {
          denom: 'nwld',
          exponent: 9
        }],
      type_asset: 'cw20',
      address: 'terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
      base: 'ibc/C2363C0B27817CD40F8B8C44C8EECDDD80EE471BD4E955493942293E177AD970',
      name: 'Neworld Labs Develpper Token',
      display: 'nwld',
      symbol: 'NWLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png',
          theme: {
            primary_color_hex: '#046394'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B178E89E0739DBC2199DDCAA3FE1381D495D6A47E5D1CD52938A57CEB5DD267B',
          exponent: 0,
          aliases: ['cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
      base: 'ibc/B178E89E0739DBC2199DDCAA3FE1381D495D6A47E5D1CD52938A57CEB5DD267B',
      name: 'FURY',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png',
          theme: {
            primary_color_hex: '#14045c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5479178A5BBE37705742F53833AEEAE6A13208DC186FB77EE91DB8F0B14FC185',
          exponent: 0,
          aliases: ['cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93']
        }, {
          denom: 'rct',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
      base: 'ibc/5479178A5BBE37705742F53833AEEAE6A13208DC186FB77EE91DB8F0B14FC185',
      name: 'Reactor Token',
      display: 'rct',
      symbol: 'RCT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EEC3BD5A4BFE5F40F406DF71A5F8982CCA53E7C217D5F2F56BDE0332A70265FB',
          exponent: 0,
          aliases: ['cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu']
        }, {
          denom: 'vitc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
      base: 'ibc/EEC3BD5A4BFE5F40F406DF71A5F8982CCA53E7C217D5F2F56BDE0332A70265FB',
      name: 'Vitamin Coin',
      display: 'vitc',
      symbol: 'VITC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png',
          theme: {
            primary_color_hex: '#e3551b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9CF894F79AC1223786903F70BFA5B52D665C6089CAAD7CF3C08902C86D8978B6',
          exponent: 0,
          aliases: ['cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g']
        }, {
          denom: 'sb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
      base: 'ibc/9CF894F79AC1223786903F70BFA5B52D665C6089CAAD7CF3C08902C86D8978B6',
      name: 'DragonSB',
      display: 'sb',
      symbol: 'SB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png',
          theme: {
            primary_color_hex: '#7c241c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2D94FA3CAE73982EA2CA447E6A333091CFB49982DAB3BFDB7EDE3021FB1156BC',
          exponent: 0,
          aliases: ['cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh']
        }, {
          denom: 'toad',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
      base: 'ibc/2D94FA3CAE73982EA2CA447E6A333091CFB49982DAB3BFDB7EDE3021FB1156BC',
      name: 'RESToad Token',
      display: 'toad',
      symbol: 'TOAD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3DC55652999B463ABADBA638081DEDA5721A2426D661057E665F5C0888284FE7',
          exponent: 0,
          aliases: ['cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd']
        }, {
          denom: 'orionastro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
      base: 'ibc/3DC55652999B463ABADBA638081DEDA5721A2426D661057E665F5C0888284FE7',
      name: 'Orion Money xASTRO Derivative Token',
      display: 'orionastro',
      symbol: 'orionASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png',
          theme: {
            primary_color_hex: '#1d90d6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E875E6C93EF75084AEDA94C221ED090FC70716100D38DAFA5770BCBF66D75F13',
          exponent: 0,
          aliases: ['cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp']
        }, {
          denom: 'retro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
      base: 'ibc/E875E6C93EF75084AEDA94C221ED090FC70716100D38DAFA5770BCBF66D75F13',
      name: 'Retrograde',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png',
          theme: {
            primary_color_hex: '#eb4024'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F8C6CF7CD7D8BA4DFF716C5199210B5AD26B17C11BF60818B3A2C350680EA2EB',
          exponent: 0,
          aliases: ['cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d']
        }, {
          denom: 'tnd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
      base: 'ibc/F8C6CF7CD7D8BA4DFF716C5199210B5AD26B17C11BF60818B3A2C350680EA2EB',
      name: 'TerrnadoCash',
      display: 'tnd',
      symbol: 'TND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png',
          theme: {
            primary_color_hex: '#1c53fb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DB6EBA710CCDF76DFDAEA6DED892BBD37E5484878E45616BB2A5A1476E8276EC',
          exponent: 0,
          aliases: ['cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g']
        }, {
          denom: 'stnd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
      base: 'ibc/DB6EBA710CCDF76DFDAEA6DED892BBD37E5484878E45616BB2A5A1476E8276EC',
      name: 'TerrnadoCash',
      display: 'stnd',
      symbol: 'sTND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F3B3CE572C278BDCCB133F4781AE731D1624BC00A276EE474B7EF688862012AC',
          exponent: 0,
          aliases: ['cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe']
        }, {
          denom: 'nwt',
          exponent: 9
        }],
      type_asset: 'cw20',
      address: 'terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
      base: 'ibc/F3B3CE572C278BDCCB133F4781AE731D1624BC00A276EE474B7EF688862012AC',
      name: 'Neworld Token',
      display: 'nwt',
      symbol: 'NWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png',
          theme: {
            primary_color_hex: '#aeb8f5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D1DE996FF7D368718C82C46131674A644C59AEC14DD48F32F4E19DF8C6250560',
          exponent: 0,
          aliases: ['cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn']
        }, {
          denom: 'neb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
      base: 'ibc/D1DE996FF7D368718C82C46131674A644C59AEC14DD48F32F4E19DF8C6250560',
      name: 'Nebula Token',
      display: 'neb',
      symbol: 'NEB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png',
          theme: {
            primary_color_hex: '#8b90ad'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4CFA3C9CD0EB435FEFC360BF63432A620D35C1AA0991D58E57B29ED85AC3D21A',
          exponent: 0,
          aliases: ['cw20:terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00']
        }, {
          denom: 'trit',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00',
      base: 'ibc/4CFA3C9CD0EB435FEFC360BF63432A620D35C1AA0991D58E57B29ED85AC3D21A',
      name: 'Terra Tritium Token',
      display: 'trit',
      symbol: 'TRIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/trit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/trit.png',
          theme: {
            primary_color_hex: '#24ab9b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Rakoff Token is the Meme Token for Terra Classic',
      type_asset: 'cw20',
      address: 'terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
      denom_units: [{
          denom: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
          exponent: 0,
          aliases: ['cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2']
        }, {
          denom: 'rakoff',
          exponent: 6
        }],
      base: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
      name: 'Rakoff Token',
      display: 'rakoff',
      symbol: 'RAKOFF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png',
          theme: {
            primary_color_hex: '#191717'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Tadpole Frogztrik Token meme',
      type_asset: 'cw20',
      address: 'terra19gzvkw5hft3ulp8n6ws3p9yradhc802axqal59lzxau6rqxktj9q0dwf9c',
      display: 'tadf',
      denom_units: [{
          denom: 'ibc/54D497B75FAD27A74BD7B1C365E5BC1063E88787747D6408E3F12638D265B962',
          exponent: 0,
          aliases: ['cw20:terra19gzvkw5hft3ulp8n6ws3p9yradhc802axqal59lzxau6rqxktj9q0dwf9c']
        }, {
          denom: 'tadf',
          exponent: 6
        }],
      base: 'ibc/54D497B75FAD27A74BD7B1C365E5BC1063E88787747D6408E3F12638D265B962',
      name: 'Tadpole Frogztrik Token',
      symbol: 'TADF',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tadf.png',
          theme: {
            primary_color_hex: '#e9f9f2'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tadf.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19gzvkw5hft3ulp8n6ws3p9yradhc802axqal59lzxau6rqxktj9q0dwf9c',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Frogztrik NFT Token',
      type_asset: 'cw20',
      address: 'terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9',
      display: 'frog',
      denom_units: [{
          denom: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
          exponent: 0,
          aliases: ['cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9']
        }, {
          denom: 'frog',
          exponent: 6
        }],
      base: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
      name: 'Frogztrik NFT Token',
      symbol: 'FROG',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png',
          theme: {
            primary_color_hex: '#182615'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/8935E9B60645CD61DC925E7C71956DC909D4548262103D1AB75E2A5306AC84C1',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/8935E9B60645CD61DC925E7C71956DC909D4548262103D1AB75E2A5306AC84C1',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primary_color_hex: '#4056e9'
          }
        }],
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi'
      }
    },
    {
      description: 'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [{
          denom: 'ibc/9F88138FC1EC853341FD0010C34C552726E219F18296019E82BF58841127E630',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/9F88138FC1EC853341FD0010C34C552726E219F18296019E82BF58841127E630',
      name: 'dinheiro',
      display: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png',
          theme: {
            primary_color_hex: '#244c9c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/2C410B8729A71601C6A3BA0CB7E433A072FDE255E312CE12D4AC18127679BBEB',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/2C410B8729A71601C6A3BA0CB7E433A072FDE255E312CE12D4AC18127679BBEB',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png',
          theme: {
            primary_color_hex: '#1d5c65'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/C025F721CC19CA353AD9EC405716358965A1C3D12739A840CF5FD787E712B86F',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/C025F721CC19CA353AD9EC405716358965A1C3D12739A840CF5FD787E712B86F',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Alem is a local currency for the region of Alentejo in Portugal, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/A89C92AE240546D1B5DBDA7500075A1B9CDF22B5568014340ED1A3621ACAA066',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/A89C92AE240546D1B5DBDA7500075A1B9CDF22B5568014340ED1A3621ACAA066',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/05238E98A143496C8AF2B6067BABC84503909ECE9E45FBCBAC2CBA5C889FD82A',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/05238E98A143496C8AF2B6067BABC84503909ECE9E45FBCBAC2CBA5C889FD82A',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      coingecko_id: 'eris-amplified-luna',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/4154B28D69A2B15C5DE06E861F5BACCB78C4B2180CEBECDAC74968FB402FB4BC',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/4154B28D69A2B15C5DE06E861F5BACCB78C4B2180CEBECDAC74968FB402FB4BC',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingecko_id: 'lion-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
          theme: {
            primary_color_hex: '#f3f313'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/4D881B544ECE557A62A239EE827F8BFA3B76A1977F2FD5F4BDF68CBC28FDE760',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/4D881B544ECE557A62A239EE827F8BFA3B76A1977F2FD5F4BDF68CBC28FDE760',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png',
          theme: {
            primary_color_hex: '#21b6b3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/84B8C4F1FE15019DBD937B5670905B6280BB7C0D031E9F4D9F50E33386D3CAE6',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/84B8C4F1FE15019DBD937B5670905B6280BB7C0D031E9F4D9F50E33386D3CAE6',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
          theme: {
            primary_color_hex: '#f3d343'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/E224A26BBDD3FBBB461CBFC40EDC74BAA9606C667371F428F147A8D6C98C28D6',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/E224A26BBDD3FBBB461CBFC40EDC74BAA9606C667371F428F147A8D6C98C28D6',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/A0A60E6C75D13599000EDC7142D6E0744FF4CF6B14E2F284B6CFB732833B4AB0',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/A0A60E6C75D13599000EDC7142D6E0744FF4CF6B14E2F284B6CFB732833B4AB0',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png',
          theme: {
            primary_color_hex: '#efe8e9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/6F2A0FB30BF07141817D1A646ABB12551E41C16285D694737DBB2C236D5752B3',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/6F2A0FB30BF07141817D1A646ABB12551E41C16285D694737DBB2C236D5752B3',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png',
          theme: {
            primary_color_hex: '#e3e2e5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
      name: 'BackBone Labs Liquid Staked LUNA',
      display: 'bLUNA',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png',
          theme: {
            primary_color_hex: '#070707'
          }
        }],
      coingecko_id: 'backbone-labs-staked-luna',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [{
          denom: 'ibc/106B438A78C581C5291E114B21588C41F98532E04D5369CFEE5825D95D465278',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/106B438A78C581C5291E114B21588C41F98532E04D5369CFEE5825D95D465278',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
          theme: {
            primary_color_hex: '#f3ebdb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/8AAF2114ECBB422E379E5E82D384A2295E18D0B544F31EF4FA0F8A8DF3941F71',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/8AAF2114ECBB422E379E5E82D384A2295E18D0B544F31EF4FA0F8A8DF3941F71',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png',
          theme: {
            primary_color_hex: '#f1cc79'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/AA5DF720C58BECFD406EF59DDF8E3AE3ABC5E8D614EDF9B95A583373518667A7',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/AA5DF720C58BECFD406EF59DDF8E3AE3ABC5E8D614EDF9B95A583373518667A7',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png',
          theme: {
            primary_color_hex: '#c0943f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/935DA0747A268FD7AFD1218BFB2907F052EA1E0FF89CB39DBA70A0BB15209ECA',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/935DA0747A268FD7AFD1218BFB2907F052EA1E0FF89CB39DBA70A0BB15209ECA',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png',
          theme: {
            primary_color_hex: '#dd6a30'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/F3385E19FBB1EF089A5A5EE68C9BB8B4E78DD0439B9AE9235BB8E114B9717D36',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/F3385E19FBB1EF089A5A5EE68C9BB8B4E78DD0439B9AE9235BB8E114B9717D36',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png',
          theme: {
            primary_color_hex: '#0da8c9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/54544F35274CA3FD8B094B883A6E85C494A214E5D09257B93994501D86E63582',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/54544F35274CA3FD8B094B883A6E85C494A214E5D09257B93994501D86E63582',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png',
          theme: {
            primary_color_hex: '#0ba7ce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/BC2F9CB082324B2389CAFB3521C3910DE06E22949B7CDA68B69BB6E2C98C4342',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/BC2F9CB082324B2389CAFB3521C3910DE06E22949B7CDA68B69BB6E2C98C4342',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png',
          theme: {
            primary_color_hex: '#f8d034'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/B08012220F9A7DFA13220E1088E9E7A41345FC1235EE2A0C1094E7AF193DA16A',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/B08012220F9A7DFA13220E1088E9E7A41345FC1235EE2A0C1094E7AF193DA16A',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png',
          theme: {
            primary_color_hex: '#d19a84'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/C95259E4DA3713C1D4816F47202C4697E6CEAB5E3B20AC5EA424D7915558C43A',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/C95259E4DA3713C1D4816F47202C4697E6CEAB5E3B20AC5EA424D7915558C43A',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png',
          theme: {
            primary_color_hex: '#ae987b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/F1BFD5030AD68FFE62D323300CDF1B9EE49A5938EA31FEE03BC970A4A3F97871',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/F1BFD5030AD68FFE62D323300CDF1B9EE49A5938EA31FEE03BC970A4A3F97871',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png',
          theme: {
            primary_color_hex: '#040607'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/6ED49EE8E1E5A73E7B916C8297C1ECB92EDE497466851AAEFCB95787631FC3F9',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/6ED49EE8E1E5A73E7B916C8297C1ECB92EDE497466851AAEFCB95787631FC3F9',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png',
          theme: {
            primary_color_hex: '#232333'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/C158F1510B7C5FA14F728752F1518219959BF6A7025DAC66E12FCE10A27EA8BE',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/C158F1510B7C5FA14F728752F1518219959BF6A7025DAC66E12FCE10A27EA8BE',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png',
          theme: {
            primary_color_hex: '#0c0704'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/836A50DCDA13CAECF9D2255CCF01951367FFB920D787255ACA909CE0F95CB632',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/836A50DCDA13CAECF9D2255CCF01951367FFB920D787255ACA909CE0F95CB632',
      name: 'LADS',
      display: 'lads',
      symbol: 'LADS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png',
          theme: {
            primary_color_hex: '#040507'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/A155934363013A2C2B2CFD1FBF75329DDB5F4AD3062CC976398DFDEF8E77FE9D',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/A155934363013A2C2B2CFD1FBF75329DDB5F4AD3062CC976398DFDEF8E77FE9D',
      name: 'CLON',
      display: 'CLON',
      symbol: 'CLON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png',
          theme: {
            primary_color_hex: '#c7cbcf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/D8536583D4A5F7EBDD5D80056E6085501B4685C67C89930A5FD2F0C3A2EFB228',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/D8536583D4A5F7EBDD5D80056E6085501B4685C67C89930A5FD2F0C3A2EFB228',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primary_color_hex: '#2c2c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/AAF6CEBDF3E51AB8C746073FD349FADC056A5517FB8646B556DDBBEB6D7ECCBD',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/AAF6CEBDF3E51AB8C746073FD349FADC056A5517FB8646B556DDBBEB6D7ECCBD',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/6A171A9A6DBBF5DDB976CD215EAA667641FA8EE35EDC95ACDBF68C810B62F0F5',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/6A171A9A6DBBF5DDB976CD215EAA667641FA8EE35EDC95ACDBF68C810B62F0F5',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primary_color_hex: '#342c52'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/F68DBD13D4F5E660A121C5DF056FEDE99B945DEC75852619A5D036EE0341DF3C',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/F68DBD13D4F5E660A121C5DF056FEDE99B945DEC75852619A5D036EE0341DF3C',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primary_color_hex: '#3142fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/E7E026B5DD193646610A90F539B1545444169747E41BE69E51C3FD54711147A2',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/E7E026B5DD193646610A90F539B1545444169747E41BE69E51C3FD54711147A2',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primary_color_hex: '#b8a2dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/AE0C9CE569EE20F96337C1F71F77134C44643400EF57A9FA5E55E5F129A988E3',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/AE0C9CE569EE20F96337C1F71F77134C44643400EF57A9FA5E55E5F129A988E3',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primary_color_hex: '#7b04eb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/94FE39D7691ADFBC695713A005247EA86EE61C3603FE710C150DB9DEB6840C30',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/94FE39D7691ADFBC695713A005247EA86EE61C3603FE710C150DB9DEB6840C30',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primary_color_hex: '#694c90'
          }
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/5CF3A796D9DF0CF79BDC4F6727F219FF82AC2FB6946BBD3241B63B4DD34185E1',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/5CF3A796D9DF0CF79BDC4F6727F219FF82AC2FB6946BBD3241B63B4DD34185E1',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primary_color_hex: '#f2b854'
          }
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/833AF07E9DCC93D75C210FA3F0081D5F8F84AE4DD93687ED4AFDE3A3DE47F09E',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/833AF07E9DCC93D75C210FA3F0081D5F8F84AE4DD93687ED4AFDE3A3DE47F09E',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg',
          theme: {
            primary_color_hex: '#c49df3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-129',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-103'
          }
        }]
    },
    {
      description: 'The governance token of the White Whale protocol on Terra.',
      type_asset: 'cw20',
      address: 'terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
      denom_units: [{
          denom: 'ibc/BCF262B55DF305B2DB415D2C2B3E4950CE0675D2480C17D3547A7A91F054DB8F',
          exponent: 0,
          aliases: ['cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/BCF262B55DF305B2DB415D2C2B3E4950CE0675D2480C17D3547A7A91F054DB8F',
      name: 'Whale Token',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png',
          theme: {
            primary_color_hex: '#43b24b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6E15A0D87B3D8D2D875E87B401C2721A416028273FA9DAA5322559BB880128F7',
          exponent: 0,
          aliases: ['cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp']
        }, {
          denom: 'bluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
      base: 'ibc/6E15A0D87B3D8D2D875E87B401C2721A416028273FA9DAA5322559BB880128F7',
      name: 'Bonded Luna',
      display: 'bluna',
      symbol: 'bLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png',
          theme: {
            primary_color_hex: '#fbdb5b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9DBBAEDF7AAC8D5B3213366B293760E8E30B5BEB0A6BAEE0F10B3167E902175F',
          exponent: 0,
          aliases: ['cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun']
        }, {
          denom: 'beth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
      base: 'ibc/9DBBAEDF7AAC8D5B3213366B293760E8E30B5BEB0A6BAEE0F10B3167E902175F',
      name: 'Bonded ETH',
      display: 'beth',
      symbol: 'bETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png',
          theme: {
            primary_color_hex: '#54b649'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/29559719FF04754152805849D896B53682A211F7378DF5108CF52882E3607434',
          exponent: 0,
          aliases: ['cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu']
        }, {
          denom: 'aust',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
      base: 'ibc/29559719FF04754152805849D896B53682A211F7378DF5108CF52882E3607434',
      name: 'Anchor Terra USD',
      display: 'aust',
      symbol: 'aUST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png',
          theme: {
            primary_color_hex: '#dd7e7f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/17C04B44BA8D887CDB6D15DCEE0561FAF7AE493876747BB908DA4A877B142B21',
          exponent: 0,
          aliases: ['cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76']
        }, {
          denom: 'anc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
      base: 'ibc/17C04B44BA8D887CDB6D15DCEE0561FAF7AE493876747BB908DA4A877B142B21',
      name: 'Anchor Token',
      display: 'anc',
      symbol: 'ANC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3639D691837A2534719B9FE80F2F2768837C826F031F5273F0ADD118BEF13FED',
          exponent: 0,
          aliases: ['cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6']
        }, {
          denom: 'mir',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
      base: 'ibc/3639D691837A2534719B9FE80F2F2768837C826F031F5273F0ADD118BEF13FED',
      name: 'Mirror',
      display: 'mir',
      symbol: 'MIR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png',
          theme: {
            primary_color_hex: '#142444'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E6CE87D38D7CE8149F9D1AEFAB7AD1648763684A8414926D130EFD79558D21C',
          exponent: 0,
          aliases: ['cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz']
        }, {
          denom: 'maapl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
      base: 'ibc/0E6CE87D38D7CE8149F9D1AEFAB7AD1648763684A8414926D130EFD79558D21C',
      name: 'Apple Inc.',
      display: 'maapl',
      symbol: 'mAAPL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png',
          theme: {
            primary_color_hex: '#acacac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D877C714B25D11E4E1E11D22C873F3E3F0FFF21E42777464913E5C05CD7DB2F8',
          exponent: 0,
          aliases: ['cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n']
        }, {
          denom: 'mabnb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
      base: 'ibc/D877C714B25D11E4E1E11D22C873F3E3F0FFF21E42777464913E5C05CD7DB2F8',
      name: 'Airbnb Inc.',
      display: 'mabnb',
      symbol: 'mABNB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png',
          theme: {
            primary_color_hex: '#e4545c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CE171E8C213734D30AB8A9C23D702AE9B42DB043D0D788DA7429DC36D7341AF5',
          exponent: 0,
          aliases: ['cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy']
        }, {
          denom: 'mamc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
      base: 'ibc/CE171E8C213734D30AB8A9C23D702AE9B42DB043D0D788DA7429DC36D7341AF5',
      name: 'AMC Entertainment Holdings Inc.',
      display: 'mamc',
      symbol: 'mAMC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png',
          theme: {
            primary_color_hex: '#cc2444'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5D041ED2C833233E855574B2AAB2375B25446ABE160259788D5BBC2C2673B206',
          exponent: 0,
          aliases: ['cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z']
        }, {
          denom: 'mamd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
      base: 'ibc/5D041ED2C833233E855574B2AAB2375B25446ABE160259788D5BBC2C2673B206',
      name: 'Advanced Micro Devices, Inc.',
      display: 'mamd',
      symbol: 'mAMD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D1AA8FB2CAA33E23C444A9DFAFA5FBB82075638B1E566CB8211C32C523D5A288',
          exponent: 0,
          aliases: ['cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2']
        }, {
          denom: 'mamzn',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
      base: 'ibc/D1AA8FB2CAA33E23C444A9DFAFA5FBB82075638B1E566CB8211C32C523D5A288',
      name: 'Amazon.com, Inc.',
      display: 'mamzn',
      symbol: 'mAMZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/117FDFB30AA363439850383F72F4680D197654EC46E65583AFCDBEFC93D14E64',
          exponent: 0,
          aliases: ['cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6']
        }, {
          denom: 'markk',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
      base: 'ibc/117FDFB30AA363439850383F72F4680D197654EC46E65583AFCDBEFC93D14E64',
      name: 'ARK Innovation ETF',
      display: 'markk',
      symbol: 'mARKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png',
          theme: {
            primary_color_hex: '#0d0d25'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DC2677C64BE2BF1805F533A576E35F2E962B7A73F0E9B119502882F944D3D088',
          exponent: 0,
          aliases: ['cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa']
        }, {
          denom: 'mbaba',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
      base: 'ibc/DC2677C64BE2BF1805F533A576E35F2E962B7A73F0E9B119502882F944D3D088',
      name: 'Alibaba Group Holding Limited',
      display: 'mbaba',
      symbol: 'mBABA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png',
          theme: {
            primary_color_hex: '#f38506'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/22AD1EC7FC1240C038912C4665441A62D8FABF648AABD7AFDC2DB2A20AB48CFB',
          exponent: 0,
          aliases: ['cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw']
        }, {
          denom: 'mbtc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
      base: 'ibc/22AD1EC7FC1240C038912C4665441A62D8FABF648AABD7AFDC2DB2A20AB48CFB',
      name: 'Bitcoin',
      display: 'mbtc',
      symbol: 'mBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png',
          theme: {
            primary_color_hex: '#f4941c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D2BA32DB8563811609F3F852888FFCD7FEA1917A0CF0C4EEB150AF813F4BE529',
          exponent: 0,
          aliases: ['cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph']
        }, {
          denom: 'mcoin',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
      base: 'ibc/D2BA32DB8563811609F3F852888FFCD7FEA1917A0CF0C4EEB150AF813F4BE529',
      name: 'Coinbase Global, Inc.',
      display: 'mcoin',
      symbol: 'mCOIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png',
          theme: {
            primary_color_hex: '#1454f4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D6134B65B2CED43D478691F60988B5BAE47D2AB35198C0EAA4959F9D3A551737',
          exponent: 0,
          aliases: ['cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5']
        }, {
          denom: 'mdis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
      base: 'ibc/D6134B65B2CED43D478691F60988B5BAE47D2AB35198C0EAA4959F9D3A551737',
      name: 'The Walt Disney Company',
      display: 'mdis',
      symbol: 'mDIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png',
          theme: {
            primary_color_hex: '#050505'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E6A0BE1B9ED9B51F45779B1FA564C1B2DDE0BEB7C29376FCC68BC0CC0C36599',
          exponent: 0,
          aliases: ['cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r']
        }, {
          denom: 'mdot',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
      base: 'ibc/0E6A0BE1B9ED9B51F45779B1FA564C1B2DDE0BEB7C29376FCC68BC0CC0C36599',
      name: 'Polkadot',
      display: 'mdot',
      symbol: 'mDOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2E38137313985574485E7241897949AF7945F7EE27EB4F706B2A963DD895FD01',
          exponent: 0,
          aliases: ['cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx']
        }, {
          denom: 'meth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
      base: 'ibc/2E38137313985574485E7241897949AF7945F7EE27EB4F706B2A963DD895FD01',
      name: 'Ether',
      display: 'meth',
      symbol: 'mETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png',
          theme: {
            primary_color_hex: '#5c648e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/98A7135E3E6CDD609E0B46592BE5B30329B907E949B31125881D45A37112EEF5',
          exponent: 0,
          aliases: ['cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7']
        }, {
          denom: 'mfb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
      base: 'ibc/98A7135E3E6CDD609E0B46592BE5B30329B907E949B31125881D45A37112EEF5',
      name: 'Facebook Inc.',
      display: 'mfb',
      symbol: 'mFB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png',
          theme: {
            primary_color_hex: '#1c74f4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/8BECD6125E06DAC0902ADC61D458A5DC3A6686918C0A75910C1F2A05B06885FC',
          exponent: 0,
          aliases: ['cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls']
        }, {
          denom: 'mglxy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
      base: 'ibc/8BECD6125E06DAC0902ADC61D458A5DC3A6686918C0A75910C1F2A05B06885FC',
      name: 'Galaxy Digital Holdings Ltd',
      display: 'mglxy',
      symbol: 'mGLXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png',
          theme: {
            primary_color_hex: '#1d4cac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/379B6AD66E26E214E2315DB2D37784527BCF019CE22BB599F1BC6DE66B859CE7',
          exponent: 0,
          aliases: ['cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p']
        }, {
          denom: 'mgme',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
      base: 'ibc/379B6AD66E26E214E2315DB2D37784527BCF019CE22BB599F1BC6DE66B859CE7',
      name: 'GameStop Corp',
      display: 'mgme',
      symbol: 'mGME',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png',
          theme: {
            primary_color_hex: '#070707'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5BB43C3FB68746C67664463431C0BF6C3A79F48C265C8BCEAC97A316533F4BE6',
          exponent: 0,
          aliases: ['cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt']
        }, {
          denom: 'mgoogl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
      base: 'ibc/5BB43C3FB68746C67664463431C0BF6C3A79F48C265C8BCEAC97A316533F4BE6',
      name: 'Alphabet Inc.',
      display: 'mgoogl',
      symbol: 'mGOOGL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png',
          theme: {
            primary_color_hex: '#34ac54'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/80AA3DFE0E8762D9B09290BD9B1AD01288D9FC2A019371D038621D349E0B2E65',
          exponent: 0,
          aliases: ['cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v']
        }, {
          denom: 'mgs',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
      base: 'ibc/80AA3DFE0E8762D9B09290BD9B1AD01288D9FC2A019371D038621D349E0B2E65',
      name: 'Goldman Sachs Group Inc.',
      display: 'mgs',
      symbol: 'mGS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png',
          theme: {
            primary_color_hex: '#749cc4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2B1A0FB7F2143EBDC60C78AC405EE0E4D285CB29C5B8E61AAF930D79FE2B696A',
          exponent: 0,
          aliases: ['cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr']
        }, {
          denom: 'mhood',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
      base: 'ibc/2B1A0FB7F2143EBDC60C78AC405EE0E4D285CB29C5B8E61AAF930D79FE2B696A',
      name: 'Robinhood Markets, Inc.',
      display: 'mhood',
      symbol: 'mHOOD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png',
          theme: {
            primary_color_hex: '#54c48c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/461263C3629E3203B837A7AE6F3C1B23341A740786B5222E730BA16397FE807D',
          exponent: 0,
          aliases: ['cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq']
        }, {
          denom: 'miau',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
      base: 'ibc/461263C3629E3203B837A7AE6F3C1B23341A740786B5222E730BA16397FE807D',
      name: 'iShares Gold Trust',
      display: 'miau',
      symbol: 'mIAU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AFC79D1A1D1FC5376F44768A3E1A00F8B035E7153ABC38C6CE76242C301BCB19',
          exponent: 0,
          aliases: ['cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec']
        }, {
          denom: 'miau',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
      base: 'ibc/AFC79D1A1D1FC5376F44768A3E1A00F8B035E7153ABC38C6CE76242C301BCB19',
      name: 'iShares Gold Trust',
      display: 'miau',
      symbol: 'mIAU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BCAC49BA42C7A52138E6780175B25C208CA355D4723A48E7AE2A9D075789059B',
          exponent: 0,
          aliases: ['cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2']
        }, {
          denom: 'mjnj',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
      base: 'ibc/BCAC49BA42C7A52138E6780175B25C208CA355D4723A48E7AE2A9D075789059B',
      name: 'Johnson & Johnson',
      display: 'mjnj',
      symbol: 'mJNJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png',
          theme: {
            primary_color_hex: '#c41d2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/794DFC0799119A5BC8D18782EB9BE56E3FAFE558B048AFED2025CDD19BCC7D25',
          exponent: 0,
          aliases: ['cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm']
        }, {
          denom: 'mko',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
      base: 'ibc/794DFC0799119A5BC8D18782EB9BE56E3FAFE558B048AFED2025CDD19BCC7D25',
      name: 'Coca-Cola',
      display: 'mko',
      symbol: 'mKO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png',
          theme: {
            primary_color_hex: '#fcc9cc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A813C79B640B5429C6FB9C02C0C0229253829F1E19F7E96F13CF210D952EAC7C',
          exponent: 0,
          aliases: ['cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6']
        }, {
          denom: 'mmsft',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
      base: 'ibc/A813C79B640B5429C6FB9C02C0C0229253829F1E19F7E96F13CF210D952EAC7C',
      name: 'Microsoft Corporation',
      display: 'mmsft',
      symbol: 'mMSFT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png',
          theme: {
            primary_color_hex: '#04a4ec'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9AF591DBDDF18B83C13E654DB253C2396F283F2C9C9F5A4217331CBCD82FACD9',
          exponent: 0,
          aliases: ['cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k']
        }, {
          denom: 'mnflx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
      base: 'ibc/9AF591DBDDF18B83C13E654DB253C2396F283F2C9C9F5A4217331CBCD82FACD9',
      name: 'Netflix, Inc.',
      display: 'mnflx',
      symbol: 'mNFLX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png',
          theme: {
            primary_color_hex: '#af040c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FF3C2C246D0BB7AF54FBC93C3E0FFD96217B2828B9C24FB69AFCF4A1320C83A0',
          exponent: 0,
          aliases: ['cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p']
        }, {
          denom: 'mnio',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
      base: 'ibc/FF3C2C246D0BB7AF54FBC93C3E0FFD96217B2828B9C24FB69AFCF4A1320C83A0',
      name: 'NIO Inc.',
      display: 'mnio',
      symbol: 'mNIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A61E571AB287837DF9ED60C21D4E888715CF814723AD6A20EECF76C0A4930937',
          exponent: 0,
          aliases: ['cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g']
        }, {
          denom: 'mnke',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
      base: 'ibc/A61E571AB287837DF9ED60C21D4E888715CF814723AD6A20EECF76C0A4930937',
      name: 'NIKE, Inc.',
      display: 'mnke',
      symbol: 'mNKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9E131204958E219C7ED3A51D458B69056C11F7C6B7A9F281E25D83F626EE0D8D',
          exponent: 0,
          aliases: ['cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8']
        }, {
          denom: 'mnvda',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
      base: 'ibc/9E131204958E219C7ED3A51D458B69056C11F7C6B7A9F281E25D83F626EE0D8D',
      name: 'NVIDIA Corporation',
      display: 'mnvda',
      symbol: 'mNVDA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png',
          theme: {
            primary_color_hex: '#74bc04'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A67497E4C10738126FFAC63A7548644CCD3EA0466CA9AC76C7D15CA5E073FB31',
          exponent: 0,
          aliases: ['cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx']
        }, {
          denom: 'mpypl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
      base: 'ibc/A67497E4C10738126FFAC63A7548644CCD3EA0466CA9AC76C7D15CA5E073FB31',
      name: 'PayPal Holdings Inc',
      display: 'mpypl',
      symbol: 'mPYPL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png',
          theme: {
            primary_color_hex: '#24377a'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/14EABCE633B66603E29C134FA84FE06AA347D8B034FC46369A0024522FD8DCF4',
          exponent: 0,
          aliases: ['cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp']
        }, {
          denom: 'mqqq',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
      base: 'ibc/14EABCE633B66603E29C134FA84FE06AA347D8B034FC46369A0024522FD8DCF4',
      name: 'Invesco QQQ Trust',
      display: 'mqqq',
      symbol: 'mQQQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png',
          theme: {
            primary_color_hex: '#041c7c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6CEA15D573B096B627BEA63F7BBB228ABA8EE4DF20F7FC9A926CC94E5E73F1F8',
          exponent: 0,
          aliases: ['cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga']
        }, {
          denom: 'msbux',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
      base: 'ibc/6CEA15D573B096B627BEA63F7BBB228ABA8EE4DF20F7FC9A926CC94E5E73F1F8',
      name: 'Starbucks Corporation',
      display: 'msbux',
      symbol: 'mSBUX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png',
          theme: {
            primary_color_hex: '#047444'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DFDAE1567248649CF9D5EC1835ABB12761AFBC2AED5EB19060FF408908EF0911',
          exponent: 0,
          aliases: ['cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp']
        }, {
          denom: 'mslv',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
      base: 'ibc/DFDAE1567248649CF9D5EC1835ABB12761AFBC2AED5EB19060FF408908EF0911',
      name: 'iShares Silver Trust',
      display: 'mslv',
      symbol: 'mSLV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DEB942DE9DD098BA4CFBB6654F5444F25A56C0EB33C5329D9D15FB8AF0E551DF',
          exponent: 0,
          aliases: ['cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc']
        }, {
          denom: 'mspy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
      base: 'ibc/DEB942DE9DD098BA4CFBB6654F5444F25A56C0EB33C5329D9D15FB8AF0E551DF',
      name: 'SPDR S&P 500',
      display: 'mspy',
      symbol: 'mSPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EA218D93FD0E3688E9B4AC62E295D99DEA2043990FB082544841D1009DC25BC4',
          exponent: 0,
          aliases: ['cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh']
        }, {
          denom: 'msq',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
      base: 'ibc/EA218D93FD0E3688E9B4AC62E295D99DEA2043990FB082544841D1009DC25BC4',
      name: 'Square, Inc.',
      display: 'msq',
      symbol: 'mSQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F329E5D2BFFBAD5F16983DF2549CE6F6A655BFD24723724B05B63EC3B2BE1C93',
          exponent: 0,
          aliases: ['cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh']
        }, {
          denom: 'mtsla',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
      base: 'ibc/F329E5D2BFFBAD5F16983DF2549CE6F6A655BFD24723724B05B63EC3B2BE1C93',
      name: 'Tesla, Inc.',
      display: 'mtsla',
      symbol: 'mTSLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png',
          theme: {
            primary_color_hex: '#e41c34'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2B8084B5048DB35C40AE85744B3FD45B0DDAC5A86D8D9EF64EE99A54B08B8456',
          exponent: 0,
          aliases: ['cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg']
        }, {
          denom: 'mtwtr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
      base: 'ibc/2B8084B5048DB35C40AE85744B3FD45B0DDAC5A86D8D9EF64EE99A54B08B8456',
      name: 'Twitter, Inc.',
      display: 'mtwtr',
      symbol: 'mTWTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png',
          theme: {
            primary_color_hex: '#2cace4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/90D8F8EF83A5E35C82377AB9A735969A18B57E026F01D5725923612C2BFFC698',
          exponent: 0,
          aliases: ['cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf']
        }, {
          denom: 'muso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
      base: 'ibc/90D8F8EF83A5E35C82377AB9A735969A18B57E026F01D5725923612C2BFFC698',
      name: 'United States Oil Fund, LP',
      display: 'muso',
      symbol: 'mUSO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ECA2DFCADA8C767E650717148A935ACE1FEDA0FE48D422B4DF9C3BBF0B3031FD',
          exponent: 0,
          aliases: ['cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx']
        }, {
          denom: 'mvixy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
      base: 'ibc/ECA2DFCADA8C767E650717148A935ACE1FEDA0FE48D422B4DF9C3BBF0B3031FD',
      name: 'ProShares VIX Short-Term Futures ETF',
      display: 'mvixy',
      symbol: 'mVIXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C0AA732868D82983B97A95DB5C90ADED46A9954998FCA6585D51009CBF1FBAA0',
          exponent: 0,
          aliases: ['cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45']
        }, {
          denom: 'mvixy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
      base: 'ibc/C0AA732868D82983B97A95DB5C90ADED46A9954998FCA6585D51009CBF1FBAA0',
      name: 'ProShares VIX Short-Term Futures ETF',
      display: 'mvixy',
      symbol: 'mVIXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
          theme: {
            primary_color_hex: '#141c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/59779E77B0CD760AA361E2347EB58D1BE50BB1115B3E44C2FEBEE9F7E4B6D4A0',
          exponent: 0,
          aliases: ['cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr']
        }, {
          denom: 'lota',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
      base: 'ibc/59779E77B0CD760AA361E2347EB58D1BE50BB1115B3E44C2FEBEE9F7E4B6D4A0',
      name: 'loterra',
      display: 'lota',
      symbol: 'LOTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png',
          theme: {
            primary_color_hex: '#c63adc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D2504173A093D2ADD04CF33D4C2FBB9BB3E7500892B436ED2980A4D5AA8AD569',
          exponent: 0,
          aliases: ['cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7']
        }, {
          denom: 'dph',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
      base: 'ibc/D2504173A093D2ADD04CF33D4C2FBB9BB3E7500892B436ED2980A4D5AA8AD569',
      name: 'Digipharm',
      display: 'dph',
      symbol: 'DPH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png',
          theme: {
            primary_color_hex: '#2c4c9c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/56D749EC4FC9F0657D225539BB4F0962D2DCE7EA22230611E5798D2049723F8C',
          exponent: 0,
          aliases: ['cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy']
        }, {
          denom: 'mine',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
      base: 'ibc/56D749EC4FC9F0657D225539BB4F0962D2DCE7EA22230611E5798D2049723F8C',
      name: 'Pylon MINE Token',
      display: 'mine',
      symbol: 'MINE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png',
          theme: {
            primary_color_hex: '#042c44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4D022D33F748D0521F7920B496A4A9EA755C6004C46FC46970C2C8AB99A4686F',
          exponent: 0,
          aliases: ['cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y']
        }, {
          denom: 'bpsidp-24m',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
      base: 'ibc/4D022D33F748D0521F7920B496A4A9EA755C6004C46FC46970C2C8AB99A4686F',
      name: 'Pylon bDP Token for Gateway Psi 24m Pool',
      display: 'bpsidp-24m',
      symbol: 'bPsiDP-24m',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png',
          theme: {
            primary_color_hex: '#3d6d8e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D60B1882B75C011585E412FB1A596B62E4373C98A964B04D6097EB6342E389D0',
          exponent: 0,
          aliases: ['cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr']
        }, {
          denom: 'spec',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
      base: 'ibc/D60B1882B75C011585E412FB1A596B62E4373C98A964B04D6097EB6342E389D0',
      name: 'Spectrum Token',
      display: 'spec',
      symbol: 'SPEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png',
          theme: {
            primary_color_hex: '#fa2d6c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DD7205ADA3EAC54E01CAEF87FD77736A557D892FB4D722FBCF05B640FD814D78',
          exponent: 0,
          aliases: ['cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4']
        }, {
          denom: 'loop',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
      base: 'ibc/DD7205ADA3EAC54E01CAEF87FD77736A557D892FB4D722FBCF05B640FD814D78',
      name: 'LOOP token',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png',
          theme: {
            primary_color_hex: '#04dff9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FC2AC53B5F1819104F5C6430FB2435E29A7FA9BFEC0E091704843F43042F993C',
          exponent: 0,
          aliases: ['cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q']
        }, {
          denom: 'loopr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
      base: 'ibc/FC2AC53B5F1819104F5C6430FB2435E29A7FA9BFEC0E091704843F43042F993C',
      name: 'LOOPR token',
      display: 'loopr',
      symbol: 'LOOPR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png',
          theme: {
            primary_color_hex: '#550555'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/571EECA4657D78B6E7B3CAF86F8FD0C65F74552ED65745A7F90204B8E247CBAA',
          exponent: 0,
          aliases: ['cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n']
        }, {
          denom: 'stt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
      base: 'ibc/571EECA4657D78B6E7B3CAF86F8FD0C65F74552ED65745A7F90204B8E247CBAA',
      name: 'StarTerra Token',
      display: 'stt',
      symbol: 'STT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png',
          theme: {
            primary_color_hex: '#f5e604'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3BDEADB9655A8E4E573E829AABA198AA2332268B18E3E9F226B3FCEF8A30E9CC',
          exponent: 0,
          aliases: ['cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6']
        }, {
          denom: 'twd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
      base: 'ibc/3BDEADB9655A8E4E573E829AABA198AA2332268B18E3E9F226B3FCEF8A30E9CC',
      name: 'TWD Token',
      display: 'twd',
      symbol: 'TWD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png',
          theme: {
            primary_color_hex: '#25abe3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6FE10582B89D7E0E220A797C003562C76876076323263F0301D12C060F2A9CFB',
          exponent: 0,
          aliases: ['cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc']
        }, {
          denom: 'xtra',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
      base: 'ibc/6FE10582B89D7E0E220A797C003562C76876076323263F0301D12C060F2A9CFB',
      name: 'xterra Token',
      display: 'xtra',
      symbol: 'XTRA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png',
          theme: {
            primary_color_hex: '#0c9cd4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9B651FCCDE2FB0A29BE783B32B3B861CAD82900747DDB377006461A518B2595D',
          exponent: 0,
          aliases: ['cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63']
        }, {
          denom: 'miaw',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
      base: 'ibc/9B651FCCDE2FB0A29BE783B32B3B861CAD82900747DDB377006461A518B2595D',
      name: 'MIAW Token',
      display: 'miaw',
      symbol: 'MIAW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png',
          theme: {
            primary_color_hex: '#060606'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9114AABBE0644F2D7B426B703FBC3F01BA3C6F16059D5018F87D3E612F6E786C',
          exponent: 0,
          aliases: ['cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608']
        }, {
          denom: 'psi',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra12897djskt9rge8dtmm86w654g7kzckkd698608',
      base: 'ibc/9114AABBE0644F2D7B426B703FBC3F01BA3C6F16059D5018F87D3E612F6E786C',
      name: 'Nexus Governance Token',
      display: 'psi',
      symbol: 'Psi',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png',
          theme: {
            primary_color_hex: '#1c1c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4997475CAD7F16FE3AF24A11DE5E832B6DEBE924BDCA3130B76F8AC360B2AF92',
          exponent: 0,
          aliases: ['cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j']
        }, {
          denom: 'nluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
      base: 'ibc/4997475CAD7F16FE3AF24A11DE5E832B6DEBE924BDCA3130B76F8AC360B2AF92',
      name: 'Nexus nLuna Token',
      display: 'nluna',
      symbol: 'nLuna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3A4823C4B70E13C94F395B6A0AFDACFA789C6ECCB5D579793C397EC88AF34E24',
          exponent: 0,
          aliases: ['cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn']
        }, {
          denom: 'neth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
      base: 'ibc/3A4823C4B70E13C94F395B6A0AFDACFA789C6ECCB5D579793C397EC88AF34E24',
      name: 'Nexus nETH Token',
      display: 'neth',
      symbol: 'nETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0614E418BDF9474B4D90EC9665DE838D0175728CFBF3D269F1E87A129A9F45DF',
          exponent: 0,
          aliases: ['cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj']
        }, {
          denom: 'cnluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
      base: 'ibc/0614E418BDF9474B4D90EC9665DE838D0175728CFBF3D269F1E87A129A9F45DF',
      name: 'nLuna autocompounder share representation',
      display: 'cnluna',
      symbol: 'cnLuna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/304E673F963E9843ABB7731B16F96700B0683F8BB919353CEA968FA0683F1822',
          exponent: 0,
          aliases: ['cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756']
        }, {
          denom: 'cneth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
      base: 'ibc/304E673F963E9843ABB7731B16F96700B0683F8BB919353CEA968FA0683F1822',
      name: 'nETH autocompounder share representation',
      display: 'cneth',
      symbol: 'cnETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0E3F1ACAB2DA3C9123D9805902EB29FF47EBB40643B8B51EC40C3B74AC1B23A7',
          exponent: 0,
          aliases: ['cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636']
        }, {
          denom: 'navax',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
      base: 'ibc/0E3F1ACAB2DA3C9123D9805902EB29FF47EBB40643B8B51EC40C3B74AC1B23A7',
      name: 'Nexus nAVAX Token',
      display: 'navax',
      symbol: 'nAVAX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/262216F7419306C3D3F2AE6182FAFF2D565DDA65A1C3D73A8D5FAA75013DE979',
          exponent: 0,
          aliases: ['cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade']
        }, {
          denom: 'natom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
      base: 'ibc/262216F7419306C3D3F2AE6182FAFF2D565DDA65A1C3D73A8D5FAA75013DE979',
      name: 'Nexus nATOM Token',
      display: 'natom',
      symbol: 'nATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/27BDEC8200AE430DE9C09D8D3D65B6F876ADE5FEBF55203D62A79C8298938703',
          exponent: 0,
          aliases: ['cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5']
        }, {
          denom: 'vkr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
      base: 'ibc/27BDEC8200AE430DE9C09D8D3D65B6F876ADE5FEBF55203D62A79C8298938703',
      name: 'VKR Token',
      display: 'vkr',
      symbol: 'VKR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/38CB1EB8BD4B40FBEFCB806D51B3AAF2C3AF48FFCF3D8FD15BC3F17B8B2357CA',
          exponent: 0,
          aliases: ['cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03']
        }, {
          denom: 'orion',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
      base: 'ibc/38CB1EB8BD4B40FBEFCB806D51B3AAF2C3AF48FFCF3D8FD15BC3F17B8B2357CA',
      name: 'Orion Money (Portal)',
      display: 'orion',
      symbol: 'ORION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png',
          theme: {
            primary_color_hex: '#04bc74'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/30BE1EF2FDB274C0D75069F968E7CD493DE330CBE67B6D02DB3E85E5F233E38E',
          exponent: 0,
          aliases: ['cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc']
        }, {
          denom: 'tland',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
      base: 'ibc/30BE1EF2FDB274C0D75069F968E7CD493DE330CBE67B6D02DB3E85E5F233E38E',
      name: 'TerraLand Token',
      display: 'tland',
      symbol: 'TLAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png',
          theme: {
            primary_color_hex: '#c3a990'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/947638EF5D68F7D0EF37CBEB663AE895B7AA97BEA1BAEC139DD3E803F2E8B2C7',
          exponent: 0,
          aliases: ['cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg']
        }, {
          denom: 'vust',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
      base: 'ibc/947638EF5D68F7D0EF37CBEB663AE895B7AA97BEA1BAEC139DD3E803F2E8B2C7',
      name: 'Vault UST',
      display: 'vust',
      symbol: 'vUST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png',
          theme: {
            primary_color_hex: '#3ccb64'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EF1DE042DAF1A8D9B008BE6AA48AE3C658515EE267F023E8F64A678C2F82A1B4',
          exponent: 0,
          aliases: ['cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r']
        }, {
          denom: 'eth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
      base: 'ibc/EF1DE042DAF1A8D9B008BE6AA48AE3C658515EE267F023E8F64A678C2F82A1B4',
      name: 'Ether (Portal)',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png',
          theme: {
            primary_color_hex: '#2d2831'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E4E9483AB63C182FCAD03570E0D102CDDD3732F91691B0F1F45D934124282CB3',
          exponent: 0,
          aliases: ['cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
      base: 'ibc/E4E9483AB63C182FCAD03570E0D102CDDD3732F91691B0F1F45D934124282CB3',
      name: 'Wrapped BTC (Portal)',
      display: 'wbtc',
      symbol: 'WBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png',
          theme: {
            primary_color_hex: '#f3931e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/850AB866E9D3F66A73BF8CA6DB8ECEF129C39C671CA800A18EFDB49250FFB03D',
          exponent: 0,
          aliases: ['cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk']
        }, {
          denom: 'sol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
      base: 'ibc/850AB866E9D3F66A73BF8CA6DB8ECEF129C39C671CA800A18EFDB49250FFB03D',
      name: 'SOL (Portal)',
      display: 'sol',
      symbol: 'SOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D5FB90FA59AAAF69F61A1CF2BFAB43575054D9127EA04EB49C11BE1B8A8906D6',
          exponent: 0,
          aliases: ['cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq']
        }, {
          denom: 'maticet',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
      base: 'ibc/D5FB90FA59AAAF69F61A1CF2BFAB43575054D9127EA04EB49C11BE1B8A8906D6',
      name: 'MATIC (Portal from Ethereum)',
      display: 'maticet',
      symbol: 'MATICet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png',
          theme: {
            primary_color_hex: '#8447e1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/92C5A58F9473DD4431B8E9DA4A352554B09539C3294D42632116CCCAAB7B7139',
          exponent: 0,
          aliases: ['cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8']
        }, {
          denom: 'bnb',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
      base: 'ibc/92C5A58F9473DD4431B8E9DA4A352554B09539C3294D42632116CCCAAB7B7139',
      name: 'Binance Coin (Portal)',
      display: 'bnb',
      symbol: 'BNB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png',
          theme: {
            primary_color_hex: '#f4bc2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ED58215EF205066F7993540559BB741BD3A9064DCD556FEB84ACFDB562AD833E',
          exponent: 0,
          aliases: ['cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av']
        }, {
          denom: 'cake',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
      base: 'ibc/ED58215EF205066F7993540559BB741BD3A9064DCD556FEB84ACFDB562AD833E',
      name: 'PancakeSwap Token (Portal)',
      display: 'cake',
      symbol: 'CAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png',
          theme: {
            primary_color_hex: '#d0894d'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B429EF78C02815A33A40B904525B5921ED37D7BC2C0B3343F60EEEBE6883C1D1',
          exponent: 0,
          aliases: ['cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym']
        }, {
          denom: 'link',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
      base: 'ibc/B429EF78C02815A33A40B904525B5921ED37D7BC2C0B3343F60EEEBE6883C1D1',
      name: 'Chainlink (Portal)',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
          theme: {
            primary_color_hex: '#345cd4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/55CACAE76125B1DDD31B0C6DA7CEC60630804D104F47F91678F15C53E451400A',
          exponent: 0,
          aliases: ['cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a']
        }, {
          denom: 'sushi',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
      base: 'ibc/55CACAE76125B1DDD31B0C6DA7CEC60630804D104F47F91678F15C53E451400A',
      name: 'SushiToken (Portal)',
      display: 'sushi',
      symbol: 'SUSHI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png',
          theme: {
            primary_color_hex: '#cd68ac'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/33B48781BF15012E9A6151C732B19CF9721B9B5B0BD599FD6DB504C15A74FAD1',
          exponent: 0,
          aliases: ['cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf']
        }, {
          denom: 'uni',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
      base: 'ibc/33B48781BF15012E9A6151C732B19CF9721B9B5B0BD599FD6DB504C15A74FAD1',
      name: 'Uniswap (Portal)',
      display: 'uni',
      symbol: 'UNI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png',
          theme: {
            primary_color_hex: '#b01e66'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E261633E4F3355780244D7251A0C63CFB6BF67A787A0856694D94C8204246128',
          exponent: 0,
          aliases: ['cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva']
        }, {
          denom: 'usdtet',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
      base: 'ibc/E261633E4F3355780244D7251A0C63CFB6BF67A787A0856694D94C8204246128',
      name: 'Tether USD (Portal from Ethereum)',
      display: 'usdtet',
      symbol: 'USDTet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png',
          theme: {
            primary_color_hex: '#56a995'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9B6696ED84C26EE8DB88FC15547117E9DF0BFE3C3096D18D78330F12956B5E74',
          exponent: 0,
          aliases: ['cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06']
        }, {
          denom: 'usdcet',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
      base: 'ibc/9B6696ED84C26EE8DB88FC15547117E9DF0BFE3C3096D18D78330F12956B5E74',
      name: 'USD Coin (Portal from Ethereum)',
      display: 'usdcet',
      symbol: 'USDCet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png',
          theme: {
            primary_color_hex: '#2a75c9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/11E64FDCDC6C58300CC57D48AFDDDA3A3146B0EA8266F65B8E9384C02E4AD251',
          exponent: 0,
          aliases: ['cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
      base: 'ibc/11E64FDCDC6C58300CC57D48AFDDDA3A3146B0EA8266F65B8E9384C02E4AD251',
      name: 'Kujira Token',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png',
          theme: {
            primary_color_hex: '#24242c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AE76A6550A49D9A4D7F7672E7FEB1F4D5083E86D9938DC71D72CD7CA613076AD',
          exponent: 0,
          aliases: ['cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw']
        }, {
          denom: 'skuji',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
      base: 'ibc/AE76A6550A49D9A4D7F7672E7FEB1F4D5083E86D9938DC71D72CD7CA613076AD',
      name: 'Staked KUJI',
      display: 'skuji',
      symbol: 'sKUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png',
          theme: {
            primary_color_hex: '#252933'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/58B8B9392AC646CC1DFED9F9E1874F2296987565D59BBA165940217E2E866692',
          exponent: 0,
          aliases: ['cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur']
        }, {
          denom: 'wsteth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
      base: 'ibc/58B8B9392AC646CC1DFED9F9E1874F2296987565D59BBA165940217E2E866692',
      name: 'Lido wstETH (Portal)',
      display: 'wsteth',
      symbol: 'wstETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png',
          theme: {
            primary_color_hex: '#9cdcfc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B71002633CAB3A6FCA1F6E54AF57519ADF6C5F909E2E44C15EDF404C85535CFC',
          exponent: 0,
          aliases: ['cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap']
        }, {
          denom: 'wstsol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
      base: 'ibc/B71002633CAB3A6FCA1F6E54AF57519ADF6C5F909E2E44C15EDF404C85535CFC',
      name: 'Lido wstSOL (Portal)',
      display: 'wstsol',
      symbol: 'wstSOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png',
          theme: {
            primary_color_hex: '#1dbffc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D0FC6C7B16D5568AE0FC0557FF888B29D777E3CAA446822A64C99546DA7768CF',
          exponent: 0,
          aliases: ['cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj']
        }, {
          denom: 'wsbsol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
      base: 'ibc/D0FC6C7B16D5568AE0FC0557FF888B29D777E3CAA446822A64C99546DA7768CF',
      name: 'Lido bonded SOL (Portal)',
      display: 'wsbsol',
      symbol: 'wsbSOL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/048F036D1ECC8AE2D26435EF6C9AA1ACBBA3743F9E31966E14E5711AEF1CBE63',
          exponent: 0,
          aliases: ['cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z']
        }, {
          denom: 'ldo',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
      base: 'ibc/048F036D1ECC8AE2D26435EF6C9AA1ACBBA3743F9E31966E14E5711AEF1CBE63',
      name: 'Lido DAO (Portal)',
      display: 'ldo',
      symbol: 'LDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png',
          theme: {
            primary_color_hex: '#f49c8c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/09F296B2336A3B2391CCC454DC4A466EA351F06D8B7C38638087D47BEE811C2C',
          exponent: 0,
          aliases: ['cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz']
        }, {
          denom: 'webeth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
      base: 'ibc/09F296B2336A3B2391CCC454DC4A466EA351F06D8B7C38638087D47BEE811C2C',
      name: 'Lido Bonded ETH (Wormhole)',
      display: 'webeth',
      symbol: 'webETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E44072502CD109E5B775A21C4B83E486FAD81EB107252D184EF4518795177436',
          exponent: 0,
          aliases: ['cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc']
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
      base: 'ibc/E44072502CD109E5B775A21C4B83E486FAD81EB107252D184EF4518795177436',
      name: 'Lido staked Luna',
      display: 'stluna',
      symbol: 'stLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png',
          theme: {
            primary_color_hex: '#1fc0fb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/97FC6DD800F0C29C0A271E9BAFECB63B619D0F5329CEF101AFC4D77CC8DCEB9C',
          exponent: 0,
          aliases: ['cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh']
        }, {
          denom: 'xdefi',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
      base: 'ibc/97FC6DD800F0C29C0A271E9BAFECB63B619D0F5329CEF101AFC4D77CC8DCEB9C',
      name: 'XDEFI (Portal)',
      display: 'xdefi',
      symbol: 'XDEFI',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/132FA30C798374D808D8920BFEBEEE6FA97B0AF082927BBC29F8710A6A0B62DB',
          exponent: 0,
          aliases: ['cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl']
        }, {
          denom: 'btl',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
      base: 'ibc/132FA30C798374D808D8920BFEBEEE6FA97B0AF082927BBC29F8710A6A0B62DB',
      name: 'Bitlocus Token',
      display: 'btl',
      symbol: 'BTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png',
          theme: {
            primary_color_hex: '#5cbc8c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CF1B0BF883FDD19F19252C40A54333AB4094A30E57B7D96747BFE68323EA1217',
          exponent: 0,
          aliases: ['cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup']
        }, {
          denom: 'lunax',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
      base: 'ibc/CF1B0BF883FDD19F19252C40A54333AB4094A30E57B7D96747BFE68323EA1217',
      name: 'LunaX Token',
      display: 'lunax',
      symbol: 'LunaX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png',
          theme: {
            primary_color_hex: '#cdcdce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FF77B77B363117B5C6F356428636667295A31F9BB06C147B4363364EE2A4212B',
          exponent: 0,
          aliases: ['cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7']
        }, {
          denom: 'luni',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
      base: 'ibc/FF77B77B363117B5C6F356428636667295A31F9BB06C147B4363364EE2A4212B',
      name: 'LUNI',
      display: 'luni',
      symbol: 'LUNI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png',
          theme: {
            primary_color_hex: '#232742'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2212EDBD0F77A64B54AC193C5F9D31840BD6FDAD04AB95CCC3FBAC299D98F786',
          exponent: 0,
          aliases: ['cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu']
        }, {
          denom: 'ply',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
      base: 'ibc/2212EDBD0F77A64B54AC193C5F9D31840BD6FDAD04AB95CCC3FBAC299D98F786',
      name: 'PlayNity Token',
      display: 'ply',
      symbol: 'PLY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png',
          theme: {
            primary_color_hex: '#070706'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A660C159A5333572F18E9BCEE715E51E01627458F4A98EEE73E3565C8D59F1D9',
          exponent: 0,
          aliases: ['cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj']
        }, {
          denom: 'tfloki',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
      base: 'ibc/A660C159A5333572F18E9BCEE715E51E01627458F4A98EEE73E3565C8D59F1D9',
      name: 'TFLOKI',
      display: 'tfloki',
      symbol: 'TFLOKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png',
          theme: {
            primary_color_hex: '#f6c911'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/93C53C18687171754C7A8FC9258198611D54F8047B2A568422282DD2A14589C9',
          exponent: 0,
          aliases: ['cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u']
        }, {
          denom: 'tftic',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
      base: 'ibc/93C53C18687171754C7A8FC9258198611D54F8047B2A568422282DD2A14589C9',
      name: 'TFLOKI Genesis Ticket',
      display: 'tftic',
      symbol: 'TFTIC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/36A8FC4FFDFB3146472B14F165F7A6612C9197E8945E841ED1FAFED03743FFE2',
          exponent: 0,
          aliases: ['cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86']
        }, {
          denom: 'tfticii',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
      base: 'ibc/36A8FC4FFDFB3146472B14F165F7A6612C9197E8945E841ED1FAFED03743FFE2',
      name: 'TFLOKI New World Ticket',
      display: 'tfticii',
      symbol: 'TFTICII',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/496EC008B7D2335DF53626745FCDEDA798C7CE2E56AB39E1A0C9A03579BA5A92',
          exponent: 0,
          aliases: ['cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28']
        }, {
          denom: 'tfticiii',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
      base: 'ibc/496EC008B7D2335DF53626745FCDEDA798C7CE2E56AB39E1A0C9A03579BA5A92',
      name: 'TFLOKI Aviator Ticket',
      display: 'tfticiii',
      symbol: 'TFTICIII',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F007D844E2E57797A74298AAC024CC15EE34B2076DAC39A687425B13710CFFE0',
          exponent: 0,
          aliases: ['cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26']
        }, {
          denom: 'moon',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
      base: 'ibc/F007D844E2E57797A74298AAC024CC15EE34B2076DAC39A687425B13710CFFE0',
      name: 'Moon Token',
      display: 'moon',
      symbol: 'MOON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png',
          theme: {
            primary_color_hex: '#ebb30c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A97C363C7F923F65B1576BA5D5EC0FC6CF01771AAFB16AF808FCA8E729AA06A3',
          exponent: 0,
          aliases: ['cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
      base: 'ibc/A97C363C7F923F65B1576BA5D5EC0FC6CF01771AAFB16AF808FCA8E729AA06A3',
      name: 'Astroport Token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/68E590B39BD364750C04DF22D00386708F97C950522F3682BFE381B6850F3672',
          exponent: 0,
          aliases: ['cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7']
        }, {
          denom: 'xastro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
      base: 'ibc/68E590B39BD364750C04DF22D00386708F97C950522F3682BFE381B6850F3672',
      name: 'Staked Astroport Token',
      display: 'xastro.cw20',
      symbol: 'xASTRO.cw20',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro-cw20.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AC3A9BFFED04F4F4CE157F5F6270BEC9885E8618C7867839CE081670DE02F276',
          exponent: 0,
          aliases: ['cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq']
        }, {
          denom: 'halo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
      base: 'ibc/AC3A9BFFED04F4F4CE157F5F6270BEC9885E8618C7867839CE081670DE02F276',
      name: 'Angel Protocol Token',
      display: 'halo',
      symbol: 'HALO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png',
          theme: {
            primary_color_hex: '#54a4dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A332A25A9A73957ABBFEAD7EFF3D0329BCE35EC82D6F36AA89FCE2B5094FF121',
          exponent: 0,
          aliases: ['cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j']
        }, {
          denom: 'pug',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
      base: 'ibc/A332A25A9A73957ABBFEAD7EFF3D0329BCE35EC82D6F36AA89FCE2B5094FF121',
      name: 'AstroPug Token',
      display: 'pug',
      symbol: 'PUG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png',
          theme: {
            primary_color_hex: '#252424'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/21B7749D810ABF14D5B6A68049336778CA9A7371E5541938DB3E2C61ED885796',
          exponent: 0,
          aliases: ['cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf']
        }, {
          denom: 'orne',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
      base: 'ibc/21B7749D810ABF14D5B6A68049336778CA9A7371E5541938DB3E2C61ED885796',
      name: 'Orne Token',
      display: 'orne',
      symbol: 'ORNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png',
          theme: {
            primary_color_hex: '#fbfbfb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/63C24DD7740969A93EA087324D7E9D353471E4A531D59F24757539C5F532D65F',
          exponent: 0,
          aliases: ['cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y']
        }, {
          denom: 'tns',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
      base: 'ibc/63C24DD7740969A93EA087324D7E9D353471E4A531D59F24757539C5F532D65F',
      name: 'Terra Name Service',
      display: 'tns',
      symbol: 'TNS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png',
          theme: {
            primary_color_hex: '#2442cf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/67A826723772A8341D7B9CE308628DBABB5B19891770B81C6007051B053C6EB1',
          exponent: 0,
          aliases: ['cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm']
        }, {
          denom: 'xrune',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
      base: 'ibc/67A826723772A8341D7B9CE308628DBABB5B19891770B81C6007051B053C6EB1',
      name: 'Thorstarter',
      display: 'xrune',
      symbol: 'XRUNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FA7067E9FA246D81DF2DF136CB5D63D26BECD0F1DB34E0BA686CA9EA0C26A6C8',
          exponent: 0,
          aliases: ['cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784']
        }, {
          denom: 'alot',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
      base: 'ibc/FA7067E9FA246D81DF2DF136CB5D63D26BECD0F1DB34E0BA686CA9EA0C26A6C8',
      name: 'Alpha Pack Token',
      display: 'alot',
      symbol: 'aLOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png',
          theme: {
            primary_color_hex: '#c7bea1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/32C4692674C1AC5E145D93393A3CA3896546F4CC169F36119DD015BB32BA4C72',
          exponent: 0,
          aliases: ['cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe']
        }, {
          denom: 'sity',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
      base: 'ibc/32C4692674C1AC5E145D93393A3CA3896546F4CC169F36119DD015BB32BA4C72',
      name: 'CurioSITY play to earn token',
      display: 'sity',
      symbol: 'SITY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A2B2739FAE29BFC3A29B257C0A7C13AEBDE2684C6DAE7327D312C0AFA04330B9',
          exponent: 0,
          aliases: ['cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7']
        }, {
          denom: 'glow',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
      base: 'ibc/A2B2739FAE29BFC3A29B257C0A7C13AEBDE2684C6DAE7327D312C0AFA04330B9',
      name: 'Glow Token',
      display: 'glow',
      symbol: 'GLOW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png',
          theme: {
            primary_color_hex: '#262238'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5DEC7D16F42736EB722566FE7C5A6E30547261BA5E6023F1E4494518A1A96FA0',
          exponent: 0,
          aliases: ['cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
      base: 'ibc/5DEC7D16F42736EB722566FE7C5A6E30547261BA5E6023F1E4494518A1A96FA0',
      name: 'Apollo DAO Token',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png',
          theme: {
            primary_color_hex: '#10192a'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/349F858394E3D16D329A7682964FFB864DC29F2B75BCC6557432053EAE0FA035',
          exponent: 0,
          aliases: ['cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u']
        }, {
          denom: 'abr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
      base: 'ibc/349F858394E3D16D329A7682964FFB864DC29F2B75BCC6557432053EAE0FA035',
      name: 'Allbridge',
      display: 'abr',
      symbol: 'ABR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6611C1F0E6C274ECC2E89010176DFDD01AA208CF87D5344B43B6DCCEF11F0610',
          exponent: 0,
          aliases: ['cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc']
        }, {
          denom: 'whgtps',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
      base: 'ibc/6611C1F0E6C274ECC2E89010176DFDD01AA208CF87D5344B43B6DCCEF11F0610',
      name: 'Global Transaction Payment Solu',
      display: 'whgtps',
      symbol: 'whGTPS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/49D125F7A413F9E1B73EFF348C4E3988261D8E952D8E8489B50901C4D394252A',
          exponent: 0,
          aliases: ['cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw']
        }, {
          denom: 'prism',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
      base: 'ibc/49D125F7A413F9E1B73EFF348C4E3988261D8E952D8E8489B50901C4D394252A',
      name: 'Prism Protocol Token',
      display: 'prism',
      symbol: 'PRISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png',
          theme: {
            primary_color_hex: '#f6f6f6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ACF33437E0ECD74E7370B4EDD7CB0EE956B1CD08D1497BF632F2C057A1AEEE39',
          exponent: 0,
          aliases: ['cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq']
        }, {
          denom: 'sdollar',
          exponent: 2
        }],
      type_asset: 'cw20',
      address: 'terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
      base: 'ibc/ACF33437E0ECD74E7370B4EDD7CB0EE956B1CD08D1497BF632F2C057A1AEEE39',
      name: 'Space Dollar',
      display: 'sdollar',
      symbol: 'SDOLLAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/7605C9F8A6130D448249D1D64239EBC52F61F421557C1F3F3A33F4B574CF711B',
          exponent: 0,
          aliases: ['cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k']
        }, {
          denom: 'whsail',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
      base: 'ibc/7605C9F8A6130D448249D1D64239EBC52F61F421557C1F3F3A33F4B574CF711B',
      name: 'SAIL',
      display: 'whsail',
      symbol: 'whSAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png',
          theme: {
            primary_color_hex: '#0472b3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4D5E6A381A119AE44B745AA1FFDBF0DDCE7FD93E1E76DDF976B354E23F57F0DA',
          exponent: 0,
          aliases: ['cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu']
        }, {
          denom: 'whgsail',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
      base: 'ibc/4D5E6A381A119AE44B745AA1FFDBF0DDCE7FD93E1E76DDF976B354E23F57F0DA',
      name: 'SolanaSail Governance Token V2',
      display: 'whgsail',
      symbol: 'whgSAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png',
          theme: {
            primary_color_hex: '#046baa'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/796CBE7588E3841A0F15BE8AD778C67AC625782303981B451726252EE490CF56',
          exponent: 0,
          aliases: ['cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz']
        }, {
          denom: 'xprism',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
      base: 'ibc/796CBE7588E3841A0F15BE8AD778C67AC625782303981B451726252EE490CF56',
      name: 'Prism Governance Token',
      display: 'xprism',
      symbol: 'xPRISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png',
          theme: {
            primary_color_hex: '#242434'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AF40EAF7D47DD4AFEE79B005672E6E6F06AD11D2C7AC14E7C2FD8978C77BE700',
          exponent: 0,
          aliases: ['cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5']
        }, {
          denom: 'cde',
          exponent: 9
        }],
      type_asset: 'cw20',
      address: 'terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
      base: 'ibc/AF40EAF7D47DD4AFEE79B005672E6E6F06AD11D2C7AC14E7C2FD8978C77BE700',
      name: 'CAPITRADE TOKEN',
      display: 'cde',
      symbol: 'CDE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DB3B5A33D7004636763413BD6CD69F249A3B1FF3FA3A145B90767301F0694FB4',
          exponent: 0,
          aliases: ['cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8']
        }, {
          denom: 'ctx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
      base: 'ibc/DB3B5A33D7004636763413BD6CD69F249A3B1FF3FA3A145B90767301F0694FB4',
      name: 'C2X Token',
      display: 'ctx',
      symbol: 'CTX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png',
          theme: {
            primary_color_hex: '#04b4fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/713D30434F5EDAD11F43EA00D52100870BE3DA7732B30D02D6B1D32B73F943F2',
          exponent: 0,
          aliases: ['cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau']
        }, {
          denom: 'cluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
      base: 'ibc/713D30434F5EDAD11F43EA00D52100870BE3DA7732B30D02D6B1D32B73F943F2',
      name: 'Prism cLuna Token',
      display: 'cluna',
      symbol: 'cLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png',
          theme: {
            primary_color_hex: '#211f2e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FCDA8586D16EB41B14AD529BF775BA4295ABB1AD64E909D677A444A8334EFD83',
          exponent: 0,
          aliases: ['cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2']
        }, {
          denom: 'pluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
      base: 'ibc/FCDA8586D16EB41B14AD529BF775BA4295ABB1AD64E909D677A444A8334EFD83',
      name: 'Prism pLuna Token',
      display: 'pluna',
      symbol: 'pLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png',
          theme: {
            primary_color_hex: '#202030'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BD070B4B22F9EEEEFE1150E86C7822266D0BEC3E4D2FB07AB405C51415F846D5',
          exponent: 0,
          aliases: ['cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz']
        }, {
          denom: 'yluna',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
      base: 'ibc/BD070B4B22F9EEEEFE1150E86C7822266D0BEC3E4D2FB07AB405C51415F846D5',
      name: 'Prism yLuna Token',
      display: 'yluna',
      symbol: 'yLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png',
          theme: {
            primary_color_hex: '#202130'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/7EC1DF8FFF5254CF9CBCB6F15BBD3CC1975C60A072D89F8A66B6EEF630FFA5BE',
          exponent: 0,
          aliases: ['cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx']
        }, {
          denom: 'atlo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
      base: 'ibc/7EC1DF8FFF5254CF9CBCB6F15BBD3CC1975C60A072D89F8A66B6EEF630FFA5BE',
      name: 'Atlo Token',
      display: 'atlo',
      symbol: 'ATLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png',
          theme: {
            primary_color_hex: '#1b3667'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3897FA130B33F5335E52B9060F4DB91BB0A5AB47752E04EC574576341E9F73C9',
          exponent: 0,
          aliases: ['cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp']
        }, {
          denom: 'local',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
      base: 'ibc/3897FA130B33F5335E52B9060F4DB91BB0A5AB47752E04EC574576341E9F73C9',
      name: 'LOCAL Token',
      display: 'local',
      symbol: 'LOCAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png',
          theme: {
            primary_color_hex: '#242424'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A6F8458A46DD8EA05C0D772FCF2F79DADB648DE595F92B9ADE2256793773FD15',
          exponent: 0,
          aliases: ['cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6']
        }, {
          denom: 'luv',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
      base: 'ibc/A6F8458A46DD8EA05C0D772FCF2F79DADB648DE595F92B9ADE2256793773FD15',
      name: 'Lunaverse',
      display: 'luv',
      symbol: 'LUV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png',
          theme: {
            primary_color_hex: '#f7a02f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5EF2536333F4C26CAFC4A5E2C5315F82FECA2871FA7D05164AD39ACAD18B3B03',
          exponent: 0,
          aliases: ['cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp']
        }, {
          denom: 'robo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
      base: 'ibc/5EF2536333F4C26CAFC4A5E2C5315F82FECA2871FA7D05164AD39ACAD18B3B03',
      name: 'RoboHero',
      display: 'robo',
      symbol: 'ROBO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png',
          theme: {
            primary_color_hex: '#2473d2'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B1FE8C446277407C145995C73796B26681B58465E32DA80B6E0E4A70CDF6A99C',
          exponent: 0,
          aliases: ['cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk']
        }, {
          denom: 'luart',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
      base: 'ibc/B1FE8C446277407C145995C73796B26681B58465E32DA80B6E0E4A70CDF6A99C',
      name: 'Luart Token',
      display: 'luart',
      symbol: 'LUART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png',
          theme: {
            primary_color_hex: '#1b1429'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/27E2431F98318CAB47BCF33589C402A3564901A2945CDD6A6976F22BA339090C',
          exponent: 0,
          aliases: ['cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
      base: 'ibc/27E2431F98318CAB47BCF33589C402A3564901A2945CDD6A6976F22BA339090C',
      name: 'Mars Token',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/ADAB3970B793D1C2710B946F7B55FD4A0C8CBAAA01707516B9460197EED283A7',
          exponent: 0,
          aliases: ['cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4']
        }, {
          denom: 'xmars',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
      base: 'ibc/ADAB3970B793D1C2710B946F7B55FD4A0C8CBAAA01707516B9460197EED283A7',
      name: 'xMars Token',
      display: 'xmars',
      symbol: 'XMARS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3F913758D918415A6AC2ABAEE0D6C8AF03F71F3985D4BF9788F3AD0B80D34180',
          exponent: 0,
          aliases: ['cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4']
        }, {
          denom: 'dfiat',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
      base: 'ibc/3F913758D918415A6AC2ABAEE0D6C8AF03F71F3985D4BF9788F3AD0B80D34180',
      name: 'DeFiato',
      display: 'dfiat',
      symbol: 'DFIAT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/915E8EDC121175353122809C0EACB9BACEF19E207D00210A0BA1C9EBDA97FB7A',
          exponent: 0,
          aliases: ['cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d']
        }, {
          denom: 'ceres',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
      base: 'ibc/915E8EDC121175353122809C0EACB9BACEF19E207D00210A0BA1C9EBDA97FB7A',
      name: 'Ceres Governance Token',
      display: 'ceres',
      symbol: 'CERES',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F60EF271DC2F7C0643465B15C41E9507128775B3709A93B9967D1729E4DC403F',
          exponent: 0,
          aliases: ['cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58']
        }, {
          denom: 'wasavax',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
      base: 'ibc/F60EF271DC2F7C0643465B15C41E9507128775B3709A93B9967D1729E4DC403F',
      name: 'BENQI Staked AVAX (Portal)',
      display: 'wasavax',
      symbol: 'wasAVAX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/531153BFED63BC9DE2B7A4D20437BC3827C89BB58080A3D26F2831FA2559872C',
          exponent: 0,
          aliases: ['cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr']
        }, {
          denom: 'mint',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
      base: 'ibc/531153BFED63BC9DE2B7A4D20437BC3827C89BB58080A3D26F2831FA2559872C',
      name: 'MintDAO',
      display: 'mint',
      symbol: 'MINT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/28ABEC495CA225C661D721417C7047E95AD255EEF962D631588BD2483A9D6302',
          exponent: 0,
          aliases: ['cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02']
        }, {
          denom: 'sd',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
      base: 'ibc/28ABEC495CA225C661D721417C7047E95AD255EEF962D631588BD2483A9D6302',
      name: 'Stader SD (Portal)',
      display: 'sd',
      symbol: 'SD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/58C010156B109601FA11CB7C9F48DD5BA12FA5840F6F09E616F14C16823C1638',
          exponent: 0,
          aliases: ['cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep']
        }, {
          denom: 'xsd',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
      base: 'ibc/58C010156B109601FA11CB7C9F48DD5BA12FA5840F6F09E616F14C16823C1638',
      name: 'Stader xSD',
      display: 'xsd',
      symbol: 'xSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png',
          theme: {
            primary_color_hex: '#f3f3f3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/98F70D4D2A0C94F0F86C86591B29C53C96AE6CEC850FAC1F9F759331A3F26C69',
          exponent: 0,
          aliases: ['cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r']
        }, {
          denom: 'paxg',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
      base: 'ibc/98F70D4D2A0C94F0F86C86591B29C53C96AE6CEC850FAC1F9F759331A3F26C69',
      name: 'Paxos Gold (Portal)',
      display: 'paxg',
      symbol: 'PAXG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png',
          theme: {
            primary_color_hex: '#848484'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/12BB640BB6EC83B5AB3929977C93B08A039D450ED238F2E6E6D025B0EEE9DB5D',
          exponent: 0,
          aliases: ['cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl']
        }, {
          denom: 'whdao',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
      base: 'ibc/12BB640BB6EC83B5AB3929977C93B08A039D450ED238F2E6E6D025B0EEE9DB5D',
      name: 'DAO Maker',
      display: 'whdao',
      symbol: 'whDAO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png',
          theme: {
            primary_color_hex: '#2c2c44'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EC6886FB8F877C5EC367603D0444496EA77CE9E265959F44DCF78F8691424105',
          exponent: 0,
          aliases: ['cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt']
        }, {
          denom: 'link',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
      base: 'ibc/EC6886FB8F877C5EC367603D0444496EA77CE9E265959F44DCF78F8691424105',
      name: 'ChainLink Token',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
          theme: {
            primary_color_hex: '#345cd4'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/8FA8D8A8C8F29C54E177E4FDD3B919161238314DD39693C8ACC50D25EE5F04C0',
          exponent: 0,
          aliases: ['cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
      base: 'ibc/8FA8D8A8C8F29C54E177E4FDD3B919161238314DD39693C8ACC50D25EE5F04C0',
      name: 'Sayve Token',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png',
          theme: {
            primary_color_hex: '#f3ebdb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CB0C95C59C8EF16384073D42D0420E193912FDB45DC12855F8DA750AB4695DF8',
          exponent: 0,
          aliases: ['cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u']
        }, {
          denom: 'guides',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
      base: 'ibc/CB0C95C59C8EF16384073D42D0420E193912FDB45DC12855F8DA750AB4695DF8',
      name: 'Guides Token',
      display: 'guides',
      symbol: 'GUIDES',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C170FE4F33A426F325BF8683E2EDC1A337476C039D0E8AE76B0401B967C4300D',
          exponent: 0,
          aliases: ['cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2']
        }, {
          denom: 'bro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
      base: 'ibc/C170FE4F33A426F325BF8683E2EDC1A337476C039D0E8AE76B0401B967C4300D',
      name: 'BRO token',
      display: 'bro',
      symbol: 'BRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D9C3BCD971B5621CA7D080105534B41DBE232DC94B19682688BD27DDC9032B33',
          exponent: 0,
          aliases: ['cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds']
        }, {
          denom: 'bbro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
      base: 'ibc/D9C3BCD971B5621CA7D080105534B41DBE232DC94B19682688BD27DDC9032B33',
      name: 'bBRO token',
      display: 'bbro',
      symbol: 'bBRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0CFC43A1E49DE63C43B9D0FFFCE4CD1A7B969A84D76775FE459F8D1AA277C161',
          exponent: 0,
          aliases: ['cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr']
        }, {
          denom: 'gtps',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
      base: 'ibc/0CFC43A1E49DE63C43B9D0FFFCE4CD1A7B969A84D76775FE459F8D1AA277C161',
      name: 'Global Transaction Payment Solut',
      display: 'gtps',
      symbol: 'GTPS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F2003DFF519010E6BF7A12376268DDE99D9F3855E2A01914FD6D1A1DAE868A54',
          exponent: 0,
          aliases: ['cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se']
        }, {
          denom: 'gfi',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
      base: 'ibc/F2003DFF519010E6BF7A12376268DDE99D9F3855E2A01914FD6D1A1DAE868A54',
      name: 'Gtps.Finance',
      display: 'gfi',
      symbol: 'GFI',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/99236405E75BDAE8DC434CCE9FE8EB183ED9463C92EE25B9840683C3ED6D7A45',
          exponent: 0,
          aliases: ['cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa']
        }, {
          denom: 'ulc',
          exponent: 18
        }],
      type_asset: 'cw20',
      address: 'terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
      base: 'ibc/99236405E75BDAE8DC434CCE9FE8EB183ED9463C92EE25B9840683C3ED6D7A45',
      name: 'Ultimatalioniscoin',
      display: 'ulc',
      symbol: 'ULC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/168133FB1F82D656C539C58967156F8E2DAC1ED6B5B745AEF0523092532430FC',
          exponent: 0,
          aliases: ['cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl']
        }, {
          denom: 'sst',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
      base: 'ibc/168133FB1F82D656C539C58967156F8E2DAC1ED6B5B745AEF0523092532430FC',
      name: 'Sooah Studio Token',
      display: 'sst',
      symbol: 'SST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/61BD3478B971B8285A702C84FF45D5A232547AA6C537DC57E74C67C9F792EA60',
          exponent: 0,
          aliases: ['cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc']
        }, {
          denom: 'atlas',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
      base: 'ibc/61BD3478B971B8285A702C84FF45D5A232547AA6C537DC57E74C67C9F792EA60',
      name: 'Star Atlas (Portal)',
      display: 'atlas',
      symbol: 'ATLAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png',
          theme: {
            primary_color_hex: '#c77a91'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9CEEB91B74E05FC7488207CCD7F04FC25BAA5D4537C3E0D9CED5F263F65A4926',
          exponent: 0,
          aliases: ['cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp']
        }, {
          denom: 'audio',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
      base: 'ibc/9CEEB91B74E05FC7488207CCD7F04FC25BAA5D4537C3E0D9CED5F263F65A4926',
      name: 'Audius (Portal)',
      display: 'audio',
      symbol: 'AUDIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png',
          theme: {
            primary_color_hex: '#7d1dc0'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EBD8619181A260C1E03C68E31CAFBE812B2998543C8320E90050E72200B7A26F',
          exponent: 0,
          aliases: ['cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m']
        }, {
          denom: 'avax',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
      base: 'ibc/EBD8619181A260C1E03C68E31CAFBE812B2998543C8320E90050E72200B7A26F',
      name: 'AVAX (Portal)',
      display: 'avax',
      symbol: 'AVAX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png',
          theme: {
            primary_color_hex: '#e74245'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E652398BED5D7B54B0FD5E5BA14568A80EFD244E28541CFB77701AEACEDD8BBC',
          exponent: 0,
          aliases: ['cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2']
        }, {
          denom: 'bat',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
      base: 'ibc/E652398BED5D7B54B0FD5E5BA14568A80EFD244E28541CFB77701AEACEDD8BBC',
      name: 'Basic Attention Token (Portal)',
      display: 'bat',
      symbol: 'BAT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png',
          theme: {
            primary_color_hex: '#f75108'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/16141312E5875FBBBCE49BEBD89B76E2A365AAD8B8D3C61C7739F8903EE45B55',
          exponent: 0,
          aliases: ['cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd']
        }, {
          denom: 'busdbs',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
      base: 'ibc/16141312E5875FBBBCE49BEBD89B76E2A365AAD8B8D3C61C7739F8903EE45B55',
      name: 'Binance USD (Portal from BSC)',
      display: 'busdbs',
      symbol: 'BUSDbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png',
          theme: {
            primary_color_hex: '#f4bc0f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/881BAB2BD0595187C6C26D44A9E6AFCDFB3F0063E125E1646464A273319CFC15',
          exponent: 0,
          aliases: ['cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95']
        }, {
          denom: 'dai',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
      base: 'ibc/881BAB2BD0595187C6C26D44A9E6AFCDFB3F0063E125E1646464A273319CFC15',
      name: 'DAI (Portal)',
      display: 'dai',
      symbol: 'DAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png',
          theme: {
            primary_color_hex: '#fbb932'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0FCE91B61C2CE7E2B3793F4C06349A4B5EB16EE93CC2202D310D6A6B21FA61AC',
          exponent: 0,
          aliases: ['cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8']
        }, {
          denom: 'maticpo',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
      base: 'ibc/0FCE91B61C2CE7E2B3793F4C06349A4B5EB16EE93CC2202D310D6A6B21FA61AC',
      name: 'MATIC (Portal from Polygon)',
      display: 'maticpo',
      symbol: 'MATICpo',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png',
          theme: {
            primary_color_hex: '#8445e3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/94E4EE4BEFE484F8B8CBF59B04D5DD0D1A3A620BDD212D02B4FE2C8500E2472F',
          exponent: 0,
          aliases: ['cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y']
        }, {
          denom: 'mimet',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
      base: 'ibc/94E4EE4BEFE484F8B8CBF59B04D5DD0D1A3A620BDD212D02B4FE2C8500E2472F',
      name: 'Magic Internet Money',
      display: 'mimet',
      symbol: 'MIMet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png',
          theme: {
            primary_color_hex: '#6f6df0'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/994849FD38793FE7A35474FD5A94F03BB68AE3C6219608507BEB9AF46C223F99',
          exponent: 0,
          aliases: ['cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q']
        }, {
          denom: 'ray',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
      base: 'ibc/994849FD38793FE7A35474FD5A94F03BB68AE3C6219608507BEB9AF46C223F99',
      name: 'Raydium (Portal)',
      display: 'ray',
      symbol: 'RAY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png',
          theme: {
            primary_color_hex: '#4d75f2'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2B0D408D6475CDAF46BEA1600D6EE0123829DF67B45CDFFE5240A877127B8525',
          exponent: 0,
          aliases: ['cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc']
        }, {
          denom: 'sbr',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
      base: 'ibc/2B0D408D6475CDAF46BEA1600D6EE0123829DF67B45CDFFE5240A877127B8525',
      name: 'Saber (Portal)',
      display: 'sbr',
      symbol: 'SBR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png',
          theme: {
            primary_color_hex: '#161527'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F32C7CC714D834B7CBD6394E986BC1D0D097AAA72ADB35B856A1C4B6428122FC',
          exponent: 0,
          aliases: ['cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd']
        }, {
          denom: 'shib',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
      base: 'ibc/F32C7CC714D834B7CBD6394E986BC1D0D097AAA72ADB35B856A1C4B6428122FC',
      name: 'Shiba Inu (Portal)',
      display: 'shib',
      symbol: 'SHIB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png',
          theme: {
            primary_color_hex: '#f99e0e'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0B0FC4D98C56D2EA9AC0EDA8E632A0276D0E829F9AB9E8D640FD58587F069C40',
          exponent: 0,
          aliases: ['cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c']
        }, {
          denom: 'srmso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
      base: 'ibc/0B0FC4D98C56D2EA9AC0EDA8E632A0276D0E829F9AB9E8D640FD58587F069C40',
      name: 'Serum (Portal from Solana)',
      display: 'srmso',
      symbol: 'SRMso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png',
          theme: {
            primary_color_hex: '#40c2d6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/871430C6D8424EE737B03834FE4E786EBED1C0537EBFC4F6FF9689AEB2D70DA8',
          exponent: 0,
          aliases: ['cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w']
        }, {
          denom: 'usdcav',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
      base: 'ibc/871430C6D8424EE737B03834FE4E786EBED1C0537EBFC4F6FF9689AEB2D70DA8',
      name: 'USD Coin (Portal from Avalanche)',
      display: 'usdcav',
      symbol: 'USDCav',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png',
          theme: {
            primary_color_hex: '#2775cb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/1DA4DCA9531A5DDC83EC37607707988CBE1BE0CBEDC37026AED1DD9627814099',
          exponent: 0,
          aliases: ['cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu']
        }, {
          denom: 'usdcbs',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
      base: 'ibc/1DA4DCA9531A5DDC83EC37607707988CBE1BE0CBEDC37026AED1DD9627814099',
      name: 'USD Coin (Portal from BSC)',
      display: 'usdcbs',
      symbol: 'USDCbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png',
          theme: {
            primary_color_hex: '#2675cb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B7FA1B5C55B4C44FCED668EB0FF2CF40553F6E7EA613F92E9753DA63187B62B8',
          exponent: 0,
          aliases: ['cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x']
        }, {
          denom: 'usdcpo',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
      base: 'ibc/B7FA1B5C55B4C44FCED668EB0FF2CF40553F6E7EA613F92E9753DA63187B62B8',
      name: 'USD Coin (Portal from Polygon)',
      display: 'usdcpo',
      symbol: 'USDCpo',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png',
          theme: {
            primary_color_hex: '#2a73cc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/71A11BE4885046D634D7605F27E98D2E90334B27923728A2DAFF7B2B91B930AE',
          exponent: 0,
          aliases: ['cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4']
        }, {
          denom: 'usdcso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
      base: 'ibc/71A11BE4885046D634D7605F27E98D2E90334B27923728A2DAFF7B2B91B930AE',
      name: 'USD Coin (Portal from Solana)',
      display: 'usdcso',
      symbol: 'USDCso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png',
          theme: {
            primary_color_hex: '#2a76cc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EEB2DBC1681D2C30689176F24B7BE1B9A74F2FDB423F7B205D293EDC8E6F12DC',
          exponent: 0,
          aliases: ['cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx']
        }, {
          denom: 'usdtav',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
      base: 'ibc/EEB2DBC1681D2C30689176F24B7BE1B9A74F2FDB423F7B205D293EDC8E6F12DC',
      name: 'Tether USD (Portal from Avalanche)',
      display: 'usdtav',
      symbol: 'USDTav',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png',
          theme: {
            primary_color_hex: '#55ac94'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0CBC8D67ACFDA2AD87D0FA68F58B5C1DED8A0C248924F751813139D883856231',
          exponent: 0,
          aliases: ['cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd']
        }, {
          denom: 'usdtbs',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
      base: 'ibc/0CBC8D67ACFDA2AD87D0FA68F58B5C1DED8A0C248924F751813139D883856231',
      name: 'Tether USD (Portal from BSC)',
      display: 'usdtbs',
      symbol: 'USDTbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png',
          theme: {
            primary_color_hex: '#55ac94'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/8B7F11B200FF278DEF34A32CDBA35CA0D764ACEC7D3D5A86FA91C77384269967',
          exponent: 0,
          aliases: ['cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5']
        }, {
          denom: 'usdtso',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
      base: 'ibc/8B7F11B200FF278DEF34A32CDBA35CA0D764ACEC7D3D5A86FA91C77384269967',
      name: 'Tether USD (Portal from Solana)',
      display: 'usdtso',
      symbol: 'USDTso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png',
          theme: {
            primary_color_hex: '#54ac96'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6A91224C1FF49A6AB239100B2837D650E08A86ECB925517566B39418D4143E0B',
          exponent: 0,
          aliases: ['cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3']
        }, {
          denom: 'gohm',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
      base: 'ibc/6A91224C1FF49A6AB239100B2837D650E08A86ECB925517566B39418D4143E0B',
      name: 'Governance OHM (Portal)',
      display: 'gohm',
      symbol: 'gOHM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png',
          theme: {
            primary_color_hex: '#b3bec1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/30C103C9EFB812DBA491448620818946524B830667FD03939065FCAF6429C658',
          exponent: 0,
          aliases: ['cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y']
        }, {
          denom: 'msol',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
      base: 'ibc/30C103C9EFB812DBA491448620818946524B830667FD03939065FCAF6429C658',
      name: 'Marinade staked SOL (Portal)',
      display: 'msol',
      symbol: 'mSOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png',
          theme: {
            primary_color_hex: '#c8e8e1'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9C2C9E707F5E83852CF83527D9D1D0A879DF44659A9652F02953900FD3D8DBA3',
          exponent: 0,
          aliases: ['cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d']
        }, {
          denom: 'steth',
          exponent: 8
        }],
      type_asset: 'cw20',
      address: 'terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
      base: 'ibc/9C2C9E707F5E83852CF83527D9D1D0A879DF44659A9652F02953900FD3D8DBA3',
      name: 'Lido Staked Ether (Portal)',
      display: 'steth',
      symbol: 'stETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png',
          theme: {
            primary_color_hex: '#04a4fb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/27A69396BDADEB51DA6D4EBD8BE4DDBE9856983860137FA75F66DF71779EFCA4',
          exponent: 0,
          aliases: ['cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc']
        }, {
          denom: 'lct',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
      base: 'ibc/27A69396BDADEB51DA6D4EBD8BE4DDBE9856983860137FA75F66DF71779EFCA4',
      name: 'LCT Token',
      display: 'lct',
      symbol: 'LCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png',
          theme: {
            primary_color_hex: '#2664a3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/443CB3B597011BE47D6FD40580BD6799D5F79C6028A3D500FD9C0A761F1DD21A',
          exponent: 0,
          aliases: ['cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a']
        }, {
          denom: 'batom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
      base: 'ibc/443CB3B597011BE47D6FD40580BD6799D5F79C6028A3D500FD9C0A761F1DD21A',
      name: 'Bonded ATOM',
      display: 'batom',
      symbol: 'bATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4C0C78B284B12F7775E33052CB7E049382B697BC5307B23130CCAE59B8631FDB',
          exponent: 0,
          aliases: ['cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn']
        }, {
          denom: 'webatom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
      base: 'ibc/4C0C78B284B12F7775E33052CB7E049382B697BC5307B23130CCAE59B8631FDB',
      name: 'pStake Bonded ATOM (Wormhole)',
      display: 'webatom',
      symbol: 'webATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6B2B3CA79343D8B1AD16624C5A98B5B769253F7A2FFCD744CFD27D99256D6F00',
          exponent: 0,
          aliases: ['cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn']
        }, {
          denom: 'wcoin',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
      base: 'ibc/6B2B3CA79343D8B1AD16624C5A98B5B769253F7A2FFCD744CFD27D99256D6F00',
      name: 'Willisch Coin',
      display: 'wcoin',
      symbol: 'WCOIN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0097F293119C91584BD57CC62C2BF49FA08B3B99FD650FDD1A0A045E5C4F864E',
          exponent: 0,
          aliases: ['cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy']
        }, {
          denom: 'lctfancard',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
      base: 'ibc/0097F293119C91584BD57CC62C2BF49FA08B3B99FD650FDD1A0A045E5C4F864E',
      name: 'LCT Fancard Token',
      display: 'lctfancard',
      symbol: 'LCTfancard',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png',
          theme: {
            primary_color_hex: '#2968a5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B8981F3670B9FE45FEAC61E6194A147D7A8439804EB171B5C138836E36055E85',
          exponent: 0,
          aliases: ['cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang']
        }, {
          denom: 'kntc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
      base: 'ibc/B8981F3670B9FE45FEAC61E6194A147D7A8439804EB171B5C138836E36055E85',
      name: 'Kinetic Token',
      display: 'kntc',
      symbol: 'KNTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/55A7C9C5D2A182BC061573D994FD135EB5ABCAB59AF599373F9F8C7D7AE6D574',
          exponent: 0,
          aliases: ['cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex']
        }, {
          denom: 'kust',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
      base: 'ibc/55A7C9C5D2A182BC061573D994FD135EB5ABCAB59AF599373F9F8C7D7AE6D574',
      name: 'Kinetic kUST Token',
      display: 'kust',
      symbol: 'kUST',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/A395ABA74112A49F2F4B93CA8C2DC382BE2FC30525E40C6631C370DE8AFA92C0',
          exponent: 0,
          aliases: ['cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv']
        }, {
          denom: 'steak',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
      base: 'ibc/A395ABA74112A49F2F4B93CA8C2DC382BE2FC30525E40C6631C370DE8AFA92C0',
      name: 'Steak Token',
      display: 'steak',
      symbol: 'STEAK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5053AA3CAE1D5BCAA756AFE826C9EF240BDDF52696F8C43EC9992139AEC0AD78',
          exponent: 0,
          aliases: ['cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m']
        }, {
          denom: 'cst',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
      base: 'ibc/5053AA3CAE1D5BCAA756AFE826C9EF240BDDF52696F8C43EC9992139AEC0AD78',
      name: 'CST Token',
      display: 'cst',
      symbol: 'CST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png',
          theme: {
            primary_color_hex: '#5d2616'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/1C6CAC32042DF98DF725E9D8D875B0486D2B2133F23A4D377F812D2A8A2639B6',
          exponent: 0,
          aliases: ['cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam']
        }, {
          denom: 'cstfancard',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
      base: 'ibc/1C6CAC32042DF98DF725E9D8D875B0486D2B2133F23A4D377F812D2A8A2639B6',
      name: 'CST Fancard Token',
      display: 'cstfancard',
      symbol: 'CSTfancard',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png',
          theme: {
            primary_color_hex: '#5d2616'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C2363C0B27817CD40F8B8C44C8EECDDD80EE471BD4E955493942293E177AD970',
          exponent: 0,
          aliases: ['cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj']
        }, {
          denom: 'nwld',
          exponent: 9
        }],
      type_asset: 'cw20',
      address: 'terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
      base: 'ibc/C2363C0B27817CD40F8B8C44C8EECDDD80EE471BD4E955493942293E177AD970',
      name: 'Neworld Labs Develpper Token',
      display: 'nwld',
      symbol: 'NWLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png',
          theme: {
            primary_color_hex: '#046394'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B178E89E0739DBC2199DDCAA3FE1381D495D6A47E5D1CD52938A57CEB5DD267B',
          exponent: 0,
          aliases: ['cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
      base: 'ibc/B178E89E0739DBC2199DDCAA3FE1381D495D6A47E5D1CD52938A57CEB5DD267B',
      name: 'FURY',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png',
          theme: {
            primary_color_hex: '#14045c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5479178A5BBE37705742F53833AEEAE6A13208DC186FB77EE91DB8F0B14FC185',
          exponent: 0,
          aliases: ['cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93']
        }, {
          denom: 'rct',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
      base: 'ibc/5479178A5BBE37705742F53833AEEAE6A13208DC186FB77EE91DB8F0B14FC185',
      name: 'Reactor Token',
      display: 'rct',
      symbol: 'RCT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EEC3BD5A4BFE5F40F406DF71A5F8982CCA53E7C217D5F2F56BDE0332A70265FB',
          exponent: 0,
          aliases: ['cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu']
        }, {
          denom: 'vitc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
      base: 'ibc/EEC3BD5A4BFE5F40F406DF71A5F8982CCA53E7C217D5F2F56BDE0332A70265FB',
      name: 'Vitamin Coin',
      display: 'vitc',
      symbol: 'VITC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png',
          theme: {
            primary_color_hex: '#e3551b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9CF894F79AC1223786903F70BFA5B52D665C6089CAAD7CF3C08902C86D8978B6',
          exponent: 0,
          aliases: ['cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g']
        }, {
          denom: 'sb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
      base: 'ibc/9CF894F79AC1223786903F70BFA5B52D665C6089CAAD7CF3C08902C86D8978B6',
      name: 'DragonSB',
      display: 'sb',
      symbol: 'SB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png',
          theme: {
            primary_color_hex: '#7c241c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2D94FA3CAE73982EA2CA447E6A333091CFB49982DAB3BFDB7EDE3021FB1156BC',
          exponent: 0,
          aliases: ['cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh']
        }, {
          denom: 'toad',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
      base: 'ibc/2D94FA3CAE73982EA2CA447E6A333091CFB49982DAB3BFDB7EDE3021FB1156BC',
      name: 'RESToad Token',
      display: 'toad',
      symbol: 'TOAD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3DC55652999B463ABADBA638081DEDA5721A2426D661057E665F5C0888284FE7',
          exponent: 0,
          aliases: ['cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd']
        }, {
          denom: 'orionastro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
      base: 'ibc/3DC55652999B463ABADBA638081DEDA5721A2426D661057E665F5C0888284FE7',
      name: 'Orion Money xASTRO Derivative Token',
      display: 'orionastro',
      symbol: 'orionASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png',
          theme: {
            primary_color_hex: '#1d90d6'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E875E6C93EF75084AEDA94C221ED090FC70716100D38DAFA5770BCBF66D75F13',
          exponent: 0,
          aliases: ['cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp']
        }, {
          denom: 'retro',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
      base: 'ibc/E875E6C93EF75084AEDA94C221ED090FC70716100D38DAFA5770BCBF66D75F13',
      name: 'Retrograde',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png',
          theme: {
            primary_color_hex: '#eb4024'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F8C6CF7CD7D8BA4DFF716C5199210B5AD26B17C11BF60818B3A2C350680EA2EB',
          exponent: 0,
          aliases: ['cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d']
        }, {
          denom: 'tnd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
      base: 'ibc/F8C6CF7CD7D8BA4DFF716C5199210B5AD26B17C11BF60818B3A2C350680EA2EB',
      name: 'TerrnadoCash',
      display: 'tnd',
      symbol: 'TND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png',
          theme: {
            primary_color_hex: '#1c53fb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DB6EBA710CCDF76DFDAEA6DED892BBD37E5484878E45616BB2A5A1476E8276EC',
          exponent: 0,
          aliases: ['cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g']
        }, {
          denom: 'stnd',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
      base: 'ibc/DB6EBA710CCDF76DFDAEA6DED892BBD37E5484878E45616BB2A5A1476E8276EC',
      name: 'TerrnadoCash',
      display: 'stnd',
      symbol: 'sTND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F3B3CE572C278BDCCB133F4781AE731D1624BC00A276EE474B7EF688862012AC',
          exponent: 0,
          aliases: ['cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe']
        }, {
          denom: 'nwt',
          exponent: 9
        }],
      type_asset: 'cw20',
      address: 'terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
      base: 'ibc/F3B3CE572C278BDCCB133F4781AE731D1624BC00A276EE474B7EF688862012AC',
      name: 'Neworld Token',
      display: 'nwt',
      symbol: 'NWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png',
          theme: {
            primary_color_hex: '#aeb8f5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D1DE996FF7D368718C82C46131674A644C59AEC14DD48F32F4E19DF8C6250560',
          exponent: 0,
          aliases: ['cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn']
        }, {
          denom: 'neb',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
      base: 'ibc/D1DE996FF7D368718C82C46131674A644C59AEC14DD48F32F4E19DF8C6250560',
      name: 'Nebula Token',
      display: 'neb',
      symbol: 'NEB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png',
          theme: {
            primary_color_hex: '#8b90ad'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4CFA3C9CD0EB435FEFC360BF63432A620D35C1AA0991D58E57B29ED85AC3D21A',
          exponent: 0,
          aliases: ['cw20:terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00']
        }, {
          denom: 'trit',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00',
      base: 'ibc/4CFA3C9CD0EB435FEFC360BF63432A620D35C1AA0991D58E57B29ED85AC3D21A',
      name: 'Terra Tritium Token',
      display: 'trit',
      symbol: 'TRIT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/trit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/trit.png',
          theme: {
            primary_color_hex: '#24ab9b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Rakoff Token is the Meme Token for Terra Classic',
      type_asset: 'cw20',
      address: 'terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
      denom_units: [{
          denom: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
          exponent: 0,
          aliases: ['cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2']
        }, {
          denom: 'rakoff',
          exponent: 6
        }],
      base: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
      name: 'Rakoff Token',
      display: 'rakoff',
      symbol: 'RAKOFF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png',
          theme: {
            primary_color_hex: '#191717'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Tadpole Frogztrik Token meme',
      type_asset: 'cw20',
      address: 'terra19gzvkw5hft3ulp8n6ws3p9yradhc802axqal59lzxau6rqxktj9q0dwf9c',
      display: 'tadf',
      denom_units: [{
          denom: 'ibc/54D497B75FAD27A74BD7B1C365E5BC1063E88787747D6408E3F12638D265B962',
          exponent: 0,
          aliases: ['cw20:terra19gzvkw5hft3ulp8n6ws3p9yradhc802axqal59lzxau6rqxktj9q0dwf9c']
        }, {
          denom: 'tadf',
          exponent: 6
        }],
      base: 'ibc/54D497B75FAD27A74BD7B1C365E5BC1063E88787747D6408E3F12638D265B962',
      name: 'Tadpole Frogztrik Token',
      symbol: 'TADF',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tadf.png',
          theme: {
            primary_color_hex: '#e9f9f2'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tadf.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19gzvkw5hft3ulp8n6ws3p9yradhc802axqal59lzxau6rqxktj9q0dwf9c',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Frogztrik NFT Token',
      type_asset: 'cw20',
      address: 'terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9',
      display: 'frog',
      denom_units: [{
          denom: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
          exponent: 0,
          aliases: ['cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9']
        }, {
          denom: 'frog',
          exponent: 6
        }],
      base: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
      name: 'Frogztrik NFT Token',
      symbol: 'FROG',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png',
          theme: {
            primary_color_hex: '#182615'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9',
            chain_name: 'terra'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/8935E9B60645CD61DC925E7C71956DC909D4548262103D1AB75E2A5306AC84C1',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/8935E9B60645CD61DC925E7C71956DC909D4548262103D1AB75E2A5306AC84C1',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primary_color_hex: '#4056e9'
          }
        }],
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi'
      }
    },
    {
      description: 'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [{
          denom: 'ibc/9F88138FC1EC853341FD0010C34C552726E219F18296019E82BF58841127E630',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/9F88138FC1EC853341FD0010C34C552726E219F18296019E82BF58841127E630',
      name: 'dinheiro',
      display: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png',
          theme: {
            primary_color_hex: '#244c9c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/2C410B8729A71601C6A3BA0CB7E433A072FDE255E312CE12D4AC18127679BBEB',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/2C410B8729A71601C6A3BA0CB7E433A072FDE255E312CE12D4AC18127679BBEB',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png',
          theme: {
            primary_color_hex: '#1d5c65'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/C025F721CC19CA353AD9EC405716358965A1C3D12739A840CF5FD787E712B86F',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/C025F721CC19CA353AD9EC405716358965A1C3D12739A840CF5FD787E712B86F',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Alem is a local currency for the region of Alentejo in Portugal, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/A89C92AE240546D1B5DBDA7500075A1B9CDF22B5568014340ED1A3621ACAA066',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/A89C92AE240546D1B5DBDA7500075A1B9CDF22B5568014340ED1A3621ACAA066',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png',
          theme: {
            primary_color_hex: '#d1b295'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/05238E98A143496C8AF2B6067BABC84503909ECE9E45FBCBAC2CBA5C889FD82A',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/05238E98A143496C8AF2B6067BABC84503909ECE9E45FBCBAC2CBA5C889FD82A',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      coingecko_id: 'eris-amplified-luna',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/4154B28D69A2B15C5DE06E861F5BACCB78C4B2180CEBECDAC74968FB402FB4BC',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/4154B28D69A2B15C5DE06E861F5BACCB78C4B2180CEBECDAC74968FB402FB4BC',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingecko_id: 'lion-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
          theme: {
            primary_color_hex: '#f3f313'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/4D881B544ECE557A62A239EE827F8BFA3B76A1977F2FD5F4BDF68CBC28FDE760',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/4D881B544ECE557A62A239EE827F8BFA3B76A1977F2FD5F4BDF68CBC28FDE760',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png',
          theme: {
            primary_color_hex: '#21b6b3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/84B8C4F1FE15019DBD937B5670905B6280BB7C0D031E9F4D9F50E33386D3CAE6',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/84B8C4F1FE15019DBD937B5670905B6280BB7C0D031E9F4D9F50E33386D3CAE6',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
          theme: {
            primary_color_hex: '#f3d343'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/E224A26BBDD3FBBB461CBFC40EDC74BAA9606C667371F428F147A8D6C98C28D6',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/E224A26BBDD3FBBB461CBFC40EDC74BAA9606C667371F428F147A8D6C98C28D6',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/A0A60E6C75D13599000EDC7142D6E0744FF4CF6B14E2F284B6CFB732833B4AB0',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/A0A60E6C75D13599000EDC7142D6E0744FF4CF6B14E2F284B6CFB732833B4AB0',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png',
          theme: {
            primary_color_hex: '#efe8e9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/6F2A0FB30BF07141817D1A646ABB12551E41C16285D694737DBB2C236D5752B3',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/6F2A0FB30BF07141817D1A646ABB12551E41C16285D694737DBB2C236D5752B3',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png',
          theme: {
            primary_color_hex: '#e3e2e5'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
      name: 'BackBone Labs Liquid Staked LUNA',
      display: 'bLUNA',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png',
          theme: {
            primary_color_hex: '#070707'
          }
        }],
      coingecko_id: 'backbone-labs-staked-luna',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [{
          denom: 'ibc/106B438A78C581C5291E114B21588C41F98532E04D5369CFEE5825D95D465278',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/106B438A78C581C5291E114B21588C41F98532E04D5369CFEE5825D95D465278',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
          theme: {
            primary_color_hex: '#f3ebdb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/8AAF2114ECBB422E379E5E82D384A2295E18D0B544F31EF4FA0F8A8DF3941F71',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/8AAF2114ECBB422E379E5E82D384A2295E18D0B544F31EF4FA0F8A8DF3941F71',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png',
          theme: {
            primary_color_hex: '#f1cc79'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/AA5DF720C58BECFD406EF59DDF8E3AE3ABC5E8D614EDF9B95A583373518667A7',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/AA5DF720C58BECFD406EF59DDF8E3AE3ABC5E8D614EDF9B95A583373518667A7',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png',
          theme: {
            primary_color_hex: '#c0943f'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/935DA0747A268FD7AFD1218BFB2907F052EA1E0FF89CB39DBA70A0BB15209ECA',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/935DA0747A268FD7AFD1218BFB2907F052EA1E0FF89CB39DBA70A0BB15209ECA',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png',
          theme: {
            primary_color_hex: '#dd6a30'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/F3385E19FBB1EF089A5A5EE68C9BB8B4E78DD0439B9AE9235BB8E114B9717D36',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/F3385E19FBB1EF089A5A5EE68C9BB8B4E78DD0439B9AE9235BB8E114B9717D36',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png',
          theme: {
            primary_color_hex: '#0da8c9'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/54544F35274CA3FD8B094B883A6E85C494A214E5D09257B93994501D86E63582',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/54544F35274CA3FD8B094B883A6E85C494A214E5D09257B93994501D86E63582',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png',
          theme: {
            primary_color_hex: '#0ba7ce'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/BC2F9CB082324B2389CAFB3521C3910DE06E22949B7CDA68B69BB6E2C98C4342',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/BC2F9CB082324B2389CAFB3521C3910DE06E22949B7CDA68B69BB6E2C98C4342',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png',
          theme: {
            primary_color_hex: '#f8d034'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/B08012220F9A7DFA13220E1088E9E7A41345FC1235EE2A0C1094E7AF193DA16A',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/B08012220F9A7DFA13220E1088E9E7A41345FC1235EE2A0C1094E7AF193DA16A',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png',
          theme: {
            primary_color_hex: '#d19a84'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/C95259E4DA3713C1D4816F47202C4697E6CEAB5E3B20AC5EA424D7915558C43A',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/C95259E4DA3713C1D4816F47202C4697E6CEAB5E3B20AC5EA424D7915558C43A',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png',
          theme: {
            primary_color_hex: '#ae987b'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/F1BFD5030AD68FFE62D323300CDF1B9EE49A5938EA31FEE03BC970A4A3F97871',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/F1BFD5030AD68FFE62D323300CDF1B9EE49A5938EA31FEE03BC970A4A3F97871',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png',
          theme: {
            primary_color_hex: '#040607'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/6ED49EE8E1E5A73E7B916C8297C1ECB92EDE497466851AAEFCB95787631FC3F9',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/6ED49EE8E1E5A73E7B916C8297C1ECB92EDE497466851AAEFCB95787631FC3F9',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png',
          theme: {
            primary_color_hex: '#232333'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/C158F1510B7C5FA14F728752F1518219959BF6A7025DAC66E12FCE10A27EA8BE',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/C158F1510B7C5FA14F728752F1518219959BF6A7025DAC66E12FCE10A27EA8BE',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png',
          theme: {
            primary_color_hex: '#0c0704'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/836A50DCDA13CAECF9D2255CCF01951367FFB920D787255ACA909CE0F95CB632',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/836A50DCDA13CAECF9D2255CCF01951367FFB920D787255ACA909CE0F95CB632',
      name: 'LADS',
      display: 'lads',
      symbol: 'LADS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png',
          theme: {
            primary_color_hex: '#040507'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/A155934363013A2C2B2CFD1FBF75329DDB5F4AD3062CC976398DFDEF8E77FE9D',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/A155934363013A2C2B2CFD1FBF75329DDB5F4AD3062CC976398DFDEF8E77FE9D',
      name: 'CLON',
      display: 'CLON',
      symbol: 'CLON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png',
          theme: {
            primary_color_hex: '#c7cbcf'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2'
          }
        }]
    }
  ]
};
export default assets;
    