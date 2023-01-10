import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <section className="error">
      <h1>Error 404</h1>
      <p>Page not found</p>
      <Link exact to="/" className="error__return">
        RETURN HOME
      </Link>
    </section>
  );
}

export default Error;
