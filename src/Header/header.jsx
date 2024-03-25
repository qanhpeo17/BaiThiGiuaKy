import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">anonime</div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">List anime</a>
          </li>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            name=""
            id="searchBar"
            className="searchBarinput"
            placeholder="Search anime or movie"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
