const router = require('express').Router();

const {
    // /api/users
    getUsers,
    createUser,
    // /api/users/:userId
    getSingleUser,
    updateUser,
    deleteUser,
    // api/users/:userId/friends/:friendId
    addNewFriend,
    deleteFriend,
} = require("../../controllers/userController");

// Routes that only need to find '/api/users'
router
    .route('/')
    .get(getUsers)
    .post(createUser);

// Routes that use the parameter 'userId'
router
    .route('/:userId')
    // get a single user by its `_id` and populated thought and friend data
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// Routes that use two parameters -- ':userId' and ':friendId'
router
    .route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteFriend);

module.exports = router;