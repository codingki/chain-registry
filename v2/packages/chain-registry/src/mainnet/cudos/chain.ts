import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cudos',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Cudos',
  chainType: 'cosmos',
  chainId: 'cudos-1',
  bech32Prefix: 'cudos',
  daemonName: 'cudos-noded',
  website: 'https://www.cudos.org/',
  nodeHome: '$HOME/cudos-data',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'acudos',
        lowGasPrice: 5000000000000,
        averageGasPrice: 10000000000000,
        highGasPrice: 20000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'acudos'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/CudoVentures/cudos-node',
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.0.1', 'v1.1.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/CudoVentures/cudos-builders/v1.0.0/docker/config/genesis.mainnet.json'
    },
    versions: [{
        name: 'v1.1.0',
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.0.1', 'v1.1.0']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://mainnet-full-node-01.hosts.cudos.org:26657',
        provider: 'cudo'
      },
      {
        address: 'https://mainnet-full-node-02.hosts.cudos.org:36657',
        provider: 'cudo'
      },
      {
        address: 'https://cudos-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cudos-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/cudos',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://cudos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'http://mainnet-full-node-01.hosts.cudos.org:1317',
        provider: 'cudo'
      },
      {
        address: 'https://mainnet-full-node-02.hosts.cudos.org:31317',
        provider: 'cudo'
      },
      {
        address: 'https://cudos-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cudos-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.lavenderfive.com:443/cudos',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://cudos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'mainnet-full-node-01.hosts.cudos.org:9090',
        provider: 'cudo'
      },
      {
        address: 'cudos-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'cudos.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'cudos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.cudos.org/',
      txPage: 'https://explorer.cudos.org/transactions/${txHash}',
      accountPage: 'https://explorer.cudos.org/accounts/${accountAddress}'
    },
    {
      kind: 'cudos-dashboard',
      url: 'https://dashboard.cudos.org/',
      txPage: 'https://explorer.cudos.org/transactions/${txHash}',
      accountPage: 'https://explorer.cudos.org/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/cudos',
      txPage: 'https://www.mintscan.io/cudos/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/cudos/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cudos',
      txPage: 'https://atomscan.com/cudos/transactions/${txHash}',
      accountPage: 'https://atomscan.com/cudos/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cudos',
      txPage: 'https://ezstaking.app/cudos/txs/${txHash}',
      accountPage: 'https://ezstaking.app/cudos/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg',
      theme: {
        primaryColorHex: '#5d95ec'
      }
    }]
};
export default info;