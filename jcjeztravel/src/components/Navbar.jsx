// import React from "react";
// // import './CSS/navbar.css';

// const Navbar = () => {
//   return (
//     <div>
//       <title>Navbar</title>
//       <header>
//         <img className="logo" src="images/airplane.png" alt="logo" />
//         <nav>
//           <ul className="nav__links">
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Travel Details</a>
//             </li>
//             <li>
//               <a href="#">User Login</a>
//             </li>
//             <li>
//               <a href="#">User Receipt</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../CSS/navbar.css"; 

const Navbar = () => {
  return (
    <header>
       <img className="logo" src="C:\Users\0470h\MainProject2\jcjeztravel\public\images\logo.png" alt="logo" />
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link> {/* Use Link instead of anchor tags */}
          </li>
          <li>
            <Link to="/travel/:name">Travel Details</Link> {/* Adjust paths accordingly */}
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
