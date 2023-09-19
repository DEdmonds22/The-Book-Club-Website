import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import { getUser } from "./utilities/users-service";
import { BookShelf } from "./pages/BookShelf/BookShelf";
import { getBookShelf } from "./utilities/books-service/book-api";
// import { addBook, getBookShelf } from "./utilities/books-service/book-service";

function App() {
  const [user, setUser] = useState(getUser());
  const [bookShelf, setBookShelf] = useState(); // will be passed to bookshelf page, when it's created. It will list all books added to bookshelf. A func from book-api will return full bookshelf and set = to bookList useState?

  return (
    <div className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/search-results/" element={<SearchResults />} />
          <Route path="/book-shelf/" element={<BookShelf bookShelf={bookShelf} setBookShelf={setBookShelf} />} />
        </Routes>
      </> :
      <LandingPage setUser={setUser} />}
    </div>
  );
}

export default App;