const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        required: "Title is required", // required: true
        type: String,
        minlength: 4,
        maxlength: 150
    },
    body: {
        required: "Body is required", // required: true
        type: String,
        minlength: 4,
        maxlength: 2000
    }
});

module.exports = mongoose.model("Post", postSchema);