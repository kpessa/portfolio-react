import { useState } from 'react';

import './Navbar.css';
import logo from '../images/logo.png';

function Navbar({ currentPage, setCurrentPage }) {
  const [toggle, setToggle] = useState(false);

  const links = ['about-me', 'portfolio', 'resume', 'contact'].map((page, i) => {
    return (
      <li key={i}>
        <a key={`a${i}`} href={`#${page}`} onClick={() => setCurrentPage(page)}>
          {page}
        </a>
      </li>
    );
  });

  return (
    <nav className="nav">
      <a href="/" className="nav__logo" onClick={() => setCurrentPage('')}>
        <img src={logo} alt="" />
        <h1>KP</h1>
      </a>
      <ul className={`nav__links ${toggle && 'open'}`}>{links}</ul>
      <svg onClick={() => setToggle(!toggle)} viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="15"></rect>
        <rect y="30" width="100" height="15"></rect>
        <rect y="60" width="100" height="15"></rect>
      </svg>
    </nav>
  );
}

export default Navbar;
