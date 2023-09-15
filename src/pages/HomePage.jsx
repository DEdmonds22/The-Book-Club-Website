export default function HomePage({user}) {
    return (
        <div>
            <h1>The Book Club</h1>
            <h2>Welcome {user.firstName}!</h2>
        </div>
    )
}