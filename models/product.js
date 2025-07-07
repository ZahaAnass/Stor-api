const mongosse = require("mongoose");

const productSchema = new mongosse.Schema({
    name: {
        type: String,
        required: [true, "name must be provided"]
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'marcos', 'caressa'],
            message: '{VALUE} is not supported',
        }
    }
})

module.exports = mongosse.model("Product", productSchema)