import React from "react";

const Card = ({ photoName, company, work }) => {
  return (
    <div className="card">
      <div className="head">
        <img src={photoName} className="image" alt="img" />
        <div className="button">
          <button>Save</button>
        </div>
      </div>
      <div className="section">
        <h4 className="section-h4">
          {company} <span>5 days ago</span>
        </h4>
        <h1>{work}</h1>
        <div className="section-flex">
          <p>Part-Time</p>
          <p>Senior Level</p>
        </div>
      </div>
      <div className="footer">
        <div className="price">
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
