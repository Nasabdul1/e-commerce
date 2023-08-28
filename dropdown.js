const accountIcon = document.getElementById("account-icon");
const dropdownContent = document.getElementById("dropdown-content");

accountIcon.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});
