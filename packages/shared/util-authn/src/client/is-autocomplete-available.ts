
export async function isAutocompleteAvailable() {
  return (
    PublicKeyCredential.isConditionalMediationAvailable &&
    PublicKeyCredential.isConditionalMediationAvailable()
  );
}
