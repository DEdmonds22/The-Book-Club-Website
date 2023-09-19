import { Link } from "react-router-dom";
import styles from "../HomePage/homePage.css"

export default function HomePage({user, bookShelf}) {
    return (
        <main id="home-page">
        <main id="container">
            <div className="bookOfTheMonth top">
                <Link to="/book-of-the-month" >
                    <h2>Book of The Month</h2>
                </Link>
            </div>

            <div className="newlyCreatedClubs top">
                <Link to="/newly-created-clubs" >
                    <h2>Newly Created Clubs!</h2>
                </Link>
            </div>

            <div className="profile">
                <Link to="/profile" >
                    <h2>Profile</h2>
                </Link>
                &nbsp;
                <Link to="/book-shelf">
                    <h4>Book Shelf</h4>
                </Link>
                {bookShelf && bookShelf.length > 0 ? 
                (bookShelf.map(book => {
                    return (
                        <div key={book.id} className="book" >
                            <h2>{book.title}</h2>
                            <img src={book.img} />
                            <p>by: {book.authors?.join(", ")}</p>
                        </div>
                    )
                })) :
                <p>No Books on Your Shelf</p>
            }
            </div>

            <div className="bookClubDiscussionBoard top">
                <Link to="/discussion-board" >
                    <h2>Book Club Discussion Board</h2>
                </Link>
            </div>

            <div className="recommendedBooks">
                <Link to="/recommended-books" >
                    <h2>Recommended Books</h2>
                </Link>
            </div>

            <div className="hosting bottom">
                <Link to="/hosting" >
                    <h2>Hosting</h2>
                </Link>
            </div>

            <div className="upcommingEvents bottom">
                <Link to="/upcomming-events" >
                    <h2>Upcomming Events</h2>
                </Link>
            </div>
        </main>
    </main>
    )
}