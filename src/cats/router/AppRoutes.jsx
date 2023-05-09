import { createBrowserRouter } from "react-router-dom";
import CatsView from "../views/CatsView";
import PokeAppViewLocalPagination from "../../pokeapp/view/PokeAppViewLocalPagination";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CatsView />,
  },
  {
    path: "/pokeapp",
    element: <PokeAppViewLocalPagination />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
