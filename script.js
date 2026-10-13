const sourceField = document.querySelector("#source-field");
const source = new URLSearchParams(window.location.search).get("src");
const serviceSelect = document.querySelector('select[name="service"]');

if (sourceField && source) {
  sourceField.value = source;
}

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    if (serviceSelect) {
      serviceSelect.value = link.dataset.service;
    }
  });
});
