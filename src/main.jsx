import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { avatars } from "./data/jsonData.js";
import AvatarView from "./views/AvatarView.jsx";
import FoodView from "./views/FoodView.jsx";
import Form from "./views/UserForm.jsx";
import UserTable from "./views/UserTable.jsx";

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
routes.push({ path: "users/form", element: <Form /> });
routes.push({ path: "users", element: <UserTable /> });
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
