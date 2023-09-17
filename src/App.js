import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import { getUser } from "./utilities/users-service";
import { BookShelf } from "./pages/BookShelf/BookShelf";

function App() {
  const [user, setUser] = useState(getUser());
  const [bookList, setBookList] = useState([]); // will be passed to bookshelf page, when it's created. It will list all books added to bookshelf.

  const addBook = (id, title,  authors, description, category, img) => {
    const newRead = {
      key:id,
      title: title,
      authors: authors,
      description: description,
      category: category,
      img: img
    }
    setBookList(prev => [...prev, newRead])
  }

/*
  useEffect(()=>{
    console.log(bookList)
  }, [bookList]);
*/
  return (
    <div className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage user={user} bookList={bookList} />} />
          <Route path="/search-results/" element={<SearchResults addBook={addBook} />} />
          <Route path="/book-shelf/" element={<BookShelf bookList={bookList} />} />
        </Routes>
      </> :
      <LandingPage setUser={setUser} />}
    </div>
  );
}

export default App;