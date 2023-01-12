import { React, useState, useEffect } from "react";
import "./Gallery.css";
import projects from "../../projects.json";
import { useTranslation } from "react-i18next";
import Spinner from "../spinner/Spinner";
import Nav from "../nav/Nav";

function Gallery() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  const images = projects.items.map((item) => item.img);
  useEffect(() => {
    const imageElements = images.map((img) => new Image());
    let imagesLoaded = 0;
    imageElements.forEach((image, i) => {
      image.src = images[i];
      image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          setLoading(false);
        }
      };
    });
  }, [images]);

  return (
    <section className="gallery">
      <Nav />
      <div className="gallery__content">
        <div className="gallery__content__header">
          <p>{t("gallery_subtitle")}</p>
          <h2>{t("gallery_title")}</h2>
        </div>
        {loading && (
          <div className="spinner">
            <Spinner />
          </div>
        )}
        <div
          className="gallery__content__projects"
          style={{
            visibility: loading ? "hidden" : "visible",
            width: loading ? "0px" : "100%",
          }}
        >
          {projects.items.map((item, index) => (
            <div key={index} className="gallery__content__projects__project">
              <img src={item.img} alt={item.alt} />
              <div className="gallery__content__projects__project__data">
                <a
                  href={item.link}
                  target={item.target}
                  rel="noopener noreferrer"
                >
                  {t("gallery_btn")}
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
