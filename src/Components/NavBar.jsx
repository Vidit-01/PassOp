import React from "react";

const NavBar = () => {
  return (
    <nav class="bg-transparent navbar navbar-light bg-light flex">
      <div class="bg-transparent navbar-brand mx-3">
        <img
          src="/src/assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top mx-2"
          alt=""
        />
        <span className="font-bold">
          <span className="text-2xl">P</span>ythWord
        </span>
      </div>
      <div className="login flex ">
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
