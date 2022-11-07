import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {

    const NavStyle = {
        color: 'white'
    };


  return (
    <nav>
      <h1>Travel Log</h1>
        <ul className='nav-links'>
            <Link style={NavStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={NavStyle} to='/users'>
                <li>Travelers</li>
            </Link>
            <Link style={NavStyle} to='/trips'>
                <li>Trips</li>
            </Link>
            <Link style={NavStyle} to='/destinations'>
                <li>Destinations</li>
            </Link>
        </ul>
    </nav>
  );
}

export default NavBar;