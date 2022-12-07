import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        download
        className="btn animate__animated animate__fadeInRight animate__delay-3s"
      >
        Download CV
      </a>
      <a
        href="#Contact"
        className="btn btn-primary animate__animated animate__fadeInLeft animate__delay-4s"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
