import React from "react";
import faker from "@faker-js/faker";

function ItemUI() {
  console.log(faker.date.recent());
  return (
    <div className="ui items" style={{ margin: "auto" }}>
      <div className="item">
        <div className="image">
          <img src={faker.image.avatar()} alt="article" />
        </div>
        <div className="content">
          <a href="/" className="header">
            {faker.name.firstName()}
          </a>
          <div className="meta">
            <span>{faker.date.weekday()}</span>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="extra">{faker.lorem.paragraph()}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemUI;
