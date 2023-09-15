import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import { getUser } from "./utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  const [bookList, setBookList] = useState([]); // will be passed to bookshelf page, when it's created. It will list all books added to bookshelf.

  return (
    <div className="App">
      { user ?
      <>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/searchResults/" element={<SearchResults setBookList={setBookList} />} />
        </Routes>
      </> :
      <LandingPage setUser={setUser} />}
    </div>
  );
}

export default App;
