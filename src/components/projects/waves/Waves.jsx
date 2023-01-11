import React from "react";
import "./Waves.css";
import { Link } from "react-router-dom";

function Waves() {
  return (
    <section className="wavescontainer">
      <Link to="../gallery" className="goBack">
        Return
      </Link>
      <div class="water"></div>
    </section>
  );
}

export default Waves;
