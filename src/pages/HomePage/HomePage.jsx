import { Link } from "react-router-dom";
import styles from "../HomePage/homePage.css"

export default function HomePage({user, bookShelf}) {
    return (

        <div>
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
                        <div className="img-placeholder">
                            <p>Profile Picture Placeholder</p>
                        </div>
                        &nbsp;
                        <Link to="/book-shelf" className="subSection">
                            <h4>Bookshelf</h4>
                        </Link>
                        <div className="book-cont">
                            <section className="bookshelf">
                                {bookShelf && bookShelf.length > 0 ?
                                (bookShelf.map(book => {
                                    return (
                                        <div key={book.id} className="book" >
                                            <p>{book.title}</p>
                                            <img src={book.img} />
                                            <p>by: {book.authors?.join(", ")}</p>
                                        </div>
                                    )
                                })) :
                                <p>No Books on Your Shelf</p>
                                }
                            </section>
                            <Link to="" className="subSection">
                                <h4>Book Clubs</h4>
                            </Link>
                            <div className="hosting-cont">
                                <h4>- Hosting -</h4>
                                <p>Title of Club</p>
                                    &nbsp;
                                <p>Title of Club</p>
                                    &nbsp;
                                <p>Title of Club</p>
                            </div>
            
                            <div className="participation">
                                <h4>- Participating -</h4>
                                <div className="club-cont">
                                    <p>Title of Club</p>
                                    <h6>name of host</h6>
                                </div>
                                    &nbsp;
                                <div className="club-cont">
                                    <p>Title of Club</p>
                                    <h6>name of host</h6>
                                </div>
                                    &nbsp;
                                <div className="club-cont">
                                    <p>Title of Club</p>
                                    <h6>name of host</h6>
                                </div>
                            </div>
                        </div>
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
                <br />
                <button>Name Change</button>
            </main>
        </div>
    )
}