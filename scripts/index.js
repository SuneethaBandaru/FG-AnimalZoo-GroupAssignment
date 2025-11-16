// Global variables to index page
let activeAnimal;

const eventData = {
  eventName: "Roaring Good Time: Lion Feeding & Talk",
  eventDate: "Saturday, August 24, 2024",
  eventTime: "2:00 PM - 3:00 PM",
  highlights:
    "Witness the King of the Jungle in action! Experience the thrill of watching our majestic African lions during their feeding time while our expert zookeepers share fascinating insights about their hunting behaviors, social dynamics, and conservation status. Learn what it takes to care for these magnificent predators and discover how you can help protect lions in the wild. Perfect for families and wildlife enthusiasts!",
  location: "Lion Habitat, Predator Park Zone",
  description:
    "Join our expert zookeepers for an exciting live lion feeding demonstration and an insightful talk about the incredible African lions at our zoo. Learn about their behaviors, conservation efforts, and individual personalities. A must-see for big cat enthusiasts!",
  image: "./images/event.png",
  altText:
    "A majestic lion looking directly at the camera with a blurred background",
  ctaText: "Book Your Visit Now!",
  ctaLink: "#booking",
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
                    <strong>Diet:</strong>
                    <span>${selectedAnimalInfo.diet}</span>
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
