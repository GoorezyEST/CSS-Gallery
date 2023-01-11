import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section className="home">
      <nav className="home__nav">
        <Link exact to="/" className="home__nav__link">
          {t("nav_home")}
        </Link>
        <Link to="/gallery" className="home__nav__link">
          {t("nav_css")}
        </Link>
        <Link to="/contact" className="home__nav__link">
          {t("nav_contact")}
        </Link>
        <Link to="/settings" className="home__nav__link">
          {t("nav_settings")}
        </Link>
      </nav>
      <div className="home__content">
        <div className="home__content__header">
          <p>{t("home_subtitle")}</p>
          <h2>{t("home_title")}</h2>
        </div>
        <div className="home__content__slogan">
          <p>{t("home_slogan")}</p>
        </div>
        <Link to="/gallery" className="home__content__button">
          {t("home_btn")}
        </Link>
      </div>
    </section>
  );
}

export default Home;
