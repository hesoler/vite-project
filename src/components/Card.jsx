import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Card({ title = "Default", description = "Default", path }) {
  const [count, setCount] = useState(0);

  return (
    <div className="Card">
      <Link to={path}>
        <h2>{title}</h2>
      </Link>
      <button onClick={() => setCount((count) => count + 1)}>
        Likes: {count}
      </button>
    </div>
  );
}

export default Card;
