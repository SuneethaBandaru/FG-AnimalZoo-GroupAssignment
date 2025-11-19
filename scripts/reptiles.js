const reptiles = [
    {
        name: "Frill-necked Lizard",
        image: "../images/frill-necked-lizard.webp",
        group: "reptiles",
        lifespan: "20 years",
        diet: "Small insects and spiders",
        description: "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
        length: "90cm",
        weight: "1 kg",
        found: "Northern Australia"
    },
    {
        name: "Hawksbill Turtle",
        image: "../images/hawksbill-turtle.webp",
        group: "reptiles",
        lifespan: "50 years ",
        diet: "other animals (sponges & jellyfish), sea plants",
        description: "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
        length: "80cm (carapace)",
        weight: "50kg",
        found: "Tropical coasts of Queensland, Northern Territory and Western Australia."
    },
    {
        name: "Perentie",
        image: "../images/perentie.jpg",
        group: "reptiles",
        diet: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
        description: "The perentie(Varanus giganteus) is the largest monitor lizard or goanna native to Australia.It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation.The species is considered to be a least - concern species according to the International Union for Conservation of Nature.Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker.It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
        lifespan: "20 years",
        length: "2.5 m",
        weight: "20kg",
        found: "Deserts"
    }
];

const sidebar = document.getElementById("reptiles-list");
const main = document.getElementById("main-content");
let activeReptile = null;

reptiles.forEach((reptile) => {
    const li = document.createElement("li");
    li.textContent = reptile.name;
    li.addEventListener("click", () => toggleReptile(reptile, li));
    sidebar.appendChild(li);
});

function toggleReptile(reptile, element) {
    if (activeReptile === reptile) {
        activeReptile = null;
        element.classList.remove("active");
    } else {
        activeReptile = reptile;
        document.querySelectorAll("#reptiles-list li").forEach((li) => li.classList.remove("active"));
        element.classList.add("active");
        showReptile(reptile);
    }
}

function showReptile(reptile) {
    const shortDescription = reptile.description.substring(0, 200) + "...";

    main.innerHTML = `
      <div class="reptiles-details">
          <img src="${reptile.image}" alt="${reptile.name}" class="reptiles-img">

          <div class="reptiles-info">
              <h2>${reptile.name}</h2>

              <p id="description-text">${shortDescription}</p>

              <div id="extra-info" style="display: none;">
                  <p><strong>Lifespan:</strong> ${reptile.lifespan}</p>
                  <p><strong>Diet:</strong> ${reptile.diet}</p>
                  <p><strong>Length:</strong> ${reptile.length}</p>
                  <p><strong>Weight:</strong> ${reptile.weight}</p>
                  <p><strong>Found:</strong> ${reptile.found}</p>
                  <p>${reptile.description}</p>
              </div>

              <button id="toggle-btn" class="btn">Read More</button>
          </div>
      </div>
    `;

    const toggleBtn = document.getElementById("toggle-btn");
    const extraInfo = document.getElementById("extra-info");
    const descText = document.getElementById("description-text");

    let expanded = false;

    toggleBtn.addEventListener("click", () => {
        expanded = !expanded;

        if (expanded) {
            extraInfo.style.display = "block";
            descText.style.display = "none";
            toggleBtn.textContent = "Read Less";
        } else {
            extraInfo.style.display = "none";
            descText.style.display = "block";
            toggleBtn.textContent = "Read More";
        }
    });
}
