export function storeData(data) {
  localStorage.setItem("paintings", JSON.stringify(data));
  let paintingsFromStorage = localStorage.getItem("paintings");

  // Log response to the console
  // console.log(JSON.parse(paintingsFromStorage));
}
