import { Link } from "react-router-dom";
import styles from "../LandingPage/LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landingPage">
            <div className="bio container">
                <h1>The Book Club</h1>
                <main>
                    < br/>
                    <h3>Welcome to The Book Club, where avid readers unite to celebrate their shared love for literature. Immerse yourself in a vast ocean of books, and become part of a thriving community built around your passion. Here, you'll never miss a beat and stay informed about the latest book releases, emerging authors, exclusive meet-and-greets, and exciting literary discounts.</h3>
                    < br/>
                    <h3>Whether you're an enthusiastic solo reader or a book club aficionado, our platform offers endless possibilities. Join or create a book club and engage in thought-provoking discussions with like-minded individuals. Curate your personal bookshelf, effortlessly categorize your solo reads for optimal organization, and earn achievements for every book you conquer. For our book club hosts, there are even more rewards and opportunities awaiting you!</h3>
                    < br/>
                    <h3>The Book Club is your gateway to a world where literature comes to life, and connections with fellow bookworms flourish. Start your literary journey with us today.</h3>
                </main>
            </div>

            <div className="forms container">
                <Link to="/signUpForm" className="btn" >Sign Up</Link>
                |
                <Link to="/loginForm" className="btn">Login</Link>
            </div>
        </div>
    )
}