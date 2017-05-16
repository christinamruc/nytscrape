// Require mongoose
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var SavedSchema = new Schema({
    // title is a required string
    title: {
        type: String,
        required: true
    },
    // link is a required string
    link: {
        type: String,
        unique: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    savedDate: {
        type: Date,
        default: Date.now
    },
    // This only saves one note's ObjectId, ref refers to the Note model
    notes: {
        type: Object,
        required: false
    }
});

SavedSchema.plugin(uniqueValidator);
// Create the Article model with the ArticleSchema
var Saved = mongoose.model("Saved", SavedSchema);

// Export the model
module.exports = Saved;