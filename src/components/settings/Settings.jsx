import React from "react";
import "./Settings.css";
import { useTranslation } from "react-i18next";
import {
  colorBlue,
  colorGreen,
  colorYellow,
  colorRed,
} from "../../utilities/colors";
import { useSettings } from "../../utilities/SettingsContext";
import Nav from "../nav/Nav";

function Settings() {
  const { t, i18n } = useTranslation();
  const { activeLng, setActiveLng, activeColor, setActiveColor } =
    useSettings();

  return (
    <section className="settings">
      <Nav />
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
                colorYellow();
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
