import React from "react";
import "./cardHeader.css";
const CardHeader = ({ name, value, color }) => {
  const styles = {
    borderTop: `4px solid ${color}`,
  };
  return (
    <div className="header " style={styles}>
      <h5>{name}</h5>
      <span>{value}</span>
    </div>
  );
};

export default CardHeader;
