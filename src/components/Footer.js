import React from "react";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="container">
        <div className="footer-container">
          <div className="socials">
            <FaFacebookSquare className="icons" />
            <FiInstagram className="icons" />
            <FaTwitter className="icons" />
            <FaYoutube className="icons" />
          </div>

          <div className="footer-policy">
            <p className="footer-text">Conditions of Use</p>
            <p className="footer-text">Privacy & Policy</p>
            <p className="footer-text">Press Room</p>
          </div>

          <div>
            <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
