import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  colorBlue,
  colorGreen,
  colorPurple,
  colorRed,
} from "../../utilities/colors";

function Settings() {
  const { t, i18n } = useTranslation();
  const [activeLng, setActiveLng] = useState("en");
  const [activeColor, setActiveColor] = useState("b");

  return (
    <section className="settings">
      <nav className="settings__nav">
        <Link exact to="/" className="settings__nav__link">
          {t("nav_home")}
        </Link>
        <Link to="/gallery" className="settings__nav__link">
          {t("nav_css")}
        </Link>
        <Link to="/contact" className="settings__nav__link">
          {t("nav_contact")}
        </Link>
        <Link to="/settings" className="settings__nav__link">
          {t("nav_settings")}
        </Link>
      </nav>
      <div className="settings__content">
        <div className="settings__content__header">
          <p>{t("settings_subtitle")}</p>
          <h2>{t("settings_title")}</h2>
        </div>
        <div className="settings__content__options">
          <div className="languages">
            <h4
              className={activeLng === "en" ? "language active" : "language"}
              onClick={() => {
                i18n.changeLanguage("en");
                setActiveLng("en");
              }}
            >
              EN
            </h4>
            <h4
              className={activeLng === "es" ? "language active" : "language"}
              onClick={() => {
                i18n.changeLanguage("es");
                setActiveLng("es");
              }}
            >
              ES
            </h4>
          </div>
          <div className="colors">
            <span
              className={
                activeColor === "b" ? "color blue active" : "color blue"
              }
              onClick={() => {
                colorBlue();
                setActiveColor("b");
              }}
            ></span>
            <span
              className={activeColor === "r" ? "color red active" : "color red"}
              onClick={() => {
                colorRed();
                setActiveColor("r");
              }}
            ></span>
            <span
              className={
                activeColor === "p" ? "color purple active" : "color purple"
              }
              onClick={() => {
                colorPurple();
                setActiveColor("p");
              }}
            ></span>
            <span
              className={
                activeColor === "g" ? "color green active" : "color green"
              }
              onClick={() => {
                colorGreen();
                setActiveColor("g");
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
