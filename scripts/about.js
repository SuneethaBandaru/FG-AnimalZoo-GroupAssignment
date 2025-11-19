const sidebarItems = document.querySelectorAll(".sidebar ul li");
const personSections = document.querySelectorAll(".person");

// Handle sidebar clicks
sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    // Sidebar active class
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // Hide all persons and remove description show class
    personSections.forEach(section => {
      section.classList.remove("active");
      section.querySelector(".description")?.classList.remove("show");
    });

    // Show selected person
    const personId = item.getAttribute("data-person");
    const selected = document.getElementById(personId);
    if (selected) selected.classList.add("active");
  });
});

// Handle "Read More" button click
personSections.forEach(section => {
  const btn = section.querySelector(".read-more-btn");
  const desc = section.querySelector(".description");
  if (btn && desc) {
    btn.addEventListener("click", () => {
      // Toggle 'show' class
      desc.classList.toggle("show");

      // Change button text
      btn.textContent = desc.classList.contains("show") ? "Read Less" : "Read More";
    });
  }
});

// Show first person automatically
document.querySelector(".sidebar ul li.active")?.click();
