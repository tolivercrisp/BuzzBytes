const User = require('./User');
const Thought = require('./Thought')

module.exports = { User, Thought};

// * Reactions is not a model. Instead, it is used
// as the `reaction` field's sub document schema 
// in the `Thought` model.