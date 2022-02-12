import "./Style.css";
import React, { useEffect, useState } from "react";
import faker from "@faker-js/faker";

function SocialPageHooks() {
  var [post, setPost] = useState("");
  var [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")));

  const postChange = (e) => {
    setPost(e.target.value);
  };

  const AddPost = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    if (localStorage.getItem("posts")) {
      let posts = JSON.parse(localStorage.getItem("posts"));
      posts.push({
        post: post,
        name: `${localStorage.getItem("fname")} ${localStorage.getItem(
          "lname"
        )}`,
        time: date,
      });
      localStorage.setItem("posts", JSON.stringify(posts));
    } else {
      let posts = [
        {
          post: post,
          name: `${localStorage.getItem("fname")} ${localStorage.getItem(
            "lname"
          )}`,
          time: date,
        },
      ];
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  };

  return (
    <section>
      <form>
        <div className="form-group col-6 mx-auto mt-4">
          <label for="exampleFormControlTextarea1">Add Post</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={postChange}
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={AddPost}>
            Add Post
          </button>
        </div>
      </form>
      {localStorage.getItem("posts") && localStorage.getItem("email") ? (
        posts.map((ele) => {
          return (
            <div className="ui feed mx-auto col-6 mt-4">
              <div className="event">
                <div className="label">
                  <img src={"./images.png"} alt="user" />
                </div>
                <div className="content">
                  <div className="summary">
                    <a className="user" href="/">
                      {ele.name}
                    </a>{" "}
                    <div className="date">{ele.time}</div>
                  </div>
                  <div class="extra text">{ele.post}</div>
                  <div className="meta">
                    <a className="like" href="/">
                      <i className="like icon"></i> 4 Likes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3 className="text-center">Login or Sign up to View The posts</h3>
      )}
    </section>
  );
}

export default SocialPageHooks;
