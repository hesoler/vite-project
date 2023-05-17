import React, { useState } from "react";

function Showhide() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide" : "Show"} text</button>
      {show && <h2>Hide me!</h2>}
    </div>
  );
}

export default Showhide;
