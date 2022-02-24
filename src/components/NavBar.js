import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Note2Self
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/vid_upload">
                  New Recording
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/notes">
                  Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    // <div className="navigation">
    //   <nav className="navbar navbar-expand navbar-dark bg-dark">
    //     <div className="flex-container">
    //         <ul className="nav">
    //             <li className="nav-item">
    //             <NavLink className="navbar-brand" to="/">
    //                 Note2Self
    //             </NavLink>
    //             </li>
    //             <li className="nav-item">
    //             <NavLink className="nav-link" to="/vid_upload">
    //                 New Video
    //             </NavLink>
    //             </li>
    //             <li className="nav-item">
    //             <NavLink className="nav-link" to="/notes">
    //                 Notes
    //             </NavLink>
    //             </li>
    //             <li className="nav-item">
    //             <NavLink className="nav-link" to="/about">
    //                 About
    //             </NavLink>
    //             </li>
    //         </ul>
    //     </div>
    //   </nav>
    // </div>
  );
}
