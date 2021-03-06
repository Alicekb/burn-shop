const CATEGORY_DESCRIPTIONS = {
  adventuring:
    "No adventurer can Survive Olaxis for long without the proper Equipment. This section provides a description of Adventuring Gear available for sale around the galaxy. While adventurers rely on Weapons and armor to live through Combat encounters, the rest of their Equipment is just as important for surviving the perilous life they choose in Olaxis. If an object requires an action to use, player Characters must make a skill roll during Combat to gain the benefit of the item.",
  armor:
    "Defense is an important part of adventuring. Armor suits and personal Shield generators allow adventurers the Protection they need to Survive violent conflict and harsh environments. Armor suits are heavy mechanical suits custom made to fit the person buying them. Each is expensive and requires a month to create—after payment is given upfront.Personal Shield generators are 3-inch-diameter badges that can be pinned to Clothing, harmlessly attached to the skin, or carried. When a powerful, compact Plasma Power Cell is installed in the badge, a force field is generated around the wearer, blocking physical attacks (such as those made with weapons) while still allowing the wearer to physically interact with their environment.",
  misc:
    "Though existence is coming to an end Olaxans take time to go to work, relax, and pursue Hobbies. All manner of games are enjoyed in Olaxis, especially by crews of adventurers on long flights together. Those who enjoy physical activity and want to stay fit use athletic supplies. Basic cameras take pictures and video and post or stream them to the Complenet through manual functionality. Clothing comes in a variety of shapes and sizes to fit a galaxy’s worth of fashions. Though most homes and spacecraft are equipped with magic devices that can make most any dish, there are those who still enjoy cooking and perfecting new recipes. With so many cultures in Olaxis the number of musical instruments is nearly infinite.",
  weapons:
    "Sometimes the best defense is a good Laser Pistol. For the heroes of Olaxis Weapons are necessary tools, though some only use them as a last resort. Melee Weapons are used in hand-to-hand Combat and often use the Melee Skill to attack and defend. Melee Weapons without the ranged quality can be hurled to make ranged attacks, provided your target is within 5 squares of you when the attack is made. Ranged Weapons can be fired, launched, or thrown at enemies. These Weapons often use the Ranged Skill to attack.",
  vehicles:
    "Cars, jet bikes, boats, and submersibles come in all types of sizes and from a variety of manufacturers as well as from independent artisans. A vehicle with the Weapons quality has the Weapons listed in parenthesis mounted to the vehicle. Any creature riding on the vehicle can activate these Weapons, but once a creature uses a vehicle’s weapon, no other creature can use that weapon until the start of the next round of Combat. These are just a few of the ways Olaxans get around on the surface of planets, moons, and asteroids.",
};

const ADS = [
  {
    title: "Basic and Advanced Cameras",
    cloudFilename: "new-camera.png",
    alt: "DSLR camera facing upwards",
    description:
      "Check out all the latest advancements in cameras from the Good Smiles company.",
  },
  {
    title: "Weapons",
    cloudFilename: "toy-gun.png",
    alt: "Gun from arcade machine",
    description: "Check out all amazing weapons from the Senchal Overguild.",
  },
  {
    title: "Portable Generators",
    cloudFilename: "generator.png",
    alt: "gas generator from a movie set",
    description:
      "Take a look at our entire selection of dynamic generators from the Wessh-Ozobny series!",
  },
  {
    title: "Medicine & Health",
    cloudFilename: "project-meds.png",
    alt: "small yellow pack next to a hiking bottle",
    description:
      "Take a look at our entire selection of medicines from the Egan  Overguild!",
  },
];

const SLIDER_IMAGES = [
  {
    imgUrl: "coffee-station.jpg",
    alt: "Coffee station cups of various colors",
  },
  {
    imgUrl: "salvaing.jpg",
    alt: "Savaging Services by Wessh Overguild over a broken plane",
  },
  {
    imgUrl: "camera.jpg",
    alt: "Advanced Camera red series next to red drone",
  },
  {
    imgUrl: "cosmos.jpg",
    alt: "Cosmos Interceptor Spaceship by Kosma Overguild and A.C.E Foundation",
  },
];

export { CATEGORY_DESCRIPTIONS, ADS, SLIDER_IMAGES };
