import { HDKey } from "@scure/bip32";

function getDerivationPath(key: HDKey, coinType: string): string {
  switch (coinType) {
    case "solana":
      return `m/44'/501'/${key.index}'/0'`;
    case "ethereum":
      return `m/44'/60'/${key.index}'/0/0'`;
    case "bitcoin":
      return `m/44'/0'/${key.index}'/0/0'`;
    default:
      throw new Error(`Unsupported coin type: ${coinType}`);
  }
}

export { getDerivationPath };
