// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";
import { avatars } from "./data/jsonData";
import Card from "./components/Card";
import { useState, useEffect } from "react";

export function generateQuickGuid() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export default function App() {
  const avatarList = avatars.map((avt) => {
    return (
      <div key={generateQuickGuid()} style={{ display: "contents" }}>
        <Card title={avt.name} description={avt.description} path={avt.path} />
        <img src={avt.imageURL} width="150px" height="150px" />
      </div>
    );
  });

  const [pageTitle, setPageTitle] = useState("");
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  function changeTitle(event) {
    setPageTitle(event.target.value);
  }

  return (
    <>
      <div className="App">
        <h1>Rate your favorite avatar!</h1>

        <div className="container">{avatarList}</div>

        <div>
          <Link to="foods">
            <label style={{ fontSize: "x-large" }}>Food List</label>
          </Link>
        </div>
        <br />
        <div>
          <Link to="users">
            <label style={{ fontSize: "x-large" }}>User List</label>
          </Link>
        </div>
        <br />

        <div>
          <label htmlFor="inputTitle">Type your page title:</label>
          &nbsp;
          <input type="text" id="inputTitle" onChange={changeTitle} />
        </div>
      </div>
    </>
  );
}
