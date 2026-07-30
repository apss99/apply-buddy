import { getAccessToken } from "./auth";
export async function appendRow(spreadsheetId, sheetName, values) {
    const token = await getAccessToken();
    const range = `${encodeURIComponent(sheetName)}!A1`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [values] }),
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Sheets API error ${res.status}: ${err}`);
    }
}
