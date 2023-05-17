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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className="App">
        <h1>Rate your favorite avatar!</h1>

        <div className="container">{avatarList}</div>
      </div>
    </>
  );
}

export default App;
