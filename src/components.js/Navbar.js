import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1 style={{ color: "red" }}>NETFLİX</h1>
        </Link>
        <button
          className="navbar-toggler collapsed"
          style={{ color: "red" }}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/anasayfa"  className="nav-link">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/populer"  className="nav-link">
                Popüler
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/yakinda"   className="nav-link">
                Yakında
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/begenilenler"     className="nav-link">
              Beğenilenler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/enCokOyAlan" className="nav-link">
                En Çok Oy Alanlar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
