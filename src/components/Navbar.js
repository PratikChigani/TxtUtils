import React from "react";
import PropTypes from "prop-types";
import {
  // BrowserRouter as Router,
  // Switch,
  Link,
  // Route,
  // Routes,
} from "react-router-dom";
function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "light" ? "light" : "dark"
      } bg-${props.mode === "light" ? "light" : "dark"} mt-3 mx-3`}
      style={{ borderRadius: 40 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                {props.contact}
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode.toggleToBlueMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "blue" ? "Light" : "Dark"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  home: "Set home here",
  about: "Set about here",
  contact: "Set contact here",
  mode: "light",
};
