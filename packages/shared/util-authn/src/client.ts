import {
  register,
  isAvailable,
  authenticate,
  getOngoingAuth,
  setOngoingAuth,
  getAuthAttachment,
  isLocalAuthenticator,
  isAutocompleteAvailable,
} from './client/index';

export const client = {
  register,
  isAvailable,
  authenticate,
  getOngoingAuth,
  setOngoingAuth,
  getAuthAttachment,
  isLocalAuthenticator,
  isAutocompleteAvailable,
};
