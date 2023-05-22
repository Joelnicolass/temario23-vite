import { createBrowserRouter, createHashRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../Home/Home";
import Login from "../Login/Login";
import CatsView from "../cats/views/CatsView";

export const router = createBrowserRouter([
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
    path: "/cat",
    element: <CatsView />,
  },
]);
