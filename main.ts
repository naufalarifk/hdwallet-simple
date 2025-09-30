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

deriveToSolWallet(masterKey);
deriveToEthWallet(masterKey);
deriveToBtcWallet(masterKey);

console.log("BTC:", deriveToBtcWallet(masterKey));
console.log("SOL:", deriveToSolWallet(masterKey));
console.log("ETH:", deriveToEthWallet(masterKey));
