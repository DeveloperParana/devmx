import {
  isValid,
  isNotValid,
  parseCryptoKey,
  randomChallenge,
  verifySignature,
  verifyRegistration,
  verifyAuthentication,
} from './server/index';

export const server = {
  isValid,
  isNotValid,
  parseCryptoKey,
  randomChallenge,
  verifyAuthentication,
  verifyRegistration,
  verifySignature,
};
