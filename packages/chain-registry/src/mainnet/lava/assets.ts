import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lava',
  assets: [{
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      extended_description: 'Lava Network is an innovative blockchain platform that aims to unlock the full potential of decentralized applications by providing a modular data access network. This platform allows developers to easily connect to multiple blockchains through fast and reliable RPC (Remote Procedure Call) services. By leveraging a peer-to-peer network of node operators, Lava ensures high performance and low latency for data requests across over 30 blockchain ecosystems. The native token, LAVA, is used for securing the network, rewarding node operators, and governance. Lava Network\'s goal is to create a seamless and efficient data infrastructure that supports the scalability and flexibility needs of the Web3 ecosystem.',
      denom_units: [{
          denom: 'ulava',
          exponent: 0
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ulava',
      name: 'Lava',
      coingecko_id: 'lava-network',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
          theme: {
            primary_color_hex: '#6f043e'
          }
        }],
      keywords: [
        'modular',
        'data',
        'data access',
        'rpc',
        'staking',
        'dual staking',
        'indexing',
        'incentivized public rpc'
      ],
      socials: {
        website: 'https://lavanet.xyz',
        twitter: 'https://twitter.com/lavanetxyz'
      }
    }]
};
export default info;