import { AuthenticationJSON, AuthenticationInfo } from "../types/index";
import { toAuthenticationInfo } from "./to-authentication-info";
import { parseAuthenticator } from "./parse-authenticator";


export function parseAuthentication(
  authenticationJson: AuthenticationJSON
): AuthenticationInfo {
  const authenticator = parseAuthenticator(
    authenticationJson.response.authenticatorData
  );
  return toAuthenticationInfo(authenticationJson, authenticator);
}
