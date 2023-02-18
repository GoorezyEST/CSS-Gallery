import React from "react";
import "./MultiWords.css";
import Return from "../../returnBtn/Return";

function MultiWords() {
  return (
    <section className="multi_container">
      <Return />
      <div className="multi_content">
        <p>CSS</p>
        <div className="multi_words">
          <span className="wordAnim">Gallery</span>
          <span className="gal-one wordAnim">Gallery</span>
          <span className="gal-two wordAnim">Gallery</span>
          <span className="gal-three wordAnim">Gallery</span>
          <span className="wordAnim">Gallery</span>
        </div>
      </div>
    </section>
  );
}

export default MultiWords;
