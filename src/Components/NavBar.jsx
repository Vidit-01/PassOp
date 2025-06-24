import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="bg-transparent navbar navbar-light bg-light ">
      <div class="bg-transparent navbar-brand mx-3">
        <Link to={"/"} className="visited:text-black text-black">
        <img
          src="/src/assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top mx-2"
          alt=""
        />
        <span className="visited:text-black text-black hover:font-bold underline">
          <span className="text-2xl">P</span>ythWord
        </span>
        </Link>
      </div>
      <div className="login  hidden md:block ">
        <button class="btn btn-outline-success " type="button">
          Sign In
        </button>
        <button class="btn btn-success mx-3" type="button">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
