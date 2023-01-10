import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <nav className="contact__nav">
        <Link exact to="/" className="contact__nav__link">
          HOME
        </Link>
        <Link to="/gallery" className="contact__nav__link">
          SEE CSS
        </Link>
        <Link to="/contact" className="contact__nav__link">
          CONTACT
        </Link>
      </nav>
      <div className="contact__content">
        <div className="contact__content__header">
          <p>Here you can</p>
          <h2>Contact Me</h2>
        </div>
        <div className="contact__links">
          <a
            className="contact__touch"
            href="https://www.linkedin.com/in/franco-espinosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Via Linkedin
          </a>
          <a
            className="contact__port"
            href="https://goorezy-portfolio.netlify.app/#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Via my Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
