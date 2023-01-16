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
          <span>Gallery</span>
          <span className="gal-one">Gallery</span>
          <span className="gal-two">Gallery</span>
          <span className="gal-three">Gallery</span>
          <span>Gallery</span>
        </div>
      </div>
    </section>
  );
}

export default MultiWords;
