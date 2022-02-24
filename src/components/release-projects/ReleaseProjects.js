import React from "react";
import CardHeader from "../card-header/CardHeader";
import Card from "../card/Card";
import "./release.css";


const ReleaseProjects = () => {
  return (
    <div className="release ">
      <div className="project-header">
        <h2>Release Project</h2>
      </div>
      <div className="cards">
        
            <div className="ready">
              <CardHeader name="Ready" color="#aea5d3" value="3" />
              <Card description="update conctract agreement" color="#f5b754" />
              <Card description="Refresh company website" color="#58cdad" />
            </div>
            <div className="in-progress">
              <CardHeader name="In Progress" color="#f65e63" value="4" />
              <Card description="update conctract agreement" color="#f5b754" />
              <Card description="Refresh company website" color="#58cdad" />
            </div>
            <div className="review">
              <CardHeader name="Review" color="#f4dc77" value="1" />
              <Card description="update conctract agreement" color="#f65e63" />
              <Card description="Refresh company website" color="#58cdad" />
            </div>
        
      </div>
    </div>
  );
};

export default ReleaseProjects;
