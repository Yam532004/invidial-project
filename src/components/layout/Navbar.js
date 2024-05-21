import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github">Github Finder</i>
      </h1>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};
