// Birds data
const birds = [
  {
    name: "Kookaburra",
    group: "birds",
    image: "../images/kookaburra.jpeg",
    description:
      "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length.",
    fullDescription:
      "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    diet: "Insects and small animals including snakes, frogs and lizards",
    icon: "🦅",
    sound: "../sounds/kookaburra.mp3",
    videoLink: "https://www.youtube.com/watch?v=S0ZbykXlg6Q",
    lifespan: "20 years",
    length: "43cm",
    weight: "300 grams",
    found: "Australia wide",
  },
  {
    name: "Cassowary",
    group: "birds",
    image: "../images/cassowary.jpeg",
    description:
      "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.",
    fullDescription:
      "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
    diet: "Plants matter like fruit, insects and small animals like mice amd lizards.",
    icon: "🦃",
    sound: "../sounds/cassowary.mp3",
    videoLink: "https://www.youtube.com/watch?v=mb1bbIyF9OU&t=52s",
    lifespan: "20 years",
    length: "1.7m",
    weight: "44 Kg",
    found: "Queensland",
  },
  {
    name: "Cockatoo",
    group: "birds",
    image: "../images/cockatoo.jpeg",
    description:
      "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band.",
    fullDescription:
      "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The white is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.",
    diet: "Fruit, seeds and other plant material",
    icon: "🦜",
    sound: "../sounds/cockatoos.mp3",
    videoLink: "https://www.youtube.com/watch?v=CEQuDyuQFKE",
    lifespan: "41 years",
    length: "65cm",
    weight: "900 grams",
    found: "SE Australia",
  },
  {
    name: "Emu",
    group: "birds",
    image: "../images/emu.jpeg",
    description:
      "Emus are large flightless birds with long necks and legs. They are omnivores and can run up to 50 km/h.",
    fullDescription:
      "Emus are the second-largest bird by height and are native to Australia. They have powerful kicks and are important in Aboriginal culture. The emu is a large, flightless bird native to Australia, standing up to 6.2 feet (1.9 meters) tall with shaggy grey-brown feathers, a long neck, and long, powerful legs with three toes. Its head and neck have bluish-black bare skin, and its wings are tiny and hidden under its plumage. Emus are known for their high-speed running and their ability to adapt to various habitats across the continent. ",
    diet: "Plants, seeds, flowers, insects, and fruits",
    icon: "🦤",
    sound: "../sounds/emu.mp3",
    videoLink: "https://www.youtube.com/watch?v=cnj6b5qw8LM",
    lifespan: "20 years",
    length: "160-190 cm",
    weight: "30-60 kg",
    found: "Australia",
  },
];

// Get DOM elements
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

// Store current audio
let currentAudio = null;

// Play bird sound - Make it global
window.playBirdSound = (soundUrl) => {
  // Stop the previous audio if it's playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create and play new audio
  currentAudio = new Audio(soundUrl);
  currentAudio.play().catch((err) => {
    console.log("Audio playback failed:", err);
    alert("Unable to play sound. Please check your audio settings.");
  });

  // Clear currentAudio when sound finishes
  currentAudio.onended = () => {
    currentAudio = null;
  };
};

// Toggle read more/less - Make it global
window.toggleDescription = (button) => {
  const card = button.closest(".animal-card");
  const shortContent = card.querySelector(".short-content");
  const fullContent = card.querySelector(".full-content");

  if (fullContent.style.display === "none") {
    fullContent.style.display = "block";
    shortContent.style.display = "none";
  } else {
    fullContent.style.display = "none";
    shortContent.style.display = "block";
  }
};

// Function to create bird card
const createBirdCard = (bird) => {
  return `
        <div class="animal-card">
            <img src="${bird.image}" 
                 alt="${bird.name}" 
                 onclick="playBirdSound('${bird.sound}')"
                 style="cursor: pointer;"
                 title="Click to hear ${bird.name} sound"
                 onerror="this.style.backgroundColor='#ddd'">
            <div class="short-content">
                <p class="description">${bird.description}</p>
                <p class="diet"><strong>Diet:</strong> ${bird.diet}</p>
                ${bird.videoLink ? `<p class="video-link"><strong>Watch Video:</strong> <a href="${bird.videoLink}" target="_blank">View ${bird.name} on YouTube</a></p>` : ""}
                <button class="read-more-btn" onclick="toggleDescription(this)">Read More</button>
            </div>
            <div class="full-content" style="display: none;">
                <p><strong>Lifespan:</strong> ${bird.lifespan}</p>
                <p><strong>Food:</strong> ${bird.diet}</p>
                <p><strong>Length:</strong> ${bird.length}</p>
                <p><strong>Weight:</strong> ${bird.weight}</p>
                <p><strong>Found:</strong> ${bird.found}</p>
                <p>${bird.fullDescription}</p>
                <button class="read-more-btn" onclick="toggleDescription(this)" style="margin-top: 20px;">Back</button>
            </div>
            <p class="group">Belongs to group <a href="birds.html">${bird.group}</a></p>
        </div>
    `;
};

// Toggle active state
const toggleActive = (clickedElement, allElements) => {
  allElements.forEach((el) => el.classList.remove("active"));
  clickedElement.classList.add("active");
};

// Show bird details
const showBird = (bird, listItem) => {
  main.innerHTML = createBirdCard(bird);
  toggleActive(listItem, document.querySelectorAll("#sidebar li"));
};

// Default group content with background video
const defaultContent = `
    <div style="position: relative; overflow: hidden; border-radius: 8px; margin-bottom: 30px;">
        <video autoplay loop muted plays inline style="width: 100%; height: 450px; object-fit: cover; border-radius: 8px; display: block;">
            <source src="../videos/birdsVideo.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.3); display: flex; align-items: center; justify-content: center; border-radius: 8px;">
            <h1 style="color: white; font-size: 48px; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); z-index: 10;">Birds of Australia</h1>
        </div>
    </div>
    
    <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">
        Explore the diverse and spectacular bird species of Australia, a land renowned for its unique and 
        colorful avian wildlife. From the iconic laughing kookaburra to the vibrant rainbow lorikeets, 
        Australia is home to over 800 species of birds, many of which are found nowhere else on Earth.
    </p>
    
    <p style="font-size: 16px; line-height: 1.8; margin-bottom: 15px;">
        Many Australian birds play crucial roles in their ecosystems as pollinators, seed dispersers, and 
        pest controllers. The honeyeaters, for instance, are vital pollinators of native plants, while 
        kookaburras help control snake and rodent populations.
    </p>
    
    <p style="font-size: 16px; line-height: 1.8; margin-top: 20px;">
        Select a <strong> Bird </strong> from the sidebar to know more about these fascinating creatures and discover what 
        makes each species unique in the Australian ecosystem.
    </p>
`;

// Build sidebar
sidebar.innerHTML =
  '<h2><a href="birds.html" style="color: white; text-decoration: none;">Birds</a></h2>';
const list = document.createElement("ul");
birds.forEach((bird) => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${bird.icon}</span> ${bird.name}`;
  li.onclick = function () {
    showBird(bird, this);
  };
  list.appendChild(li);
});
sidebar.appendChild(list);

// Initial load
main.innerHTML = defaultContent;
