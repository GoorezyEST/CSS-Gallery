import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <nav className="home__nav">
        <Link exact to="/" className="home__nav__link">
          HOME
        </Link>
        <Link to="/gallery" className="home__nav__link">
          SEE CSS
        </Link>
        <Link to="/contact" className="home__nav__link">
          CONTACT
        </Link>
      </nav>
      <div className="home__content">
        <div className="home__content__header">
          <p>Welcome to my</p>
          <h2>CSS Gallery</h2>
        </div>
        <div className="home__content__slogan">
          <p>
            Bringing beauty to the web,
            <br />
            one line of code at a time.
          </p>
        </div>
        <Link to="/gallery" className="home__content__button">
          MY WORK
        </Link>
      </div>
    </section>
  );
}

export default Home;
