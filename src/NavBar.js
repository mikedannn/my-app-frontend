import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {

    const NavStyle = {
        color: 'white'
    };


  return (
    <nav>
      <h1>My Travel Log</h1>
        <ul className='nav-links'>
            <Link style={NavStyle} to='/about'>
                <li>About</li>
            </Link>
            {/* <Link style={NavStyle} to='/login'>
                <li>Login</li>
            </Link>
            <Link style={NavStyle} to='/trips'>
            <   li>trips</li>
            </Link> */}
        </ul>
    </nav>
  );
}

export default NavBar;