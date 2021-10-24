import {
  log,
  table
} from 'console'

import { ethers, BigNumber, providers } from 'ethers'

let network = process.env.NETWORK || process.env.DEFAULT_NETWORK || 'aox'

log(`Backend, Baby!!!`)

