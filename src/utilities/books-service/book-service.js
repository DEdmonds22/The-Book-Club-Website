// need a function to get user's book shelf
    // this will lead to the book-api to send a GET request to the router
        // the right route will get the embeded bookSchema
    // respond - with the book schema data

// need a function to add book to user's bookShelf
    // this will lead to book-api to send the POST request to the router
        // the right route will create a book in the bookSchema

// need a function to delete book from user's book shelf
    // this will get the user's book shelf by using the get user's book function, which will return the book schema
        // this will find the one book by the key and/or name
            // this will lead to the book-api and send a DELETE request for the book
        // respond - with the book schema data

import * as bookAPI from "../books-service/book-api";
import { getUser } from "../users-service";

export async function addBook(bookDetails) { // info is passed down - working
    const user = getUser();
    bookDetails.addedByUser = user._id;
    console.log(bookDetails)
    return await bookAPI.addBook(bookDetails);
};

export async function getBookShelf() {
    const user = getUser();
    return await bookAPI.getBookShelf(user._id);
}