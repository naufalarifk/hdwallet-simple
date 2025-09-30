import { HDKey } from "@scure/bip32";
import { getDerivationPath } from "../tools/path_derivations";
import { ethers } from "ethers";

function deriveToEthWallet(masterKey: HDKey) {
  const derivation = getDerivationPath(masterKey, "ethereum");
  const { privateKey } = masterKey.derive(derivation);
  const privateKeyHex = Buffer.from(privateKey!).toString("hex");
  const { address } = new ethers.Wallet(privateKeyHex);
  const onCurve = ethers.isAddress(address);
  if (!onCurve) {
    throw new Error("Derived public key is not on the secp256k1 curve");
  }
  return address;
}

export { deriveToEthWallet };
