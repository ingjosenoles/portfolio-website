import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="About">
      <h5 data-aos="flip-right">Get To Know</h5>
      <h2 data-aos="zoom-in-left">About Me</h2>

      <div className="container About__container">
        <div className="About__me">
          <div className="About__me-image" data-aos="zoom-in-up">
            <img src={ME} alt="About__image" />
          </div>
        </div>

        <div className="About__content">
          <div className="About__cards">
            <article
              className="About__card"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <FaAward className="About__icon" />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article
              className="About__card"
              data-aos="zoom-in-up"
              data-aos-delay="2000"
            >
              <FaUsers className="About__icon" />
              <h5>Clients</h5>
              <small>1 local</small>
            </article>

            <article
              className="About__card"
              data-aos="zoom-in-up"
              data-aos-delay="3000"
            >
              <FaFolder className="About__icon" />
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>
          </div>

          <p
            data-aos="zoom-out-down"
            data-aos-delay="3000"
            data-aos-duration="3000"
          >
            Hi, I'm Jose Noles, a computer engineer and front-end developer. I
            like programming as it is the method by which I can solve problems
            and create reusable components that are easy to understand and I am
            also a fast learner. I am also a black belt athlete in Full Contact
            Kickboxing.
          </p>

          <a
            href="#Contact"
            className="btn btn-primary"
            data-aos="zoom-in-right"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
