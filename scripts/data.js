const BIRDS = [
  {
    name: "Kookaburra",
    group: "birds",
    image: "https://images.unsplash.com/photo-1597305877032-0668c2d2a6d4?w=400",
    description:
      "The kookaburra is a large kingfisher famous for its loud, distinctive call that sounds like human laughter. This iconic Australian bird is often heard at dawn and dusk, earning it the nickname 'bushman's alarm clock'. Despite being kingfishers, kookaburras primarily hunt terrestrial prey rather than fish. They are territorial birds that mate for life and live in family groups. Their powerful beaks can tackle prey as large as snakes.",
    diet: "Insects, small reptiles, mice, and snakes",
    habitat: "Eucalyptus forests, woodlands, and parks",
    size: "39-42 cm long, wingspan 56 cm, 300-500g",
    lifespan: "Up to 20 years in captivity",
    conservation: "Least Concern",
  },
  {
    name: "Rainbow Lorikeet",
    group: "birds",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400",
    description:
      "Rainbow lorikeets are spectacularly colorful parrots with vibrant plumage featuring red, blue, green, yellow, and orange. These social and noisy birds travel in flocks and are commonly seen in urban areas. They have specialized brush-tipped tongues for feeding on nectar and pollen. Rainbow lorikeets are intelligent and playful, known for their acrobatic flying and hanging upside down while feeding. They form strong pair bonds and can be quite vocal.",
    diet: "Nectar, pollen, fruits, and blossoms",
    habitat: "Rainforests, woodlands, and urban gardens",
    size: "25-30 cm long, 75-157g",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern",
    emoji: "🦜",
  },
  {
    name: "Emu",
    group: "birds",
    image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400",
    description:
      "The emu is Australia's largest bird and the second-largest bird in the world by height. These flightless birds are excellent runners, capable of reaching speeds up to 50 km/h. Emus have strong legs with three toes and sharp claws that they use for defense. They are curious and docile birds that travel great distances to find food and water. Male emus are responsible for incubating eggs and raising chicks, a role they take very seriously.",
    diet: "Plants, seeds, flowers, insects, and fruits",
    habitat: "Grasslands, savannas, and open forests",
    size: "1.5-1.9 meters tall, 18-60 kg",
    lifespan: "10-20 years in wild, up to 35 years in captivity",
    conservation: "Least Concern",
    emoji: "🦃",
  },
];

const MAMMALS = [
  {
    name: "Kangaroo",
    group: "mammals",
    image: "https://images.unsplash.com/photo-1623948977589-e2a60d5e1b02?w=400",
    description:
      "Kangaroos are iconic Australian marsupials known for their powerful hind legs and distinctive hopping locomotion. These remarkable animals can leap up to 3 meters high and 8 meters long in a single bound. They are herbivores that primarily feed on grasses and are most active during dawn and dusk. Kangaroos live in groups called mobs and are found throughout mainland Australia.",
    diet: "Grasses, herbs, and leaves",
    habitat: "Grasslands, woodlands, and open forests",
    size: "1.3-1.6 meters tall, 40-90 kg",
    lifespan: "6-8 years in wild, up to 20 years in captivity",
    conservation: "Least Concern",
    emoji: "🦘",
  },
  {
    name: "Koala",
    group: "mammals",
    image: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=400",
    description:
      "Koalas are tree-dwelling marsupials famous for their cute appearance and sleepy nature. They spend most of their day sleeping (up to 20 hours) to conserve energy due to their low-nutrient eucalyptus diet. Koalas have specialized adaptations including strong limbs for climbing and a highly developed sense of smell to select the most nutritious eucalyptus leaves. Despite their teddy bear-like appearance, they are not bears but marsupials.",
    diet: "Eucalyptus leaves exclusively",
    habitat: "Eucalyptus forests and woodlands",
    size: "60-85 cm long, 4-15 kg",
    lifespan: "10-12 years in wild, up to 18 years in captivity",
    conservation: "Vulnerable",
    emoji: "🐨",
  },
  {
    name: "Wombat",
    group: "mammals",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400",
    description:
      "Wombats are sturdy, burrowing marsupials with powerful claws and rodent-like teeth. They are expert diggers, creating extensive tunnel systems that can reach up to 30 meters long. Wombats have backwards-facing pouches to prevent dirt from entering while digging. Their cube-shaped droppings are unique in the animal kingdom and are used to mark territory. Despite their chunky appearance, wombats can run up to 40 km/h in short bursts.",
    diet: "Grasses, roots, bark, and fungi",
    habitat: "Forests, mountains, and heathlands",
    size: "80-120 cm long, 20-35 kg",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern to Critically Endangered (varies by species)",
    emoji: "🐻",
  },
];

const REPTILES = [
  {
    name: "Blue-Tongue Lizard",
    group: "reptiles",
    image: "https://images.unsplash.com/photo-1612880176575-a85f07d1c7c0?w=400",
    description:
      "Blue-tongue lizards are large skinks named for their distinctive bright blue tongue, which they display as a defensive mechanism to startle predators. These docile reptiles are popular in Australian gardens where they help control pest populations. They have smooth scales, short legs, and a stout body. Blue-tongues are relatively slow-moving and prefer to use intimidation rather than fleeing from threats. They give birth to live young rather than laying eggs.",
    diet: "Snails, insects, flowers, and berries",
    habitat: "Forests, woodlands, and suburban gardens",
    size: "30-60 cm long, 300-500g",
    lifespan: "15-20 years in wild, up to 30 years in captivity",
    conservation: "Least Concern",
    emoji: "𓆈 ",
  },
  {
    name: "Frilled Lizard",
    group: "reptiles",
    image: "https://images.unsplash.com/photo-1599476788216-c85904b8a1c8?w=400",
    description:
      "The frilled lizard is famous for its impressive defensive display where it opens a large frill of skin around its neck, making it appear much larger and more threatening. When startled, they also open their mouths wide, hiss, and may run bipedally on their hind legs. These tree-dwelling lizards spend most of their time in trees and descend to hunt or move between trees. Their frill is supported by cartilaginous rods and is normally folded against the body.",
    diet: "Insects, spiders, and small vertebrates",
    habitat: "Tropical woodlands and dry forests",
    size: "70-95 cm long including tail, 500-800g",
    lifespan: "10-20 years in captivity",
    conservation: "Least Concern",
    emoji: "🦎",
  },
  {
    name: "Saltwater Crocodile",
    group: "reptiles",
    image: "https://images.unsplash.com/photo-1561690736-a8a552a71420?w=400",
    description:
      "The saltwater crocodile is the largest living reptile and one of the most dangerous predators in the world. These apex predators have the strongest bite force ever measured in any living animal. Despite their name, they inhabit both saltwater and freshwater habitats. Saltwater crocodiles are patient hunters that use a death roll technique to subdue prey. They can live for over 70 years and continue growing throughout their lives. These crocodiles are territorial and have been known to travel long distances through ocean waters.",
    diet: "Fish, birds, mammals, and other reptiles",
    habitat: "Rivers, swamps, estuaries, and coastal waters",
    size: "4-7 meters long, 400-1000 kg",
    lifespan: "70-100 years",
    conservation: "Least Concern",
    emoji: "🐊",
  },
];

const ANIMALS = [...BIRDS, ...MAMMALS, ...REPTILES];
