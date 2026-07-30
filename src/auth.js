export async function getAccessToken() {
    const result = await chrome.identity.getAuthToken({ interactive: true });
    if (!result || !result.token) {
        throw new Error("No access token returned.");
    }
    return result.token;
}
