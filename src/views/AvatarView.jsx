import React from "react";
import "./AvatarView.css";
import Showhide from "../components/Showhide";

function AvatarView({ avatar }) {
  return (
    <>
      <div className="avatarView">
        <h1>{avatar.name}</h1>
        <h2>{avatar.description}</h2>
        <Showhide />
        <img src={avatar.imageURL} alt={avatar.name + " image"} />
      </div>
    </>
  );
}

export default AvatarView;
