import { Base64URLString, NamedAlgo } from '../types/index';
import { parseCryptoKey } from './parse-crypto-key';
import { getAlgoParams } from './get-algo-params';
import { subtle } from 'node:crypto'
import {
  SHA256,
  toBase64URL,
  parseBase64URL,
  concatenateBuffers,
} from '../utils/index';

type VerifyParams = {
  algorithm: NamedAlgo;
  publicKey: Base64URLString;
  authenticatorData: Base64URLString;
  clientData: Base64URLString;
  signature: Base64URLString;
  verbose?: boolean; // Enables debug logs containing sensitive data like crypto keys
};

function convertASN1toRaw(signatureBuffer: ArrayBuffer) {
  // Convert signature from ASN.1 sequence to "raw" format
  const signature = new Uint8Array(signatureBuffer);
  const rStart = signature[4] === 0 ? 5 : 4;
  const rEnd = rStart + 32;
  const sStart = signature[rEnd + 2] === 0 ? rEnd + 3 : rEnd + 2;
  const r = signature.slice(rStart, rEnd);
  const s = signature.slice(sStart);
  return new Uint8Array([...r, ...s]);
}

// https://w3c.github.io/webauthn/#sctn-verifying-assertion
// https://w3c.github.io/webauthn/#sctn-signature-attestation-types
/* Emphasis mine:

6.5.6. Signature Formats for Packed Attestation, FIDO U2F Attestation, and **Assertion Signatures**

[...] For COSEAlgorithmIdentifier -7 (ES256) [...] the sig value MUST be encoded as an ASN.1 [...]
[...] For COSEAlgorithmIdentifier -257 (RS256) [...] The signature is not ASN.1 wrapped.
[...] For COSEAlgorithmIdentifier -37 (PS256) [...] The signature is not ASN.1 wrapped.
*/
// see also https://gist.github.com/philholden/50120652bfe0498958fd5926694ba354
export async function verifySignature({
  algorithm,
  publicKey,
  authenticatorData,
  clientData,
  signature,
  verbose,
}: VerifyParams): Promise<boolean> {
  const algoParams = getAlgoParams(algorithm);
  const cryptoKey = await parseCryptoKey(algoParams, publicKey);

  if (verbose) {
    console.debug(cryptoKey);
  }

  const clientHash = await SHA256(parseBase64URL(clientData));

  // during "login", the authenticatorData is exactly 37 bytes
  const comboBuffer = concatenateBuffers(
    parseBase64URL(authenticatorData),
    clientHash
  );

  if (verbose) {
    console.debug('Crypto Algo: ' + JSON.stringify(algoParams));
    console.debug('Public key: ' + publicKey);
    console.debug('Data: ' + toBase64URL(comboBuffer));
    console.debug('Signature: ' + signature);
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/verify
  let signatureBuffer = parseBase64URL(signature);
  if (algorithm == 'ES256') signatureBuffer = convertASN1toRaw(signatureBuffer);

  const isValid = await subtle.verify(
    algoParams,
    cryptoKey,
    signatureBuffer,
    comboBuffer
  );

  return isValid;
}
