// Global variables to index page
let activeAnimal;

const eventData = {
  eventName: 'Australian Wildlife Exhibition',
  eventDate: 'Monday, november 25, 2025',
  eventTime: '10:00 AM - 5:00 PM',
  welcomeMessage:
    'You are welcome to visit us and explore the wonders of Australian wildlife!',
  image: './images/event-image.jpeg',
  location: 'Australia Zone, Local Djurpark',
  description:
    "Discover the wonders of Australia's unique wildlife in this immersive exhibition! Featuring at least nine extraordinary animals from three major groups—mammals, birds, and reptiles—this event offers an up-close look at some of the world's most fascinating species. A perfect adventure for families, school groups, and animal lovers!",
  highlights:
    '🦘 Meet iconic Australian species | 🎓 Educational talks & demonstrations | 📸 Photo opportunities with friendly animals | 🎟️ Interactive exhibits for all ages | 🌿 Conservation awareness programs',
  altText:
    'A collage of Australian animals including a kangaroo, koala, and emu',
};

function renderIntroVideo() {
  const videoContainer = document.querySelector('.intro-video-container');

  // Clear existing content
  videoContainer.innerHTML = null;

  const videoHTML = `
      <div class="video-container">
          <video autoplay loop muted plays inline>
            <source
              src="./videos/Zoo_Animals_and_Visitor_Video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="video-overlay">
            <h1 class="video-title">${eventData.eventName}</h1>
            <p class="highlights">
                ${eventData.highlights}
            </p>

            </div>
        </div>`;
  videoContainer.innerHTML = videoHTML;
}

function showEventDetails() {
  const card = document.querySelector('.event-card');

  // Clear existing content
  card.innerHTML = '';

  const eventHTML = `
        <div class="event-image-container">
          <img src="${eventData.image}" alt="${eventData.altText}" class="event-image" />
        </div>
        <div class="event-container">
            <p class="event-title">${eventData.welcomeMessage}</p>
            <p class="event-datetime"><strong>Date:</strong> ${eventData.eventDate} | <strong>Time:</strong> ${eventData.eventTime}</p>
            <p class="event-location"><strong>Location:</strong> ${eventData.location}</p>
            <p class="event-description">${eventData.description}</p>
        </div>`;

  card.innerHTML = eventHTML;
  document.querySelector('.event-card').style.display = 'flex';
}

function hideEventDetails() {
  document.querySelector('.event-card').style.display = 'none';
}

function hideAnimalDetails() {
  document.querySelector('.animal-card').style.display = 'none';
}

function showAnimalDetails() {
  const card = document.querySelector('.animal-card');

  const selectedAnimalInfo = ANIMALS.find(
    (anim) => anim.name.trim() === activeAnimal
  );

  if (!selectedAnimalInfo) {
    return;
  }

  // Clear existing content
  card.innerHTML = '';

  const animalDetailsHTML = `
        <div class="selected-animal-details">
                <div class="image-section">
                    <img src="${selectedAnimalInfo.image}" alt="${selectedAnimalInfo.name}" />
                </div>
                <h1 class="animal-title">${selectedAnimalInfo.name}</h1>
                <p class="animal-description">${selectedAnimalInfo.description}</p>
                <div class="group-info">
                    <span class="group-label">Belongs to group </span>
                    <span><a href="./pages/${selectedAnimalInfo.group}.html" class="event-cta">${selectedAnimalInfo.group}</a></span>
                </div>
        </div>`;

  card.innerHTML = animalDetailsHTML;
  document.querySelector('.animal-card').style.display = 'flex';
}

function handleAnimalClick(event) {
  const selectedElement = event.currentTarget;
  const selectedAnimalText = selectedElement.textContent.trim();
  console.debug(`Selected animal: ${selectedAnimalText}`);

  // Remove active class on all elements
  document
    .querySelectorAll('.list-item')
    .forEach((ele) => ele.classList.remove('active'));

  if (activeAnimal === selectedAnimalText) {
    activeAnimal = undefined;
    hideAnimalDetails();
    // Show event content
    showEventDetails();
  } else {
    // Apply active class to selected element
    selectedElement.classList.add('active');
    activeAnimal = selectedAnimalText;
    hideEventDetails();
    showAnimalDetails();
  }
}

function loadSidebarAnimals() {
  const sidebarElement = document.getElementById('animals-list');

  ANIMALS.forEach((animal) => {
    const li = document.createElement('li');
    const animalName = document.createElement('span');
    animalName.textContent = animal.name;
    li.appendChild(animalName);
    li.classList.add('list-item');
    li.addEventListener('click', handleAnimalClick);
    sidebarElement.appendChild(li);
  });
}

function loadIndexPage() {
  renderIntroVideo();
  loadSidebarAnimals();
  hideAnimalDetails();
  showEventDetails();
}

document.addEventListener('DOMContentLoaded', loadIndexPage);
