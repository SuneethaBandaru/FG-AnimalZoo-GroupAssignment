<<<<<<< HEAD
const BIRDS = [
  {
    name: "Kookaburra",
    group: "birds",
    image: "https://images.unsplash.com/photo-1597305877032-0668c2d2a6d4?w=400",
    description:
      " Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars",
    diet: "Insects, small reptiles, mice, and snakes",
    habitat: "Eucalyptus forests, woodlands, and parks",
    size: "39-42 cm long, wingspan 56 cm, 300-500g",
    lifespan: "Up to 20 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Cassowary",
    group: "birds",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400",
    description:
      "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    diet: "Plants matter like fruit, insects and small animals like mice amd lizards",
    habitat: "Rainforests, woodlands, and urban gardens",
    size: "25-30 cm long, 75-157g",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Yellow Tailed Black Cockatoo",
    group: "birds",
    image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400",
    description:
      "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping",
    diet: "Fruit, seeds and other plant material",
    habitat: "Grasslands, savannas, and open forests",
    size: "1.5-1.9 meters tall, 18-60 kg",
    lifespan: "10-20 years in wild, up to 35 years in captivity",
    conservation: "Least Concern",
  },
];

const MAMMALS = [
  {
    name: "Echidna",
    group: "mammals",
    image: "https://images.unsplash.com/photo-1623948977589-e2a60d5e1b02?w=400",
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    diet: " insects such as ants and termites, beetle larvae and worms",
    habitat: "Grasslands, woodlands, and open forests",
    size: "1.3-1.6 meters tall, 40-90 kg",
    lifespan: "6-8 years in wild, up to 20 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Tasmanian Devil",
    group: "mammals",
    image: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=400",
    description:
      "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion",
    diet: "A predator, then eat meat from other animals such as wallabies and wombats",
    habitat: "Eucalyptus forests and woodlands",
    size: "60-85 cm long, 4-15 kg",
    lifespan: "10-12 years in wild, up to 18 years in captivity",
    conservation: "Vulnerable",
  },
  {
    name: "Quokka",
    group: "mammals",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400",
    description:
      "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws",
    diet: " Plant eaters, they munch on shrubs and grasses",
    habitat: "Forests, mountains, and heathlands",
    size: "80-120 cm long, 20-35 kg",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern to Critically Endangered (varies by species)",
  },
];

const REPTILES = [
  {
    name: "Frill-necked lizard",
    group: "reptiles",
    image: "https://images.unsplash.com/photo-1612880176575-a85f07d1c7c0?w=400",
    description:
      "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree",
    diet: "Small insects and spiders",
    habitat: "Forests, woodlands, and suburban gardens",
    size: "30-60 cm long, 300-500g",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Hawksbill Turtle",
    group: "reptiles",
    image: "https://images.unsplash.com/photo-1599476788216-c85904b8a1c8?w=400",
    description:
      "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length",
    habitat: "other animals (sponges & jellyfish), sea plants",
    size: "70-95 cm long including tail, 500-800g",
    lifespan: "10-20 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Perentie",
    group: "reptiles",
    image: "https://images.unsplash.com/photo-1561690736-a8a552a71420?w=400",
    description:
      "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    diet: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    habitat: "Rivers, swamps, estuaries, and coastal waters",
    size: "4-7 meters long, 400-1000 kg",
    lifespan: "70-100 years",
    conservation: "Least Concern",
  },
];

const ANIMALS = [...BIRDS, ...MAMMALS, ...REPTILES];
=======
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
>>>>>>> b2d515b (side bar and main added)
