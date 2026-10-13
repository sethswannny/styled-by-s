const sourceField = document.querySelector("#source-field");
const source = new URLSearchParams(window.location.search).get("src");

if (sourceField && source) {
  sourceField.value = source;
}
