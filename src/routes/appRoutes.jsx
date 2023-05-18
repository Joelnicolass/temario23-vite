import { createBrowserRouter, createHashRouter } from "react-router-dom";
import CatsView from "../cats/views/CatsView";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../Home/Home";
import Login from "../Login/Login";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cats",
    element: <CatsView />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
