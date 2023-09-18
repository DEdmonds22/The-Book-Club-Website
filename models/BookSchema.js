const { Schema, model } = require("mongoose");

// This will store book info
// Each book will have a list of users who added this specific book to their bookshelf
const bookSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    authors: Array,
    description: String,
    categories: Array,
    img: String,

    addedByUser:  [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, {
    timestamps: true
})

module.exports = model("Book", bookSchema);