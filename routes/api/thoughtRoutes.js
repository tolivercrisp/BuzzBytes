const router = require('express').Router();

const { route } = require('..');
const {
    // /api/thoughts
    getThoughts,
    createThought,
    // /api/thoughts/:thoughtId
    getSingleThought,
    updateThought,
    deleteThought,
    // /api/thoughts/:thoughtId/reactions
    createReaction,
    deleteReaction, 

} = require("../../controllers/thoughtController");

// Routes that only need to find '/api/thoughts'
router
    .route('/')
    .get(getThoughts)
    // (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
    .post(createThought);

// Routes that use the parameter 'thoughtId'
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .delete(deleteThought)
    .put(updateThought);

// Routes that use 'thoughtId' parameter to link to 'reactions'
router
    .route('/api/thoughts/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)



