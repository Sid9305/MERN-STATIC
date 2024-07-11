import React from "react";

// if props had a key as img with value of src of img


const PostCard = (props) => {
  return (
    <>
      <div>PostCard</div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      {/* <img src={props.img} alt="" /> */}
    </>
  );
};

export default PostCard;
