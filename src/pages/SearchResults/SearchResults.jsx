import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import searchResults from "../../components/SearchResults/SearchResults";
import bookLibraryResults from "../../utilities/results-api";

export default function SearchResults({setBookList}) {
    const location = useLocation();
    const quaryParams = new URLSearchParams(location.search);
    const searchTerm = quaryParams.get("search") || "";
    const [results, setResults] = useState([]);
    const [num, setNum] = useState("15")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await bookLibraryResults(searchTerm, num);
                console.log(data.items)
                setResults(data.items);
            } catch (error) {
                console.error("Error fetching results", error)
            }
        }

        fetchData();
    }, [searchTerm, num])

    /*
    const add = (id, title, authors, description, category, img) => {
        props.addBook(id, title, authors, description, category, img)
        console.log(id)
        console.log(title)
        console.log(authors)
        console.log(description)
        console.log(category)
      };*/
    
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
                </div>
            ))}
                {/*
                {results.map((book) => (
                    <div key={book.id} className="book" >
                    <h2>{book.volumeInfo.title}</h2>
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail} />
                    <p>by: {book.volumeInfo.authors?.join(", ")}</p>
                    {
                    <button onClick={() => add(book.id, book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.categories, book.volumeInfo.imageLinks.smallThumbnail)}>Add to Bookshelf</button>
                </div>
                    ))}*/}
            </div>
                    {/*<button onClick={itemsIncreased}>Show More</button>*/}
        </div>
    )
}