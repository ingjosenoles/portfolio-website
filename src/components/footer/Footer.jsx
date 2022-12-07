import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" data-aos="flip-left" className="footer__logo">
        Sigueme por las Redes
      </a>

      <div className="footer__socials ">
        <a href="https://facebook.com" data-aos="fade-up-right">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" data-aos="fade-up-left">
          <FaInstagram />
        </a>
        {/* <a href="https://twitter.com">
          <FaTwitter />
        </a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Ingeniero Jose Noles. All rights reserved 2022.</small>
      </div>
    </footer>
  );
};

export default Footer;
