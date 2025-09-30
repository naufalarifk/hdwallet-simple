import { HDKey } from "@scure/bip32";
import { getSolanaDerivationPath } from "../tools/path_derivations";
import { Keypair, PublicKey } from "@solana/web3.js";

function deriveToSolWallet(masterKey: HDKey) {
  const derivation = getSolanaDerivationPath(masterKey);
  const { privateKey } = masterKey.derive(derivation);
  const keypair = Keypair.fromSeed(privateKey!);
  const address = keypair.publicKey.toBase58();
  const key = new PublicKey(address);
  const onCurve = PublicKey.isOnCurve(key.toBytes());
  if (!onCurve) {
    throw new Error("Derived public key is not on the ed25519 curve");
  }
  return address;
}

export { deriveToSolWallet };
