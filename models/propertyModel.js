const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
    propertyTitle: {
        type: String,
        required: true
    },
    rentalPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    propertyType: {
        type: String,
        required: true
    },
    houseRules: {
        type: Array,
        of: String
    },
    amentities: {
        type: Array,
        of: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bestSeller: {
        type: Boolean,
        required: true
    },
    propertyPhoto: {
        type: String
    }
});


const propertyModel = mongoose.model('Property', propertySchema);
module.exports = propertyModel;