const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('🔌 NoSQL connected! 🔌');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // console.info('🌱 Seeding complete! 🌱');
  process.exit(0);
});

// I was confused on how to use this file in my project.
// By the end, I realized I didn't need it for anything besides clearing the database.
// I hope I'm not missing anything here. Everything works as the README.md intended, as far as I can tell

