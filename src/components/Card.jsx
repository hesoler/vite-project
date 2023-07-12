import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Heart from "react-animated-heart";

function Card({ title = "Default", description = "Default", path, imageURL }) {
  const [likes, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <span className="Card">
      <Link to={path} className="cardTitle">
        <h2>{title}</h2>
      </Link>
      <img src={imageURL} width="150px" height="150px" />
      <div className="like-button-container">
        <Heart
          isClick={liked}
          onClick={() => {
            setLikesCount(!liked ? likes + 1 : likes);
            setLiked(!liked);
          }}
        />
        {likes}
      </div>
    </span>
  );
}

export default Card;
