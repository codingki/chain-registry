import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'upticktestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.uptickproject.com/',
  prettyName: 'Uptick',
  chainType: 'cosmos',
  chainId: 'uptick_7000-2',
  bech32Prefix: 'uptick',
  daemonName: 'uptickd',
  nodeHome: '$HOME/.uptickd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'auptick',
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/UptickNetwork/uptick',
    recommendedVersion: 'v0.2.6',
    compatibleVersions: ['v0.2.6'],
    cosmosSdkVersion: '0.46.5',
    consensus: {
      type: 'tendermint',
      version: '0.34.23'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/UptickNetwork/uptick-testnet/main/uptick_7000-2/genesis.json'
    },
    versions: [{
        name: 'v0.2.6',
        recommendedVersion: 'v0.2.6',
        compatibleVersions: ['v0.2.6'],
        cosmosSdkVersion: '0.46.5',
        consensus: {
          type: 'tendermint',
          version: '0.34.23'
        },
        binaries: {
          "linux/amd64": 'https://github.com/UptickNetwork/uptick/releases/download/v0.2.6/uptick-linux-amd64-v0.2.6.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46.5'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.46.5'
    }
  },
  apis: {
    rpc: [{
        address: 'https://uptick-7000-2-rpc.staketab.org:443',
        provider: 'Staketab'
      }],
    rest: [{
        address: 'https://uptick-7000-2-rest.staketab.org',
        provider: 'Staketab'
      }],
    grpc: [{
        address: 'services.staketab.com:9004',
        provider: 'Staketab'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.testnet.uptick.network/uptick-network-testnet',
      txPage: 'https://explorer.testnet.uptick.network/uptick-network-testnet/tx/${txHash}'
    }, {
      kind: 'Nodes.Guru',
      url: 'https://uptick.explorers.guru/',
      txPage: 'https://uptick.explorers.guru/transaction/${txHash}'
    }]
};
export default info;