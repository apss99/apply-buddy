import { writeCell } from "./sheets";

const saveButton = document.getElementById("saveButton")!;

saveButton.addEventListener("click", async () => {
  const sheetName = (document.getElementById("sheetName") as HTMLInputElement)
    .value;
  const url = (
    document.getElementById("zerothColumnContents") as HTMLInputElement
  ).value;
  const title = (
    document.getElementById("firstColumnContents") as HTMLInputElement
  ).value;
  const company = (
    document.getElementById("secondColumnContents") as HTMLInputElement
  ).value;
  const desc = (
    document.getElementById("thirdColumnContents") as HTMLInputElement
  ).value;
  const link = (
    document.getElementById("fourthColumnContents") as HTMLInputElement
  ).value;

  try {
    await writeCell("", "Successfully posted", "", "");
    alert("Saved!");
  } catch (e) {
    alert(`Error: ${(e as Error).message}`);
  }
});
