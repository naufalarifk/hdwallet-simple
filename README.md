# HDWallet Simple

A TypeScript project for simple hierarchical deterministic (HD) wallet operations supporting Bitcoin, Ethereum, and Solana. Built with modern libraries for secure key management and blockchain interactions.

## Features

- Bitcoin, Ethereum, and Solana wallet derivation
- Transaction signing and address generation
- Uses industry-standard libraries:
  - [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)
  - [ecpair](https://github.com/bitcoinjs/ecpair)
  - [ethers](https://github.com/ethers-io/ethers.js/)
  - [@solana/web3.js](https://github.com/solana-labs/solana-web3.js)
  - [tiny-secp256k1](https://github.com/bitcoinjs/tiny-secp256k1)
  - [viem](https://github.com/wagmi-dev/viem)

## Project Structure

```
bun.lock
main.ts
package.json
src/
  actions/
    btc_to_wallet.ts
    eth_to_wallet.ts
    sol_to_wallet.ts
  tools/
    path_derivations.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (recommended v18+)
- [Bun](https://bun.sh/) (for bun.lock)

### Installation

```bash
bun install
```

### Usage

Run the main entry point:

```bash
bun run main.ts
```

## Scripts

- `main.ts`: Main entry for wallet operations
- `src/actions/`: Blockchain-specific wallet actions
- `src/tools/path_derivations.ts`: HD path utilities

## License

MIT

## Author

[naufalarifk](https://github.com/naufalarifk)
