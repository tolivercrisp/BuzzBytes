const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            maxLength: 30,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            maxLength: 50,
            // 'match' uses a regex email pattern to validate if email input is a valid email
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 
        },
        // Array of `_id` values referencing the `Thought` model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        // Array of `_id` values referencing the `User` model (self-reference) 
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtual: true,
        },

    },
);

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return `${this.friends.length}`;
    });


const User = model('user', userSchema);

module.exports = User;