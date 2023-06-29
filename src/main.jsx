import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import avatars from "./data/avatars.js";
import AvatarView from "./views/AvatarView.jsx";
import FoodView from "./views/FoodView.jsx";

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

routes.push({ path: "foods", element: <FoodView /> });
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
