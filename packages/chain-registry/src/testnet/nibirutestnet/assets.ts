import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nibirutestnet',
  assets: [
    {
      description: 'The native token of Nibiru network',
      extended_description: 'Nibiru hosts a variety of ecosystem partners in a wide variety of consumer sectors. From RWAs (Coded Estate) to DeFi (Constella, NOM) to Gaming (Blockchain Game Alliance, IntoTheVerse), Nibiru is advancing multiple emerging blockchain narratives that will onboard the next billion users.',
      socials: {
        website: 'https://nibiru.fi',
        twitter: 'https://twitter.com/nibiruchain'
      },
      denom_units: [{
          denom: 'unibi',
          exponent: 0
        }, {
          denom: 'nibi',
          exponent: 6
        }],
      base: 'unibi',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primary_color_hex: '#14c0ce'
          }
        }]
    },
    {
      description: 'uoprek',
      denom_units: [{
          denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
          exponent: 0
        }],
      base: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      name: 'uoprek',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK'
    },
    {
      description: 'utestate',
      denom_units: [{
          denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
          exponent: 0
        }],
      base: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      name: 'utestate',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE'
    },
    {
      description: 'npp',
      denom_units: [{
          denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
          exponent: 0
        }],
      base: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      name: 'npp',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP'
    },
    {
      description: 'Ether is the native fee token of the Ethereum network.',
      denom_units: [
        {
          denom: 'wei',
          exponent: 0
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ether']
        }
      ],
      base: 'wei',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      coingecko_id: 'ethereum',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    }
  ]
};
export default info;