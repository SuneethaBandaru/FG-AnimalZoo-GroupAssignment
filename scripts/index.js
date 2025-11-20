// Global variables to index page
let activeAnimal;

const eventData = {
  eventName: "Australian Wildlife Exhibition",
  eventDate: "Monday, november 25, 2025",
  eventTime: "10:00 AM - 5:00 PM",
  location: "Australia Zone, Local Djurpark",
  description:
    "Discover the wonders of Australia's unique wildlife in this immersive exhibition! Featuring at least nine extraordinary animals from three major groups—mammals, birds, and reptiles—this event offers an up-close look at some of the world's most fascinating species. A perfect adventure for families, school groups, and animal lovers!",

  altText:
    "A collage of Australian animals including a kangaroo, koala, and emu",
};

/*function sendEnquiryMail() {
  const mailAddress = "support@example.com";
  return `mailto:support@example.com?subject=Inquiry%20About%20Your%20Services&body=Dear%20Team%2C%0A%0AI%20am%20writing%20to%20inquire%20about...%0A%0ASincerely%2C`;
}*/

function showEventDetails() {
  const card = document.querySelector(".event-card");

  // Clear existing content
  card.innerHTML = "";

  const eventHTML = `
      
        <div class="video-container">
          <video autoplay loop muted plays inline>
            <source
              src="./videos/Zoo_Animals_and_Visitor_Video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="video-overlay">
            <h1 class="event-title">${eventData.eventName}</h1>
            <p class="event-description">
                ${eventData.description}
            </p>
           
            </div>
        </div>
        `;

  card.innerHTML = eventHTML;
  document.querySelector(".event-card").style.display = "block";
}

function hideEventDetails() {
  document.querySelector(".event-card").style.display = "none";
}

function hideAnimalDetails() {
  document.querySelector(".animal-card").style.display = "none";
}

function showAnimalDetails() {
  const card = document.querySelector(".animal-card");

  const selectedAnimalInfo = ANIMALS.find(
    (anim) => anim.name.trim() === activeAnimal
  );

  if (!selectedAnimalInfo) {
    return;
  }

  // Clear existing content
  card.innerHTML = "";

  const animalDetailsHTML = `
        <div class="selected-animal-details">
                <div class="image-section">
                    <img src="${selectedAnimalInfo.image}" alt="${selectedAnimalInfo.name}" />
                </div>
                <h1 class="animal-title">${selectedAnimalInfo.name}</h1>
                <p class="animal-description">${selectedAnimalInfo.description}</p>
                <div class="group-info">
                    <strong>Group:</strong>
                    <span><a href="./pages/${selectedAnimalInfo.group}.html" class="event-cta">${selectedAnimalInfo.group}</a></span>
                </div> 
        </div>`;

  card.innerHTML = animalDetailsHTML;
  document.querySelector(".animal-card").style.display = "block";
}

function handleAnimalClick(event) {
  const selectedElement = event.currentTarget;
  const selectedAnimalText = selectedElement.textContent.trim();
  console.debug(`Selected animal: ${selectedAnimalText}`);

  // Remove active class on all elements
  document
    .querySelectorAll(".list-item")
    .forEach((ele) => ele.classList.remove("active"));

  if (activeAnimal === selectedAnimalText) {
    activeAnimal = undefined;
    hideAnimalDetails();
    // Show event content
    showEventDetails();
  } else {
    // Apply active class to selected element
    selectedElement.classList.add("active");
    activeAnimal = selectedAnimalText;
    hideEventDetails();
    showAnimalDetails();
  }
}

function loadSidebarAnimals() {
  const sidebarElement = document.getElementById("animals-list");

  ANIMALS.forEach((animal) => {
    const li = document.createElement("li");
    const animalName = document.createElement("span");
    animalName.textContent = animal.name;
    li.appendChild(animalName);
    li.classList.add("list-item");
    li.addEventListener("click", handleAnimalClick);
    sidebarElement.appendChild(li);
  });
}

function loadIndexPage() {
  loadSidebarAnimals();
  showEventDetails();
}

document.addEventListener("DOMContentLoaded", loadIndexPage);
