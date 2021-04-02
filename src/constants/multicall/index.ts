import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e'
}

const MULTICALL_TEST = {
  1337: '0x509c6aDd011bf9089e6bFD64fC01cc45651d8F91',
  // 13: '0xe573BCA813c741229ffB2488F7856C6cAa841041' //halongbay
  13: '0x3d1B3993f7ecDC2Dd0BA87C4Bb0EcbdF0e11E055' //rococo
}

export { MULTICALL_ABI, MULTICALL_NETWORKS, MULTICALL_TEST }
