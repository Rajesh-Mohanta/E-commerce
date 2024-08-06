import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

export default function Breadcrums(props) {
  const { product } = props;
  return (
    <div className="breadcrums">
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
    </div>
  );
}
