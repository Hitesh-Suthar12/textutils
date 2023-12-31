import React from "react";
// import { Link } from "react-router-dom";

function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"> */}
        <a className="navbar-brand" href="/">
          {/* <Link className="navbar-brand" to="/"> */}
          {title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              {/* <a className="nav-link" aria-current="page" href="#"> */}
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" aria-disabled="true" to="/about">
                {aboutText}
              </Link> */}
            </li>
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          <div
            className={`form-check form-switch mx-2 my-3 text-${
              mode === "light" ? "dark" : "light"
            }`}
            onClick={toggleMode}
            role="switch"
            aria-checked={mode === "dark" ? "true" : "false"}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {mode === "dark" ? "light" : "dark"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
