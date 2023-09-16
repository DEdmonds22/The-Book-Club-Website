import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../SearchResults/searchResults.css"

export default function SearchResults(props) {
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
            console.log(data.items)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchSearchResults()
    }, [num]);

    const add = (id, title, authors, description, category, img) => {
        props.addBook(id, title, authors, description, category, img)
        console.log(id)
        console.log(title)
        console.log(authors)
        console.log(description)
        console.log(category)
    };

    const itemsIncreased = () => setNum("30")

    return (
        <div>
        <h1>Search Results</h1>
        <div className="book-con">
            {results.map((book) => (
            <div key={book.id} className="book" >
                <h2>{book.volumeInfo.title}</h2>
                <img src={book.volumeInfo.imageLinks?.smallThumbnail} />
                <p>by: {book.volumeInfo.authors?.join(", ")}</p>
                <button onClick={() => add(book.id, book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.categories, book.volumeInfo.imageLinks.smallThumbnail)}>Add to Bookshelf</button>
            </div>
            ))}
            </div>
            <button onClick={itemsIncreased}>Show More</button>
        </div>
    );
}