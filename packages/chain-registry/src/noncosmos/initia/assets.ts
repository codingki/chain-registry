import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'initia',
  assets: [{
      description: 'The native token of Initia',
      denom_units: [{
          denom: 'uinit',
          exponent: 0
        }, {
          denom: 'INIT',
          exponent: 6
        }],
      base: 'uinit',
      display: 'INIT',
      name: 'Initia',
      symbol: 'INIT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/init.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/init.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://initia.xyz/',
        twitter: 'https://twitter.com/initiaFDN'
      }
    }]
};
export default info;