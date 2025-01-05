import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="px-4 py-5 flex gap-10 justify-center border text-xl font-semibold">
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
