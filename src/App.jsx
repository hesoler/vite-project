// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import avatars from "./data/avatars";

function App() {
  const avatarList = avatars.map((avt) => {
    return (
      <>
        <Card title={avt.name} description={avt.description} path={avt.path} />
        <img src={avt.imageURL} width="150px" height="150px" />
      </>
    );
  });

  return (
    <>
      <div className="App">
        <h1>Rate your favorite avatar!</h1>
        <div className="container">{avatarList}</div>
        <Link to="foods">
          <h2>Food List</h2>
        </Link>
      </div>
    </>
  );
}

export default App;
