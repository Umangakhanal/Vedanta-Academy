import React from "react";
import Styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={Styles.Navbar}>
        <div className={Styles.logo}>
          <img src="LOGO.jpg" alt="Vedanta Academy" />
        </div>
        <div className={Styles.navlinks}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={Styles.navButton}>
          <button>Sign in </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
