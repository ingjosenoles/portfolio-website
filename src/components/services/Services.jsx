import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="Services">
      <h5 data-aos="fade-right">What I Offer</h5>
      <h2 data-aos="fade-left">Services</h2>

      <div className="Container Services__container">
        <article className="Service">
          <div className="Service__head">
            <h3 data-aos="fade-up-right">Web Development</h3>
          </div>

          <ul className="Service_list">
            <li
              className="li-container"
              data-aos="fade-down-right"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <BiCheck className="Service__list-icon" />
              <p>Web applications development.</p>
            </li>
            <li
              className="li-container"
              data-aos="fade-down-right"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <BiCheck className="Service__list-icon" />
              <p> Reusable components using React Js.</p>
            </li>
            <li
              className="li-container"
              data-aos="fade-down-right"
              data-aos-delay="900"
              data-aos-duration="600"
            >
              <BiCheck className="Service__list-icon" />
              <p> Using JSX as syntax.</p>
            </li>
            <li
              className="li-container"
              data-aos="fade-down-right"
              data-aos-delay="1200"
              data-aos-duration="600"
            >
              <BiCheck className="Service__list-icon" />
              <p>Management of CSS3 and HTML5 optimal.</p>
            </li>
            <li
              className="li-container"
              data-aos="fade-down-right"
              data-aos-delay="1500"
              data-aos-duration="600"
            >
              <BiCheck className="Service__list-icon" />
              <p> Responsive design adaptable to any screen size.</p>
            </li>
            <li
              className="li-container"
              data-aos="fade-down-right"
              data-aos-delay="1800"
              data-aos-duration="600"
            >
              <BiCheck className="Service__list-icon" />
              <p>
                {" "}
                Use of different Javascript libraries for design and
                functionality.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
