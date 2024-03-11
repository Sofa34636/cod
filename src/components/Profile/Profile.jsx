import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Prifileinfo.jsx/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer 
      />
    </div>
  );
};

export default Profile;
