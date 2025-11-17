const sidebarItems = document.querySelectorAll(".sidebar ul li");
const persons = document.querySelectorAll(".person");

function showPerson(id) {
  persons.forEach(person => (person.style.display = "none"));
  document.getElementById(id).style.display = "block";

  sidebarItems.forEach(item => item.classList.remove("active"));
  document.querySelector(`.sidebar ul li[data-person="${id}"]`).classList.add("active");
}

sidebarItems.forEach(item => {
  item.addEventListener("click", () => showPerson(item.getAttribute("data-person")));
});

// Show default person on load
showPerson("sowjanya");
