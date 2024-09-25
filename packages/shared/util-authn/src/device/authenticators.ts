import { authenticator } from './authenticator';

export function resolveAuthenticatorName(aaguid: string): string {
  const aaguidMetadata = updatedAuthenticatorMetadata ?? authenticator; //await getAaguidMetadata()
  return aaguidMetadata[aaguid];
}

let updatedAuthenticatorMetadata: Record<string, string> | null = null;

export async function updateDevicesMetadata() {
  // this function is rather resource intensive and time consuming
  // therefore, the result is cached in local storage
  const jwt = await (await fetch('https://mds.fidoalliance.org')).text();

  // the response is a JWT including all AAGUIDs and their metadata
  console.debug(jwt);

  // let us ignore the JWT verification, since this is solely for descriptive purposes, not signed data
  const payload = jwt.split('.')[1].replaceAll('-', '+').replaceAll('_', '/');
  const json = JSON.parse(atob(payload));
  console.debug(json);

  const aaguidMetadata: Record<string, string> = {};
  for (const e of json.entries) {
    if (!e.aaguid || !e.metadataStatement) continue;

    aaguidMetadata[e.aaguid] = e.metadataStatement.description;
  }

  console.debug(aaguidMetadata);
  updatedAuthenticatorMetadata = aaguidMetadata;
}
