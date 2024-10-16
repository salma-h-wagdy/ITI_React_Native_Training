import { Link } from 'react-router-dom';
import '../App.css';
const NavBar = () => {
    return (
        <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/add-movie">Add Movie</Link>
    </nav>
    );
}

export default NavBar;
