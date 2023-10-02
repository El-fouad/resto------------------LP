import React from "react";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between ">
        <h1 className="flex-1 text-start text-black ">Surens</h1>
        <ul className="flex flex-1 justify-between text-gray">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-orange" : undefined)}
          >
            <li className="hover:text-orange">Home</li>
          </NavLink>
          <NavLink
            to="/Features"
            className={({ isActive }) => (isActive ? "text-orange" : undefined)}
          >
            <li className="hover:text-orange">Features</li>
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) => (isActive ? "text-orange" : undefined)}
          >
            <li className="hover:text-orange">Blog</li>
          </NavLink>
          <NavLink
            to="/AbouUs"
            className={({ isActive }) => (isActive ? "text-orange" : undefined)}
          >
            <li className="hover:text-orange">Abou Us</li>
          </NavLink>
        </ul>
        <div className="flex-1 text-end">
          <button className=" text-end bg-gray-dark px-2 py-1 text-white rounded-lg">
            Download App
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
