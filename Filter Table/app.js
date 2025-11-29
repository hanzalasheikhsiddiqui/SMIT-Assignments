let searchInput = document.getElementById("search");
let roleSelect = document.getElementById("roleFilter");
let rows = document.querySelectorAll("#dataTable tbody tr");
function filterTable() {
  let text = searchInput.value.toLowerCase();
  let role = roleSelect.value.toLowerCase();
  rows.forEach(row => {
    let name = row.cells[0].textContent.toLowerCase();
    let job = row.cells[1].textContent.toLowerCase();
    let city = row.cells[2].textContent.toLowerCase();
    let matchText = name.includes(text) || job.includes(text) || city.includes(text);
    let matchRole = !role || job.includes(role);
    row.style.display = (matchText && matchRole) ? "" : "none";
  });
}
searchInput.addEventListener("input", filterTable);
roleSelect.addEventListener("change", filterTable);

