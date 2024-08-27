import React from "react";
import { Link } from "react-router-dom";


export default function Nav2() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to= "/" className="navbar-brand">
            ProjectManagment
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-center gap-4 mx-auto">
              <li className="nav-item ms-4">
                <Link to= "/" className="nav-link active " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link to= "/CountDownBoard" className="nav-link active" aria-current="page">
                 CountDownBoard
                </Link>
              </li>



              <li className="nav-item ms-4">
                <Link to= "/About" className="nav-link active" aria-current="page">
                 About
                </Link>
              </li>



              <li className="nav-item ms-4">
                <Link to="/Contact" className="nav-link active" aria-current="page">
                 Contact
                </Link>
              </li>

            </ul>
            <div className="d-flex ms-auto">
              <Link to="/SignUp"  className="btn btn-success me-2">SignUp </Link>
              <Link to="/SignIn"  className="btn btn-danger">SignIn</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
