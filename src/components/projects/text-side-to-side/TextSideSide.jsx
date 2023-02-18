import React from "react";
import "./TextSideSide.css";
import Return from "../../returnBtn/Return";

function TextSideSide() {
  return (
    <section className="text_container">
      <Return />
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
