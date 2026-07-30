export async function getAccessToken(): Promise<string> {
  const result = await chrome.identity.getAuthToken({ interactive: true });
  if (!result || !result.token) {
    throw new Error("No access token returned.");
  }
  return result.token;
}
