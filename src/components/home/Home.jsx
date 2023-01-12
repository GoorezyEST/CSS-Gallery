import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";
import Nav from "../nav/Nav";

function Home() {
  const { t } = useTranslation();

  return (
    <section className="home">
      <Nav />
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
