import { HDKey } from "@scure/bip32";
import { getBitcoinDerivationPath } from "../tools/path_derivations";

import * as bitcoin from "bitcoinjs-lib";
import * as ecPair from "ecpair";
import * as ecc from "tiny-secp256k1";

function deriveToBtcWallet(masterKey: HDKey) {
  const derivation = getBitcoinDerivationPath(masterKey);
  const { privateKey } = masterKey.derive(derivation);
  const ECPair = ecPair.ECPairFactory(ecc);
  const keyPair = ECPair.fromPrivateKey(Buffer.from(privateKey!));
  const publicKeyBuffer = Buffer.from(keyPair.publicKey);
  const onCurve = ecc.isPoint(publicKeyBuffer);
  if (!onCurve) {
    throw new Error("Derived public key is not on the secp256k1 curve");
  }
  const { address } = bitcoin.payments.p2wpkh({
    pubkey: publicKeyBuffer,
    network: bitcoin.networks.bitcoin,
  });
  return address;
}

export { deriveToBtcWallet };
