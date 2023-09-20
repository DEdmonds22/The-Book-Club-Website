const Book = require("../../models/BookSchema");
const User = require("../../models/user");

// updates the user's bookShelf
async function updateUsersBookShelf(foundBook, user) {
    const userToUpdate = await User.findOne({_id: user});
    userToUpdate.bookShelf.push(foundBook._id);
    await userToUpdate.save();
    console.log("Book added to the user's bookShelf/")
};

const getBookShelf = async (req, res) => {
    const userId = req.params.userId;
    try {
        const userInfo = await User.findById(userId).populate("bookShelf");
        if (userInfo) {
            res.status(200).json(userInfo.bookShelf);
        } else {
            console.log("User not found.");
            res.status(404).json({message: "User not found."});
        }
    } catch (error) {
        res.status(500).json({error});
    }
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
        res.status(200).json({ message: "Book created and added to the user's bookShelf."});
    } catch (error) {
        res.status(500).json({error});
    }
};

const deleteBook = async (req, res) => {
    const {bookId, userId} = req.params;
    const currentUser = await User.findById(userId);

    try {
        const selectedBook = await Book.findById(bookId);
        if (!selectedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const updatedAddedByUser = selectedBook.addedByUser.filter(id => id.toString() !== userId);
        
        selectedBook.addedByUser = updatedAddedByUser;
        currentUser.bookShelf = currentUser.bookShelf.filter(book => book.toString() !== bookId);

        await selectedBook.save();
        await currentUser.save();

        res.status(200).json({ message: 'Book removed from bookshelf' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred.' });
    }
}

module.exports = {
    create,
    getBookShelf,
    deleteBook
}