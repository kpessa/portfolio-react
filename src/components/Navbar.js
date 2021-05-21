import { useState } from 'react';

import './Navbar.css';
import logo from '../images/logo.png';

function Navbar({ currentPage, setCurrentPage }) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        <img src={logo} alt="" />
        <h1>KP</h1>
      </a>
      <ul className={`nav__links ${toggle && 'open'}`}>
        <li>
          <a href="#about-me" onClick={() => setCurrentPage('about-me')}>
            About Me
          </a>
        </li>
        <li>
          <a href="#work" onClick={() => setCurrentPage('portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setCurrentPage('resume')}>
            Contact
          </a>
        </li>
      </ul>
      <svg onClick={() => setToggle(!toggle)} viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="15"></rect>
        <rect y="30" width="100" height="15"></rect>
        <rect y="60" width="100" height="15"></rect>
      </svg>
    </nav>
  );
}

export default Navbar;
