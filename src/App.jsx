// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import avatars from "./data/avatars";
import { useState, useEffect } from "react";

function App() {
  const avatarList = avatars.map((avt) => {
    return (
      <>
        <Card title={avt.name} description={avt.description} path={avt.path} />
        <img src={avt.imageURL} width="150px" height="150px" />
      </>
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
          <label for="inputTitle">Type your page title:</label>
          &nbsp;
          <input type="text" id="inputTitle" onChange={changeTitle} />
        </div>
      </div>
    </>
  );
}

export default App;
