import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import avatars from "./data/avatars.js";
import AvatarView from "./views/AvatarView.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

avatars.forEach((avatar) => {
  routes.push({
    path: avatar.path,
    element: <AvatarView avatar={avatar} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
