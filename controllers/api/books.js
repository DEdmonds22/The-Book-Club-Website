const Book = require("../../models/BookSchema");
const User = require("../../models/user");

// updates the user's bookShelf
async function updateUsersBookShelf(foundBook, user) {
    const userToUpdate = await User.findOne({_id: user});
    userToUpdate.bookShelf.push(foundBook._id);
    await userToUpdate.save();
    console.log("Book added to the user's bookShelf/")
}

const create = async (req, res) => {
    const user = req.body.addedByUser;

    try {
        let foundBook = await Book.findOne({id: req.body.id});

        if (foundBook) {
            // checks if the user already added this book
            if (!foundBook.addedByUser.includes(user)){
                    foundBook.addedByUser.push(user);
                    await foundBook.save();
                    console.log("Book added to the shelf.");

                    // updates the user's bookShelf
                    updateUsersBookShelf(foundBook, user);
            } else {
                console.log("The book is already on your shelf")
            }
        } else {
            // creates a new book if it doesn't exist
            foundBook = await Book.create(req.body);
            console.log("New book created.");

            // update the user's bookShelf
            updateUsersBookShelf(foundBook, user);
        }
        res.status(200).send("Book created and added to the user's bookShelf.");
    } catch (error) {
            console.error("Error:", error);
            res.status(500).send("An error occurred.");
        }
}

module.exports = {
    create
}