import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="item1">
      <img src="https://w.forfun.com/fetch/3e/3e470a1df964555021660f1bd087d48b.jpeg" />
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
