import React from "react";
import { Link } from "react-router-dom";
import "./CardHover.css";

function CardHover() {
  return (
    <section className="container">
      <Link to="../gallery" className="goBack">
        Return
      </Link>
      <div class="card">
        <div class="card-box-wrap">
          <span class="over"></span>
          <span class="over"></span>
          <span class="over"></span>
          <span class="over"></span>
          <span class="over"></span>
          <span class="over"></span>
          <span class="over"></span>
          <span class="over"></span>
          <span class="over"></span>
          <div class="card-box">
            <strong>
              3D Card
              <br />
              Hover Effect
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardHover;
