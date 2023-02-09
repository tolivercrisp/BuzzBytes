// Course === User

// Student === Thought

// Assignment === Reaction


const connection = require('../config/connection');
const { User, Thought } = require('../models');
const reactionSchema = require('../models/Reaction');
const { getRandomUsers, getRandomThoughts, getRandomReactions, userArray } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('NoSQL connected! Nice!');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

//   Drop existing reactions
  await Reaction.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 20 times -- add thoughts to the thoughts array
  for (let i = 0; i < 20; i++) {
    // Get some random reaction objects using a helper function that we imported from ./data
    const thoughtText = getRandomThoughts(20)
    const username = getRandomUsers(1);
    const reactions = getRandomReactions(5);

    thoughts.push({
      thoughtText,
      username,
      reactions,
    });
  }

    // Add USERS to the collection and await the results
    await User.collection.insertMany({
        username: getRandomUsers,
        email: `${this.username}@gmail.com`,
        thoughts: [...thoughts],
        friends: getRandomUsers(10),
      });
    

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});