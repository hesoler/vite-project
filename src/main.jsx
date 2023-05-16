import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import avatars from "./data/avatars.js";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

avatars.forEach((avatar) => {
  routes.push({
    path: avatar.name,
    element: <div>{avatar.name}</div>,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
