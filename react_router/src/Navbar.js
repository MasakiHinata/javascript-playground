import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (<div>
        <Link to="/">Home</Link>
        <Link to="/profile?name=Yahoo">Profile(Alice)</Link>
        <Link to="/profile/bob">Profile(Bob)</Link>
    </div>)
}