import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="">
        <div className="">
          <nav>
            <Link to="/" className="logo">
              <img className="logo_image" src="/images/tv.png" alt="logo" />

              <h4>MovieBox</h4>
            </Link>

            <div className="nav-menu">
              <h4>Sign In</h4>
              <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
