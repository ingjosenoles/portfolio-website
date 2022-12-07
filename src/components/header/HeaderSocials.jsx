import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jose-noles-b69378253/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ingjosenoles" target="blank">
        <FaGithubAlt />
      </a>
    </div>
  );
};

export default HeaderSocials;
