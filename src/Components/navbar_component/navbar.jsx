// import React from 'react';
// import { Link } from "react-router-dom";
// import "./navbar.css";

// class Navbar extends React.Component {
//   state = {};
//   render() {
//     return (
//       <nav>
//         <div className="title">
//           <h1>Himanshi Prakash</h1>
//         </div>
//         <div className="options">
//           <ul>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#skills">Skills</a>
//             </li>
//             <li>
//               <a href="#projects">Projects</a>
//             </li>
//             {/* <li>
//               <Link to="/recipes">Recipes</Link>
//             </li> */}
//             <li>
//               <a href="#contact">Contact me</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="title">
          <h1>Himanshi Prakash</h1>
        </div>
        <div className="options">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
