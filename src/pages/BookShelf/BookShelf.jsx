import { useEffect } from "react";
import { getBookShelf } from "../../utilities/books-service/book-service"
import styles from "../BookShelf/BookShelf.css"

export function BookShelf({bookShelf, setBookShelf}) {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const books = await getBookShelf();
                console.log(books);
                setBookShelf(books);
            } catch (error) {
                console.error("Error fetching results ", error);
            };
        };

        fetchData();
    }, [])

    return (
        <div className="bookShelf-cont">
            <h1>Your Bookshelf</h1>
            < br />
            <div className="book-con">
                {bookShelf && bookShelf.length > 0 ?
                    (bookShelf.map(book => {
                        return (
                            <div key={book.id} className="book" >
                                <h2>{book.title}</h2>
                                <img src={book.img} />
                                <p>by: {book.authors?.join(", ")}</p>
                            </div>
                        )
                    })) :
                    <p>No Books on Your Shelf</p>
                }
            </div>
        </div>
    )
}