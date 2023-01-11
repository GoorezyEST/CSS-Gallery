import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import projects from "../../projects.json";

function Gallery() {
  return (
    <section className="gallery">
      <nav className="gallery__nav">
        <Link exact="true" to="/" className="gallery__nav__link">
          HOME
        </Link>
        <Link to="/gallery" className="gallery__nav__link">
          SEE CSS
        </Link>
        <Link to="/contact" className="gallery__nav__link">
          CONTACT
        </Link>
      </nav>
      <div className="gallery__content">
        <div className="gallery__content__header">
          <p>Let's see the</p>
          <h2>CSS Gallery</h2>
        </div>
        <div className="gallery__content__projects">
          {projects.items.map((item, index) => (
            <div key={index} className="gallery__content__projects__project">
              <img src={item.img} alt={item.alt} />
              <div className="gallery__content__projects__project__data">
                <h2>{item.name}</h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Go!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
