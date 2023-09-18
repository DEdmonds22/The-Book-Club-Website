import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../SearchResults/searchResults.css";
import { addBook } from "../../utilities/books-service/book-service";

export default function SearchResults() {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("search") || "";
    const [num, setNum] = useState("15")

    const fetchSearchResults = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${num}`);
            const data = await response.json();
            setResults(data.items)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchSearchResults()
    }, [num]);

    const handleClick = (id, title, authors, description, categories, img) => {
        const bookInfo = {
            id,
            title,
            authors, 
            description, 
            categories, 
            img
        };

        addBook(bookInfo)
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