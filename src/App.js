import { useState } from "react";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      { user ?
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </> :
      <LandingPage />}
    </div>
  );
}

export default App;
