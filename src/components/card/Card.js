import React from "react";
import "./card.css";
import { BsFillFlagFill } from "react-icons/bs";

const Card = ({ description, color }) => {
  return (
    <div className="card ">
      <h6>Release project &gt; stage 1 </h6>
      <p>{description}</p>
      <BsFillFlagFill className="flag" style={{ color: color }} />
    </div>
  );
};

export default Card;
