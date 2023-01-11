import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import { useTranslation } from "react-i18next";

function Error() {
  const { t } = useTranslation();

  return (
    <section className="error">
      <h1>Error 404</h1>
      <p>Page not found</p>
      <Link exact to="/" className="error__return">
        {t("error_btn")}
      </Link>
    </section>
  );
}

export default Error;
