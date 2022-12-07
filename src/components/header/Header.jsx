import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";
import AOS from "aos";

import "animate.css";
import "aos/dist/aos.css";
AOS.init({ duration: 2000 });

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="animate__animated animate__bounce ">Hello I'm </h5>
        <h1 data-aos="fade-right" data-aos-delay="1000">
          José Noles
        </h1>
        <h5 className="animate__animated animate__bounceInDown animate__delay-2s">
          Computer Engineer & Front-End Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me animate__animated animate__fadeInBottomRight animate__delay-5s">
          <img src={ME} alt="me" />
        </div>

        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
