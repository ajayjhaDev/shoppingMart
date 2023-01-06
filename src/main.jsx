import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import "antd/dist/reset.css";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
