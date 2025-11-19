// Global variables to index page
let activeAnimal;

const eventData = {
  eventName: "Australian Wildlife Exhibition",
  eventDate: "Saturday, August 24, 2024",
  eventTime: "10:00 AM - 5:00 PM",
  location: "Australia Zone, Local Djurpark",
  description:
    "Discover the wonders of Australia's unique wildlife in this immersive exhibition! Featuring at least nine extraordinary animals from three major groups—mammals, birds, and reptiles—this event offers an up-close look at some of the world’s most fascinating species. Learn fun facts about iconic animals like kangaroos, koalas, and emus, and dive deeper into the lives of lesser-known creatures such as blue-tongued skinks and kookaburras. Through interactive displays, educational talks, and guided habitat tours, visitors of all ages can explore the rich biodiversity of Australia while learning about real-world conservation efforts. A perfect adventure for families, school groups, and animal lovers!",
  image: "./images/event.png",
  altText:
    "A collage of Australian animals including a kangaroo, koala, and emu",
  ctaText: "Visit the Exhibition!",
  ctaLink: "#exhibition",
};

function showEventDetails() {
  const card = document.querySelector(".event-card");

  // Clear existing content
  card.innerHTML = "";

  const eventHTML = `
        <div class="event-image">
            <img src="${eventData.image}" alt="${eventData.altText}" />
        </div>
        <div class="details-section">
            <h1 class="event-title">${eventData.eventName}</h1>
            <p class="event-description">
                  ${eventData.description}
            </p>
            <div class="event-timings">
              <div class="event-information">
                  <p><strong>Date:</strong> ${eventData.eventDate}</p>
                  <p><strong>Time:</strong> ${eventData.eventTime}</p>
                  <p><strong>Location:</strong> ${eventData.location}</p>
              </div>
              
              <button onclick="window.location.href='${eventData.ctaLink}'" class="event-cta">${eventData.ctaText}</button>
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
