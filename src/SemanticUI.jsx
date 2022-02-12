import React from "react";
import faker from "@faker-js/faker";
import CardUI from "./CardUI";
import ItemUI from "./ItemUI";
import CommentUI from "./CommentUI";

function SemanticUI() {
  return (
    <section>
      <CardUI />
      <hr />
      <ItemUI />
      <CommentUI />
      <hr />
      <ItemUI />
      <CommentUI />
      <hr />
      <ItemUI />
      <CommentUI />
      <hr />
    </section>
  );
}

export default SemanticUI;
