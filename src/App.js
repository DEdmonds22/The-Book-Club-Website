import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import { getUser } from "./utilities/users-service/users-service";
import { BookShelf } from "./pages/BookShelf/BookShelf";
import { getBookShelf } from "./utilities/books-service/book-api";

function App() {
  const [user, setUser] = useState(getUser());
  const [bookShelf, setBookShelf] = useState();
  const [bookAdded, setBookAdded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        try {
          if (user) {
            const books = await getBookShelf(user._id);
            console.log(books);
            setBookShelf(books);
          }
        } catch (error) {
            console.error("Error fetching results ", error);
        };
    };

    fetchData();
    console.log(bookShelf)
}, [user, bookAdded]);
console.log(bookShelf)

  return (
    <div className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage user={user} bookShelf={bookShelf} />} />
          <Route path="/search-results/" element={<SearchResults setBookAdded={setBookAdded} />} />
          <Route path="/book-shelf/" element={<BookShelf bookShelf={bookShelf} setBookShelf={setBookShelf} />} />
        </Routes>
      </> :
      <LandingPage setUser={setUser} />}
    </div>
  );
}

export default App;