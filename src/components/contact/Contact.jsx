import React from "react";
import "./Contact.css";
import { HiMail } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3t9008p",
      "template_wcyl7ed",
      form.current,
      "dHc-n6iBUhHwWzg_W"
    );
    e.target.reset();
  };

  return (
    <section id="Contact">
      <h5 data-aos="fade-left">Get in Touch</h5>
      <h2 data-aos="fade-right">Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="fade-up">
            <HiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ingjosenoles@gmail.com </h5>
            <a href="Mailto:ingjosenoles@gmail.com" target="blank">
              {"    "}
              Send a Message
            </a>
          </article>
        </div>
        {/* END OPTIONS CONTACT       */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="YOUR FULLNAME"
            data-aos="fade-left"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            data-aos="fade-right"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="YOUR MESSAGE"
            data-aos="fade-up"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            data-aos="flip-left"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
