document.addEventListener('DOMContentLoaded', () => {
  // Read More toggle
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const description = button.nextElementSibling;
      description.classList.toggle('show');
      button.textContent = description.classList.contains('show') ? 'Read Less' : 'Read More';
    });
  });

  // Sidebar tab switching
  const sidebarItems = document.querySelectorAll('.sidebar ul li');
  const persons = document.querySelectorAll('.person');

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      persons.forEach(p => p.classList.remove('active'));
      const personId = item.dataset.person;
      const selectedPerson = document.getElementById(personId);
      if (selectedPerson) selectedPerson.classList.add('active');

      item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
  });
});
