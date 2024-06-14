import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'movement',
  assets: [{
      description: 'The native token of Movement',
      denom_units: [{
          denom: 'umove',
          exponent: 0
        }, {
          denom: 'move',
          exponent: 6
        }],
      base: 'umove',
      display: 'move',
      name: 'Movement',
      symbol: 'MOVE',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/namada/images/move.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://movementlabs.xyz/',
        twitter: 'https://x.com/movementlabsxyz'
      }
    }]
};
export default info;