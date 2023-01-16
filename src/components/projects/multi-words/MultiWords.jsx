import React from "react";
import "./MultiWords.css";
import { Link } from "react-router-dom";

function MultiWords() {
  return (
    <section className="multi_container">
      <Link to="../gallery" className="darkgoBack">
        Return
      </Link>
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
