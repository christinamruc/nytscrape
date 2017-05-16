// Require mongoose
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
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
    scrapedDate: {
        type: Date,
        default: Date.now
    }
});

ArticleSchema.plugin(uniqueValidator);

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;