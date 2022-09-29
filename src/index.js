import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";
import Todo from "./routes/todo";

import ErrorPage from "./error-page";
import App from "App";
import Clock from "./containers/Clock";
import Appart from "./containers/Form";
import Fetch from "./containers/Fetch";

import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/todo",
        element: <Todo></Todo>,
      },
      {
        path: "/clock",
        element: <Clock></Clock>,
      },
      {
        path: "/apparts",
        element: <Appart></Appart>,
      },
      {
        path: "/fetch",
        element: <Fetch></Fetch>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
