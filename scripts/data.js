const BIRDS = [
  {
    name: "Kookaburra",
    group: "birds",
    image: "../images/kookaburra.png",
    description:
      " Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. ",
    food: "Insects, small reptiles, mice, and snakes",
    habitat: "Eucalyptus forests, woodlands, and parks",
    size: "39-42 cm long, wingspan 56 cm, 300-500g",
    lifespan: "Up to 20 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Cassowary",
    group: "birds",
    image: "../images/cassowary.png",
    description:
      "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. ",
    food: "Plants matter like fruit, insects and small animals like mice amd lizards",
    habitat: "Rainforests, woodlands, and urban gardens",
    size: "25-30 cm long, 75-157g",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Cockatoo",
    group: "birds",
    image: "../images/cockatoo.png",
    description:
      "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion.  ",
    food: "Fruit, seeds and other plant material",
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
    image: "../images/echidna.png",
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short.",
    food: " insects such as ants and termites, beetle larvae and worms",
    habitat: "Grasslands, woodlands, and open forests",
    size: "1.3-1.6 meters tall, 40-90 kg",
    lifespan: "6-8 years in wild, up to 20 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Tasmanian Devil",
    group: "mammals",
    image: "../images/tasmanian devil.png",
    description:
      "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. ",
    food: "A predator, then eat meat from other animals such as wallabies and wombats",
    habitat: "Eucalyptus forests and woodlands",
    size: "60-85 cm long, 4-15 kg",
    lifespan: "10-12 years in wild, up to 18 years in captivity",
    conservation: "Vulnerable",
  },
  {
    name: "Quokka",
    group: "mammals",
    image: "../images/quokka.png",
    description:
      "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. I",
    food: " Plant eaters, they munch on shrubs and grasses",
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
    image: "../images/frilled neck lizard.png",
    description:
      "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree",
    food: "Small insects and spiders",
    habitat: "Forests, woodlands, and suburban gardens",
    size: "30-60 cm long, 300-500g",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Hawksbill Turtle",
    group: "reptiles",
    image: "../images/hawksbill_sea_turtle.png",
    description:
      "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length",
    food: "other animals (sponges & jellyfish), sea plants",
    habitat: "other animals (sponges & jellyfish), sea plants",
    size: "70-95 cm long including tail, 500-800g",
    lifespan: "10-20 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Perentie",
    group: "reptiles",
    image: "../images/Perentie.png",
    description:
      "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature.",
    food: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    habitat: "Rivers, swamps, estuaries, and coastal waters",
    size: "4-7 meters long, 400-1000 kg",
    lifespan: "70-100 years",
    conservation: "Least Concern",
  },
];

const ANIMALS = [...BIRDS, ...MAMMALS, ...REPTILES];
