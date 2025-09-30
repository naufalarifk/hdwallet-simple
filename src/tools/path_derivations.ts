import { HDKey } from "@scure/bip32";

function getSolanaDerivationPath(key: HDKey): string {
  return `m/44'/501'/${key.index}'/0'`;
}

function getEthereumDerivationPath(key: HDKey): string {
  return `m/44'/60'/${key.index}'/0/0`;
}

function getBitcoinDerivationPath(key: HDKey): string {
  return `m/44'/0'/${key.index}'/0/0`;
}

export {
  getSolanaDerivationPath,
  getEthereumDerivationPath,
  getBitcoinDerivationPath,
};
