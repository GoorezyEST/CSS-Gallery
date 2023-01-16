import React from "react";
import "./BtnRipple.css";
import { Link } from "react-router-dom";

function BtnRipple() {
  function rippleFunctionality(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    e.target.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 600);
  }

  return (
    <section className="btn_ripple_container">
      <Link to="../gallery" className="darkgoBack">
        Return
      </Link>
      <div className="content">
        <button onClick={(e) => rippleFunctionality(e)}>Click</button>
        <button onClick={(e) => rippleFunctionality(e)}>Click</button>
        <button onClick={(e) => rippleFunctionality(e)}>Click</button>
      </div>
    </section>
  );
}

export default BtnRipple;
