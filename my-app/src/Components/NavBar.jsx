import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import Logo from '../Requirements/logo.png';
 import './NavBar.css';


const NavBar = () => {
  return (
    <div className='NavBarmain'>
      <div className='Logo' id='Logo'>
        <img className='logoimg' src={Logo} alt="Error" />
      </div>

      {/* NavBar Links */}
      <div className='NavRouting'>
        <ul className='nvbr'>
          <li>
            <Link className="active" to="/">Home</Link>
          </li>
          <li>
            <Link to="/roadmap">RoadMap</Link>
          </li>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          <li>
            <Link to="/codelab">CodeLab</Link>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
