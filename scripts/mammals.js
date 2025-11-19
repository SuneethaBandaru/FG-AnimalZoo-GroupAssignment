
let animal

// Animal data stored in an array of objects
const animals = [
    {
        name: "Echidna",
        id: "echidna",
        lifespan: "50 years",
        group: "mammals",
        food: "Insects such as ants and termites, beetle larvae and worms",
        shortDescription:
            "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs...",
        fullDescription: `They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; 
            they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla),
             either, and they are not closely related to them. 
            They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.`,

        length: "76cm",
        weight: "10kg",
        found: "Throughout Australia",
        image: "../images/mammals/echidna1.jpg"
    },
    {
        name: "Tasmanian Devil",
        id: "tasmanianDevil",
        lifespan: "5 years",
        group: "mammals",
        food: "They eat meat from other animals such as wallabies and wombats",
        shortDescription: "The Tasmanian devil is a carnivorous marsupial of the family Dasyuridae...",
        fullDescription: `Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, 
            with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, 
            following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. 
            It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. 
            The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. 
            It hunts prey and scavenges on carrion.`,
        length: "70cm",
        weight: "10kg",
        found: "Tasmania",
        image: "../images/mammals/TasmanianDevil3.jpg"
    },
    {
        name: "Quokka",
        id: "quokka",
        lifespan: "10 years",
        group: "mammals",
        food: "Plant eaters, shrubs and grasses",
        shortDescription:
            `The Quokka was described by early Dutch explorer Willem de Vlamingh 'as a kind of rat as big as a common cat.`,
        fullDescription: `His first sighting of the Quokka was on an island off the mouth of the Swan River. 
            He named the island Rottenest ('rat nest') in honour of this sighting. 
            The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.
            It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. 
            Its facial features consist of a naked nose on a short, broad face with rounded furry ears.
            The tail is relatively short and mostly devoid of hair. 
            In contrast, the hair on the feet extends to cover its claws.`,
        length: "50cm",
        weight: "3kg",
        found: "Rottnest Island and WA mainland",
        image: "../images/mammals/quokka3.jpg",
    },
];

const welcomeMsg = `We proudly present our mammals, The Echidna is a spiny mammal that eats insects with its long tongue, 
the Tasmanian Devil is the largest carnivorous marsupial known for its powerful bite and loud screeches, 
and the quokka is a small, herbivorous, and happiest marsupial found on islands off Western Australia.`;

const mainContainer = document.getElementById("mainContent");

const img = document.createElement("img");
img.src = "../images/mammals/mammals_welcome.png";
img.classList.add("animal-image");
mainContainer.appendChild(img);

const welcomeText = document.createElement("div");
welcomeText.textContent = welcomeMsg;
welcomeText.classList.add("welcome-message");
mainContainer.appendChild(welcomeText);


function createListInsideDiv() {
    // Get the side div
    const sidebarContainer = document.getElementById("sidebar");
    // Create a <ul> element
    const ul = document.createElement("ul");

    // Loop through the array with forEach
    animals.forEach(animal => {
        const li = document.createElement("li"); // create li
        li.textContent = animal.name;                // set the text
        // Click event for li
        li.onclick = function () {
            // Remove active class from all li
            ul.querySelectorAll("li").forEach(item => item.classList.remove("active"));
            li.classList.add("active");
            //clear the previous content if any 
            //display the animal content in the main div element
            // Clear previous content
            mainContainer.innerHTML = "";
            // ---- Create animal content ----
            // Image
            //create an image inside the div
            //assign the image
            
            const img = document.createElement("img");
            img.src = animal.image;
            img.alt = animal.name;
            img.classList.add("animal-image");
            mainContainer.appendChild(img);
            //add animal name
            const nameElement = document.createElement("h2");
            nameElement.textContent = animal.name.toUpperCase();
            nameElement.classList.add("animal-name");
            mainContainer.appendChild(nameElement);

            // Short summary
            const shortDesc = document.createElement("div"); 
            shortDesc.classList.add("animal-short-desc"); 

            const lifespan = document.createElement("p");
            lifespan.textContent = "Lifespan : " + animal.lifespan;
            shortDesc.appendChild(lifespan);

            const weight = document.createElement("p");
            weight.textContent = "Weight : " + animal.weight;
            shortDesc.appendChild(weight);

            const length = document.createElement("p");
            length.textContent = "Length : " + animal.length;
            shortDesc.appendChild(length);
            const food = document.createElement("p");
            food.textContent = "Food : " + animal.food;
            shortDesc.appendChild(food);

            const shortDescription = document.createElement("p");
            shortDescription.textContent = animal.shortDescription;
            shortDesc.appendChild(shortDescription);
            mainContainer.appendChild(shortDesc);

            // Read More link
            const readMore = document.createElement("a");
            readMore.textContent = "Read More";
            readMore.href = "#";
            readMore.classList.add("read-more");
            mainContainer.appendChild(readMore);

            // Full description div with smooth collapse/expand
            const fullDesc = document.createElement("div");

            const fullDescription = document.createElement("p");
            fullDescription.textContent = animal.fullDescription;
            fullDesc.classList.add("animal-full-desc");
            fullDesc.appendChild(fullDescription);
            mainContainer.appendChild(fullDesc);

            // Read Less link
            const readLess = document.createElement("a");
            readLess.textContent = "Read Less";
            readLess.href = "#";
            readLess.classList.add("read-less");
            readLess.style.display = "none"; // Hidden initially
            mainContainer.appendChild(readLess);

            // Read More click
            readMore.onclick = function (e) {
                e.preventDefault();
                fullDesc.style.maxHeight = fullDesc.scrollHeight + "px";
                readMore.style.display = "none";
                readLess.style.display = "block";
            };

            // Read Less click
            readLess.onclick = function (e) {
                e.preventDefault();
                fullDesc.style.maxHeight = "0";
                readMore.style.display = "block";
                readLess.style.display = "none";
            };
        };
        // append li to ul
        ul.appendChild(li);
    });

    // Append the final UL to the div
    sidebarContainer.appendChild(ul);
}

// Call the function
createListInsideDiv();








