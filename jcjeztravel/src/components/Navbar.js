import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../CSS/navbar.css"; 

const Navbar = () => {
  return (
    <header>
       <img className="logo" src="/images/logo.png" alt="logo" /> 
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/travel/:name">Travel Details</Link>
          </li>
          <li>
            <Link to="/travel/login">Login</Link>
          </li>
          <li>
            <Link to="/user-receipt">User Receipt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
