import React from "react";
import "./CardHover.css";
import Return from "../../returnBtn/Return";

function CardHover() {
  return (
    <section className="container">
      <Return />
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
