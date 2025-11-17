// data.js — animal + team data used by all pages
const ANIMALS = [
    {
        id: "echidna",
        name: "Echidna",
        group: "mammals",
        lifespan: "50 years",
        food: "Insects such as ants and termites, beetle larvae and worms",
        description: "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters, either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
        length: "76cm",
        weight: "10kg",
        found: "Throughout Australia",
        image: "../images/echidna.jpg"
    },
    {
        id: "tasmanian-devil",
        name: "Tasmanian Devil",
        group: "mammals",
        lifespan: "5 years",
        food: "A predator; eats meat from other animals such as wallabies and wombats",
        description: "The Tasmanian devil (Sarcophilus harrisii) is a carnivorous marsupial of the family Dasyuridae. Known for its stocky, muscular build, black fur, loud screech, and strong bite. It hunts prey and scavenges on carrion.",
        length: "70cm",
        weight: "10kg",
        found: "Tasmania",
        image: "../images/tasmanian-devil.jpg"
    },
    {
        id: "quokka",
        name: "Quokka",
        group: "mammals",
        lifespan: "10 years",
        food: "Plant eaters, they munch on shrubs and grasses",
        description: "The Quokka, Setonix brachyurus, was described by early Dutch explorers. Essentially the Quokka looks very much like other wallabies. It has short, coarse grey-brown fur with lighter parts underneath, a short broad face and rounded furry ears.",
        length: "50cm",
        weight: "3kg",
        found: "Rottnest Island and parts of WA",
        image: "../images/quokka.jpg"
    },
    {
        id: "frill-necked-lizard",
        name: "Frill-necked Lizard",
        group: "reptiles",
        lifespan: "20 years",
        food: "Small insects and spiders",
        description: "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colourful frill that encircles its head, and hisses. If an attacker remains, it runs away on its hind legs until it reaches safety.",
        length: "90cm",
        weight: "1kg",
        found: "Northern Australia",
        image: "../images/frill-necked-lizard.webp"
    },
    {
        id: "hawksbill-turtle",
        name: "Hawksbill Turtle",
        group: "reptiles",
        lifespan: "50 years",
        food: "Sponges, jellyfish, and sea plants",
        description: "The Hawksbill Sea Turtle has a distinctive beak-like mouth and an amber-brown shell with serrated edges. Found along tropical coasts, it uses its narrow head to extract food from crevices.",
        length: "80cm (carapace)",
        weight: "50kg",
        found: "Tropical coasts of Queensland, NT, WA",
        image: "../images/hawksbill-turtle.webp"
    },
    {
        id: "perentie",
        name: "Perentie",
        group: "reptiles",
        lifespan: "20 years",
        food: "Carnivore — eats kangaroos, rabbits, lizards and birds",
        description: "The perentie (Varanus giganteus) is the largest monitor lizard native to Australia. Found in arid regions, it is shy and powerful and features in many Aboriginal cultures.",
        length: "2.5 m",
        weight: "20kg",
        found: "Deserts",
        image: "../images/perentie.jpg"
    },
    {
        id: "cassowary",
        name: "Cassowary",
        group: "birds",
        lifespan: "20 years",
        food: "Fruit, insects and small animals like mice and lizards",
        description: "Large, flightless birds with powerful legs and a helmet-like casque. Cassowaries are shy but can be dangerous if provoked. They inhabit rainforests and are excellent swimmers.",
        length: "1.7m",
        weight: "44kg",
        found: "Queensland",
        image: "../images/cassowary.webp"
    },
    {
        id: "kookaburra",
        name: "Kookaburra",
        group: "birds",
        lifespan: "20 years",
        food: "Insects and small animals including snakes, frogs and lizards",
        description: "The laughing kookaburra is a large kingfisher known for its call that sounds like laughter. It has brown and white plumage and a strong beak used to snatch invertebrates and small vertebrates.",
        length: "43cm",
        weight: "300g",
        found: "Australia-wide",
        image: "../images/kookaburra.jpg"
    },
    {
        id: "yellow-tailed-black-cockatoo",
        name: "Yellow-tailed Black Cockatoo",
        group: "birds",
        lifespan: "41 years",
        food: "Fruit, seeds and other plant material",
        description: "A large cockatoo with yellow cheek patches and a yellow tail band. Lives in forests and has a heavy flight and loud, wailing calls.",
        length: "65cm",
        weight: "900 grams",
        found: "Southeastern Australia",
        image: "../images/yellow-tailed-black-cockatoo.jpg"
    }
];

const TEAM = [
    { id: 'alice', name: 'Alice Andersson', role: 'Frontend developer / Scrum Master', info: 'Worked on layout, CSS and responsive behaviour. Coordinated scrum ceremonies.' },
    { id: 'bjorn', name: 'Björn Berg', role: 'JavaScript & interactivity', info: 'Implemented routing, UI state and click interactions for pages.' },
    { id: 'carla', name: 'Carla Chen', role: 'Content & testing', info: 'Wrote descriptions, tested on multiple viewports and performed QA.' }
];
