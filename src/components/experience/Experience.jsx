import React from "react";
import "./Experience.css";
import { BsShieldFillCheck } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="Experience">
      <h5
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        What Skills I Have{" "}
      </h5>
      <h2
        data-aos="flip-right"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out-sine"
      >
        My Experience
      </h2>

      <div className="Container Experience__container">
        <div className="Experience__frontend">
          <h3 data-aos="zoom-in">Frontend Development</h3>
          <div className="Experience__content">
            <article className="Experience__details" data-aos="fade-right">
              <BsShieldFillCheck className="Experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>1 Year</small>
              </div>
            </article>
            <article className="Experience__details" data-aos="fade-left">
              <BsShieldFillCheck className="Experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>1 Year</small>
              </div>
            </article>
            <article className="Experience__details" data-aos="fade-right">
              <BsShieldFillCheck className="Experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light" data-aos="fade-down">
                  1 Year
                </small>
              </div>
            </article>
            <article className="Experience__details" data-aos="fade-left">
              <BsShieldFillCheck className="Experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light" data-aos="fade-down">
                  1 Year
                </small>
              </div>
            </article>
            <article className="Experience__details" data-aos="fade-right">
              <BsShieldFillCheck className="Experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light" data-aos="fade-down">
                  1 Year
                </small>
              </div>
            </article>
            <article className="Experience__details" data-aos="fade-left">
              <BsShieldFillCheck className="Experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light" data-aos="fade-down">
                  5 Months
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
