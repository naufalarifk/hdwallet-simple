import viem from "viem";

import { generateMnemonic, HDKey } from "viem/accounts";
import { deriveToSolWallet } from "./src/actions/sol_to_wallet";
import { wordlist } from "@scure/bip39/wordlists/english";
import { mnemonicToSeedSync } from "@scure/bip39";
import { deriveToEthWallet } from "./src/actions/eth_to_wallet";
import { deriveToBtcWallet } from "./src/actions/btc_to_wallet";

const mnemonic = generateMnemonic(wordlist);
const seed = mnemonicToSeedSync(mnemonic);
const masterKey = HDKey.fromMasterSeed(seed);

const sol = deriveToSolWallet(masterKey);
const eth = deriveToEthWallet(masterKey);
const btc = deriveToBtcWallet(masterKey);

console.log("BTC:", btc);
console.log("SOL:", sol);
console.log("ETH:", eth);
