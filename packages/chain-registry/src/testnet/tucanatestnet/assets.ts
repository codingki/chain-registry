import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'tucanatestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Tucana',
      denom_units: [{
          denom: 'atuc',
          exponent: 0
        }, {
          denom: 'tuc',
          exponent: 18
        }],
      base: 'atuc',
      name: 'Tucana',
      display: 'tuc',
      symbol: 'TUC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/tucanatestnet/images/tucana.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/tucanatestnet/images/tucana.png'
        }]
    }]
};
export default info;