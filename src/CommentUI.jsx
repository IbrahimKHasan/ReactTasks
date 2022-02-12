import React from "react";
import faker from "@faker-js/faker";
function CommentUI() {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="a" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Stevie Feliciano
          </a>
          <div className="metadata">
            <div className="date">2 days ago</div>
            <div className="rating">
              <i className="star icon"></i>5 Faves
            </div>
          </div>
          <div className="text">
            Hey guys, I hope this example comment is helping you read this
            documentation.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentUI;
