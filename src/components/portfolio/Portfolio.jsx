import React from "react";
import "./Portfolio.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const works = [
  {
    id: 1,
    image: project1,
    tittle: "Interactive Rating Component",
    github: "https://github.com/ingjosenoles/interactive-rating-component",
    demo: "https://interactive-rating-component-mauve-iota.vercel.app/",
  },
  {
    id: 2,
    image: project2,
    tittle: "Things To Do List Component",
    github: "https://github.com/ingjosenoles/listadetareas",
    demo: "https://listadetareas-nine.vercel.app/",
  },

  {
    id: 3,
    image: project3,
    tittle: "FAQ Accordion Card Component",
    github: "https://github.com/ingjosenoles/faq-accordion-card",
    demo: "https://faq-accordion-card-dgz8uo6qk-ingjosenoles.vercel.app/",
  },

  {
    id: 4,
    image: project4,
    tittle: "Interactive Card Details Form Component",
    github:
      "https://github.com/ingjosenoles/interactive-card-details-form-main",
    demo: "https://interactive-card-details-form-main-ivory.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5 data-aos="fade-left">My Recent Work</h5>
      <h2 data-aos="fade-right">Portfolio</h2>

      <div className="Container Portfolio__container">
        {works.map(({ id, image, tittle, github, demo }) => {
          return (
            <article key={id} className="Portfolio__item">
              <div
                className="Portfolio__item-image"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img src={image} alt={tittle} />
              </div>
              <h3
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                {tittle}
              </h3>
              <div
                className="Portfolio__item-cta"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="900"
                data-aos-offset="0"
              >
                <a
                  href={github}
                  className="btn"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="1200"
                  data-aos-offset="0"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="1200"
                  data-aos-offset="0"
                  target={"blank"}
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
