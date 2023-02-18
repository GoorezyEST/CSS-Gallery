import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";
import "./Return.css";

function Return() {
  return (
    <Link to="../gallery" className="return_link">
      <TbArrowBack className="return_icon" />
    </Link>
  );
}

export default Return;
