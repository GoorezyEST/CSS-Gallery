import React from "react";
import "./TextSideSide.css";
import { Link } from "react-router-dom";

function TextSideSide() {
  return (
    <section className="text_container">
      <Link to="../gallery" className="goBack">
        Return
      </Link>
      <div class="middle">
        <span class="text_backupcolor">
          <div class="text" data-text="TEXT">
            TEXT
          </div>
        </span>
      </div>
    </section>
  );
}

export default TextSideSide;
