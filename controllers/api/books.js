const Book = require("../../models/BookSchema");
const User = require("../../models/user");

const create = async (req, res) => {
const user = req.body.addedByUser
    try {
        Book.findOne({id: req.body.id})
            .then(foundBook => {
                if (foundBook) {
                    if (!foundBook.addedByUser.includes(user)){
                        foundBook.addedByUser.push(user);
                        foundBook.save();
                    } else {
                        console.log("IT'S ALREADY ON YOUR SHELF")
                    }
                } else {
                    Book.create(req.body);
                }
            })
    } catch (error) {
        console.error("errrrr")
    }
}

module.exports = {
    create
}