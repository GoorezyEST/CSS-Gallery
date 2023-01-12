import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="nav">
      <Link
        to="/"
        className={location.pathname === "/" ? "nav__link active" : "nav__link"}
      >
        {t("nav_home")}
      </Link>
      <Link
        to="/gallery"
        className={
          location.pathname === "/gallery" ? "nav__link active" : "nav__link"
        }
      >
        {t("nav_css")}
      </Link>
      <Link
        to="/contact"
        className={
          location.pathname === "/contact" ? "nav__link active" : "nav__link"
        }
      >
        {t("nav_contact")}
      </Link>
      <Link
        to="/settings"
        className={
          location.pathname === "/settings" ? "nav__link active" : "nav__link"
        }
      >
        {t("nav_settings")}
      </Link>
    </nav>
  );
}

export default Nav;
