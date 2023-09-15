import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      { user ?
      <>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
        </Routes>
      </> :
      <LandingPage setUser={setUser} />}
    </div>
  );
}

export default App;
