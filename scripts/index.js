// Global variables to index page
let activeAnimal;

const eventData = {
  eventName: " Australian Animals Exhibition",
  eventDate: "Opening Soon",
  eventTime: "Daily during park hours",
  highlights:
    "Journey to the land down under without leaving Sweden! Discover the unique and fascinating wildlife of Australia in our special exhibition featuring at least 9 incredible animals from 3 different groups. From hopping marsupials to scaly reptiles and colorful birds, experience the diversity of Australian fauna. Learn about their remarkable adaptations, habitats, and the conservation challenges they face. Perfect for families and wildlife enthusiasts eager to explore the wonders of Australia!",
  location: "Special Exhibition Hall, Djurpark",
  description:
    "Explore our exciting new Australian animals exhibition showcasing the incredible biodiversity of the Australian continent. Meet a variety of species from different animal groups and learn about their unique characteristics, behaviors, and the importance of protecting their natural habitats. An educational adventure for all ages!",
  image: "./images/event.png",
  altText:
    "Australian animals exhibition featuring kangaroos, koalas, and native wildlife",
  ctaText: "Explore the Exhibition!",
  ctaLink: "#exhibition",
};

function showEventDetails() {
  const card = document.querySelector(".event-card");

  // Clear existing content
  card.innerHTML = "";

  const eventHTML = `
        <div class="details-section">
            <h1 class="event-title">${eventData.eventName}</h1>
            <p class="event-highlights">${eventData.highlights}</p>
            <div class="event-timings">
              <div class="event-information">
                  <p><strong>Date:</strong> ${eventData.eventDate}</p>
                  <p><strong>Time:</strong> ${eventData.eventTime}</p>
                  <p><strong>Location:</strong> ${eventData.location}</p>
              </div>
              <p class="event-description">
                  ${eventData.description}
              </p>
              <button onclick="window.location.href='${eventData.ctaLink}'" class="event-cta">${eventData.ctaText}</button>
            </div>
        </div>
        <div class="event-image">
            <img src="${eventData.image}" alt="${eventData.altText}" />
        </div>`;

  card.innerHTML = eventHTML;
  document.querySelector(".event-card").style.display = "flex";
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

  const eventHTML = `
        <div class="animal-info">
            <div class="selected-animal-details">
                <h1 class="animal-title">${selectedAnimalInfo.name}</h1>
                <div class="detail-item">
                    <strong>Food:</strong>
                    <span>${selectedAnimalInfo.food}</span>
                </div>
                <div class="detail-item">
                    <strong>Habitat:</strong>
                    <span>${selectedAnimalInfo.habitat}</span>
                </div>
                <div class="detail-item">
                    <strong>Description:</strong>
                    <p class="animal-description">${selectedAnimalInfo.description}</p>
                </div>
                <div class="detail-item">
                    <strong>Group:</strong>
                    <span><a href="${selectedAnimalInfo.ctaLink}" class="event-cta">${selectedAnimalInfo.group}</a></span>
                </div>
            </div>
            <div class="image-section">
                <img src="${selectedAnimalInfo.image}" alt="${selectedAnimalInfo.name}" />
            </div>
        </div>`;

  card.innerHTML = eventHTML;
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
