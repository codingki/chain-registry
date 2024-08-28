import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lorenzo',
  assets: [{
      description: 'Native staking token of Lorenzo: LRZ (alrz)',
      denom_units: [{
          denom: 'alrz',
          exponent: 0
        }, {
          denom: 'LRZ',
          exponent: 18
        }],
      base: 'alrz',
      name: 'LRZ',
      display: 'LRZ',
      symbol: 'LRZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg',
          theme: {
            primary_color_hex: '#133348'
          }
        }],
      socials: {
        website: 'https://www.lorenzo-protocol.xyz/',
        twitter: 'https://x.com/LorenzoProtocol'
      }
    }, {
      description: 'Native EVM token of Lorenzo',
      denom_units: [{
          denom: 'stBTC',
          exponent: 0
        }, {
          denom: 'display_stBTC',
          exponent: 18
        }],
      base: 'stBTC',
      name: 'Lorenzo stBTC',
      display: 'display_stBTC',
      symbol: 'stBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg',
          theme: {
            primary_color_hex: '#133348'
          }
        }]
    }]
};
export default info;