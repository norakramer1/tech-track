export function storeData(data) {
  localStorage.setItem("paintings", JSON.stringify(data));
  let paintingsFromStorage = localStorage.getItem("paintings");
}
