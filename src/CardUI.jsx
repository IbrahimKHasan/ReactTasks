import React from "react";
import faker from "@faker-js/faker";

function CardUI() {
  return (
    <div className="ui card">
      <div className="image">
        <img src={faker.image.animals()} alt="a" />
      </div>
      <div className="content">
        <a className="header" href="/">
          {faker.animal.type()}
        </a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a href="/">
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  );
}

export default CardUI;
