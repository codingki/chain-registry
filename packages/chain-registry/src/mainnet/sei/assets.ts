import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sei',
  assets: [
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      extended_description: 'Sei is a layer-1 blockchain designed specifically for trading applications, offering a high-performance environment for decentralized exchanges (DEXs). It focuses on providing high throughput, low latency, and efficient order execution. Sei\'s architecture includes features like parallel processing and a unique consensus mechanism to achieve fast and reliable transaction processing. The native token, SEI, is used for transaction fees, staking, and governance within the network. Sei aims to create an optimal infrastructure for trading, addressing the needs of traders and developers in the DeFi space.',
      denom_units: [{
          denom: 'usei',
          exponent: 0
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'usei',
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
      }
    },
    {
      description: 'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [{
          denom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
          exponent: 0
        }, {
          denom: 'oin',
          exponent: 6
        }],
      address: 'sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w',
      base: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png',
          theme: {
            primary_color_hex: '#6cdbac'
          }
        }]
    },
    {
      description: 'ERIS liquid staked SEI',
      denom_units: [{
          denom: 'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
          exponent: 0
        }, {
          denom: 'ampSEI',
          exponent: 6
        }],
      base: 'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
      name: 'ERIS Amplified SEI',
      display: 'ampSEI',
      symbol: 'ampSEI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
        }]
    },
    {
      description: 'Popeye the Seilor',
      denom_units: [{
          denom: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
          exponent: 0
        }, {
          denom: 'popeye',
          exponent: 6
        }],
      base: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
      name: 'Popeye',
      display: 'popeye',
      symbol: 'POPEYE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png',
          theme: {
            primary_color_hex: '#04040a'
          }
        }]
    },
    {
      description: 'A wise dog and a marshal arts master',
      denom_units: [{
          denom: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
          exponent: 0
        }, {
          denom: 'sensei',
          exponent: 6
        }],
      base: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
      name: 'Sensei Dog',
      display: 'sensei',
      symbol: 'SENSEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png',
          theme: {
            primary_color_hex: '#d4d0c7'
          }
        }]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [{
          denom: 'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-782',
            path: 'transfer/channel-782/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primary_color_hex: '#edd5ee'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
          exponent: 0
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
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
        }]
    },
    {
      description: 'The Original Meme Coin of SEI Network',
      type_asset: 'cw20',
      address: 'sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
      denom_units: [{
          denom: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
          exponent: 0
        }, {
          denom: 'SEIYAN',
          exponent: 6
        }],
      base: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
      name: 'SEIYAN',
      display: 'SEIYAN',
      symbol: 'SEIYAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png',
          theme: {
            primary_color_hex: '#db1f22'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/1FF96B82FDE4B0E38FA0A8EC24A83E1EAC2615F338468A47473BAD3B45E066D2',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1FF96B82FDE4B0E38FA0A8EC24A83E1EAC2615F338468A47473BAD3B45E066D2',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channel_id: 'channel-2016'
          },
          chain: {
            channel_id: 'channel-66',
            path: 'transfer/channel-177/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      images: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      }
    }
  ]
};
export default info;