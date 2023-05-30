import React from "react";
import MenuItems from "./NavbarData";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid navbar-expand-lg nav-bg mb-5 fixed-top text-center">
        <div className="container">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              {MenuItems.map((items, index) => {
                return (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link menu_active"
                      to={`${items.path}`}
                      key={items.id}
                    >
                      {items.Name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
