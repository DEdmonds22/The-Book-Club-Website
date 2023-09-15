import { Link } from "react-router-dom"

export default function HomePage({user}) {
    return (
        <main id="home-page">
        <main id="container">
            <div class="bookOfTheMonth top">
                <Link to="/book-of-the-month" >
                    <h2>Book of The Month</h2>
                </Link>
            </div>

            <div class="newlyCreatedClubs top">
                <Link to="/newly-created-clubs" >
                    <h2>Newly Created Clubs!</h2>
                </Link>
            </div>

            <div class="profile">
                <Link to="/profile" >
                    <h2>Profile</h2>
                </Link>
            </div>

            <div class="bookClubDiscussionBoard top">
                <Link to="/discussion-board" >
                    <h2>Book Club Discussion Board</h2>
                </Link>
            </div>

            <div class="recommendedBooks">
                <Link to="/recommended-books" >
                    <h2>Recommended Books</h2>
                </Link>
            </div>

            <div class="hosting bottom">
                <Link to="/hosting" >
                    <h2>Hosting</h2>
                </Link>
            </div>

            <div class="upcommingEvents bottom">
                <Link to="/upcomming-events" >
                    <h2>Upcomming Events</h2>
                </Link>
            </div>
        </main>
    </main>
    )
}