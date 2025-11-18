const sidebarItems = document.querySelectorAll(".sidebar ul li");
const personSections = document.querySelectorAll(".person");

// Handle sidebar clicks
sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    // Sidebar active class
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // Hide all persons
    personSections.forEach(section => section.classList.remove("active"));

    // Show selected person
    const personId = item.getAttribute("data-person");
    const selected = document.getElementById(personId);
    if (selected) selected.classList.add("active");

    // Hide description on load
    const desc = selected.querySelector(".description");
    if (desc) desc.style.display = "none";
  });
});

// Handle "Read More" button click
personSections.forEach(section => {
  const btn = section.querySelector(".read-more-btn");
  const desc = section.querySelector(".description");
  if (btn && desc) {
    btn.addEventListener("click", () => {
      desc.style.display = desc.style.display === "block" ? "none" : "block";
      btn.textContent = desc.style.display === "block" ? "Read Less" : "Read More";
    });
  }
});

// Show first person automatically
document.querySelector(".sidebar ul li.active")?.click();
