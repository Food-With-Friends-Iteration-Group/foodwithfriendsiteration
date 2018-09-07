import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header>
    <nav>
      <ul className="main-navigation">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/sign-up'>Sign Up</Link></li>
        <li><Link to='/find-friends'>Find Friends</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
