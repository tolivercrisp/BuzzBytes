const userArray = [
    'reekinator',
    'CosmicCometRider',
    'StarryNightStargazer65',
    'PotatoPerson22',
    'RainbowRhapsody',
    'SkywardSoarer',
    'LunarLullaby',
    'FireFlameFlyer',
    'SolarSailor',
    'PotatoGazer34',
    'CosmicBoy',
    'StarStreamStalker',
    'MoonlitMelody',
    'FireFlickerFlyer',
    'SunburstSailor123',
    'GalacticGlider',
    'CosmicCruiser',
    'StarSprayStargazer',
    'MoonRisingRambler',
    'FireFlyFrenzy50',
    'SolarSystemSoarer',
  ];

const thoughtArray = [
    "Feeling grateful for this beautiful day!",
    "Had a blast exploring the city today!",
    "Just finished an intense workout and feeling great!",
    "Loving this new album!",
    "Had a delicious dinner with friends last night.",
    "This scenic drive is taking my breath away!",
    "Just started reading a captivating book.",
    "Enjoying a much-needed break from the hustle and bustle.",
    "Had so much fun at the beach today!",
    "Just tried a new workout class and it was amazing.",
    "Had a great time at the concert last night.",
    "This beautiful sunset is making my day.",
    "Just watched a fantastic movie and can't stop thinking about it.",
    "Had a lovely picnic with my family today.",
    "This town is so charming!",
    "Just started a new hobby and it's so much fun!",
    "Had a wild night out with friends!",
    "This gorgeous weather is perfect for a picnic.",
    "Just listened to a thought-provoking podcast episode.",
]

const reactionArray = [
    '😀',
    '😂',
    '😨',
    '🤮',
    '🤡',
    '😎',
    '😴',
    '😭',
    '🧐',
    '😍',
];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUsers = () =>
    `${getRandomArrItem(userArray)}`;

  // Function to generate random THOUGHTS that we can add to USER object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtArray),
        username: getRandomArrItem(usernameArray),
      });
    }
    return results;
  };
  
  // Function to generate random REACTIONS that we can add to THOUGHT object.
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactionArray),
        username: getRandomArrItem(usernameArray),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsers, getRandomThoughts, getRandomReactions, userArray };
  

