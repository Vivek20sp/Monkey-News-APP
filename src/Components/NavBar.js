import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  
  render() {
    return (
      <>
        <div className="container-fluid-lg fixed-top m-0 mb-3">
          <div className="d-flex flex-wrap align-items-center justify-content-center bg-primary justify-content-lg-start p-3">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <i className="bi bi-newspaper" style={{fontSize:"30px"}}></i>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
              <li className="nav-item dropdown text-white">
                <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                </ul>
              </li>
              <li><a href="/" className="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="/" className="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="/" className="nav-link px-2 text-white">About</a></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-primary" placeholder="Search..." aria-label="Search"/>
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
    </div>
      </>
    );
  }
}

export default NavBar;
