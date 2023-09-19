import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../SearchResults/searchResults.css";
import bookLibraryResults from "../../utilities/results-service/results-api";
import { addBook } from "../../utilities/books-service/book-service";

export default function SearchResults({setBookAdded}) {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("search") || "";
    const [num, setNum] = useState("15")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await bookLibraryResults(searchTerm, num);
                console.log(data.items)
                setResults(data.items);
            } catch (error) {
                console.error("Error fetching results ", error);
            };
        };

        fetchData();

    }, [searchTerm, num]);

    const handleClick = async (id, title, authors, description, categories, img) => {
        const bookInfo = {
            id,
            title,
            authors, 
            description, 
            categories, 
            img
        };

        await addBook(bookInfo)
            .then(() => {
                setBookAdded(true);
            })
            .catch(error => {
                console.error(error)
            })
    };

    const itemsIncreased = () => setNum("30");
    
    return (
        <div>
            <h1>Search Results</h1>
            <div className="book-con">
                {results.map((book) => (
                <div key={book.id} className="book" >
                    <h2>{book.volumeInfo.title}</h2>
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail} />
                    <p>by: {book.volumeInfo.authors?.join(", ")}</p>
                    <button onClick={() => handleClick(
                        book.id, 
                        book.volumeInfo.title, 
                        book.volumeInfo.authors, 
                        book.volumeInfo.description, 
                        book.volumeInfo.categories, 
                        book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail :  null)}>Add to Bookshelf</button>
                </div>
                ))}
            </div>
            <button onClick={itemsIncreased}>Show More</button>
        </div>
    );
};