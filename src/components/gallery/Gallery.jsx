import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import projects from "../../projects.json";
import { useTranslation } from "react-i18next";

function Gallery() {
  const { t } = useTranslation();

  return (
    <section className="gallery">
      <nav className="gallery__nav">
        <Link exact="true" to="/" className="gallery__nav__link">
          {t("nav_home")}
        </Link>
        <Link to="/gallery" className="gallery__nav__link">
          {t("nav_css")}
        </Link>
        <Link to="/contact" className="gallery__nav__link">
          {t("nav_contact")}
        </Link>
        <Link to="/settings" className="gallery__nav__link">
          {t("nav_settings")}
        </Link>
      </nav>
      <div className="gallery__content">
        <div className="gallery__content__header">
          <p>{t("gallery_subtitle")}</p>
          <h2>{t("gallery_title")}</h2>
        </div>
        <div className="gallery__content__projects">
          {projects.items.map((item, index) => (
            <div key={index} className="gallery__content__projects__project">
              <img src={item.img} alt={item.alt} />
              <div className="gallery__content__projects__project__data">
                <a
                  href={item.link}
                  target={item.target}
                  rel="noopener noreferrer"
                >
                  {t("gallery_btn")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
