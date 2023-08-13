const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    cart: [
        {
            id: {
                type: Schema.Types.ObjectId,
                ref: 'Products'
            },
            quantity: Number
        }
    ]
});

module.exports = mongoose.model('Users', userSchema);