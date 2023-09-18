const Book = require("../../models/BookSchema");

const create = async (req, res) => {
    console.log(req.body)
    const book = Book.create(req.body);
}

module.exports = {
    create
}