import React from "react";
import Navbarstyle from './CSS/navbar.css';

const Navbar = () => {
  return (
    <div className={Navbarstyle.navbar}>
      <title>Navbar</title>
      <header>
        <img className="logo" src="images/airplane.png" alt="logo" />
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Travel Details</a>
            </li>
            <li>
              <a href="#">User Login</a>
            </li>
            <li>
              <a href="#">User Receipt</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
