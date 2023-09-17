import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as usersService from "../utilities/users-service";

export default function NavBar({ user, setUser }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const openMenu = () => {
        setMenuIsOpen((prev) => !prev);
    };
    const closeMenu = () => {
        setMenuIsOpen(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = `/search-results?search=${searchTerm}`
    };

    const handleLogOut = () => {
        usersService.logOut();
        setUser(null);
    }

    return (
        <header>
            <div>
                <div id="navBar">
                    <div className="logo">
                        <Link to="/" onClick={closeMenu}>
                            <p>The</p>
                            <p>Book</p>
                            <p>Club</p>
                        </Link>
                    </div>

                    <h3>Welcome {user.firstName}!</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="search-bar">
                            <input
                            type="text"
                            placeholder="Choose Your Book!"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // updates the searchTerm as the user types
                            />
                            <button type="submit">Enter</button>
                        </div>
                    </form>

                    <Link to="" onClick={handleLogOut}>
                        <img src="/icons8-user-48.png"/>
                    </Link>

                    <div className="hamburger" onClick={openMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
            </div>
                
                <div className={`nav-menu-container ${menuIsOpen ? "active" : ""}`}>
                    <ul className="nav-menu">
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/" 
                            className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/profile" className="nav-link"> Profile - TBA</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/book-shelf" className="nav-link">Book Shelf - TBA</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/full-library" className="nav-link">Full Library - in construction</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/book-clubs" className="nav-link">Book Clubs - TBA</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/settings" className="nav-link">Settings - TBA</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

/*
- "The Book Club" logo
- search bar
- user logo
- hamburger menu
*/