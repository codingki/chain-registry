import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mande',
  assets: [{
      description: 'The native token of Mande Network.',
      extended_description: 'Credibility Hub for Web3',
      denom_units: [{
          denom: 'amand',
          exponent: 0
        }, {
          denom: 'mand',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'amand',
      name: 'Mande Network',
      display: 'mand',
      symbol: 'MAND',
      coingecko_id: 'mande-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg',
          theme: {
            primary_color_hex: '#274cbf'
          }
        }],
      socials: {
        website: 'https://mande.network/',
        twitter: 'https://twitter.com/MandeNetwork'
      },
      keywords: ['credibility', 'web3'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
      }
    }]
};
export default info;