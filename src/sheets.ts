import { getAccessToken } from "./auth";

export async function writeCell(
  spreadsheetId: string,
  value: string,
  sheetTitle: string,
  cell: string,
) {
  const token = await getAccessToken();
  spreadsheetId = "1Sv7dNhPivFm2LKrYcrGSTw7xfI2-ftxkCkwCNjySC_4";
  sheetTitle = "Sheet1";
  cell = "A2";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetTitle}!${cell}?valueInputOption=USER_ENTERED`;

  const result = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [[value]],
    }),
  });
  if (!result.ok) {
    throw new Error(await result.text());
  }
}
