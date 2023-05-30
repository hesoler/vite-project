// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import avatars from "./data/avatars";
import Showhide from "./components/Showhide";

function App() {
  // const [count, setCount] = useState(0)

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
      </div>
    </>
  );
}

export default App;
