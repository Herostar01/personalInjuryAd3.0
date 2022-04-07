const mongoose = require("mongoose");

const ProspectSchema = new mongoose.Schema({
    one : {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    two: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    three: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    four: {
        type: String
    },
    five: {
        type: String
    },
    six: {
        type: String
    },
    seven: {
        type: String
    },
    eight: {
        type: String
    },
    nine: {
        type: String
    },
    ten: {
        type: String
    }

}, {timestamps: true});

// make the Pet schema and export
const Prospect = mongoose.model("Prospect", ProspectSchema);
module.exports = Prospect; 