const mongoose =  require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: false
    },
    imageUrl:{
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('Products',productSchema);