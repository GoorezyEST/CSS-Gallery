import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import Nav from "../nav/Nav";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <Nav />
      <div className="contact__content">
        <div className="contact__content__header">
          <p>{t("contact_subtitle")}</p>
          <h2>{t("contact_title")}</h2>
        </div>
        <div className="contact__links">
          <a
            className="contact__touch"
            href="https://www.linkedin.com/in/franco-espinosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact_linkedin")}
          </a>
          <a
            className="contact__port"
            href="https://goorezy-portfolio.netlify.app/#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact_portfolio")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
