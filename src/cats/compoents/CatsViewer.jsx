import React, { createContext, useContext } from "react";
import styles from "../views/CatsView.module.css";
import useFetch from "../hooks/useFetch";
import useFavs from "../hooks/useFavs";
import Favorites from "./Favorites";
import Viewer from "./Viewer";
import { getChildrenElementsNames } from "../utils/react.utils";

const CatsContext = createContext();
const { Provider } = CatsContext;
export const useCatsContext = () => useContext(CatsContext);

const CatsViewer = ({ children, favorites = false }) => {
  const childrenElementsNames = getChildrenElementsNames(children);

  if (favorites && !childrenElementsNames.includes("Favorites")) {
    throw new Error(
      "CatsViewer with favorites enabled must have a Favorites component as a child"
    );
  }

  if (!favorites && childrenElementsNames.includes("Favorites")) {
    throw new Error(
      "CatsViewer with favorites disabled must not have a Favorites component as a child"
    );
  }

  const { data, isLoading, refetch, setLocalData } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const { favs, handleFavorites } = useFavs();

  return (
    <Provider
      value={{
        data,
        isLoading,
        refetch,
        setLocalData,
        enabledFavorites: favorites,
        favs,
        handleFavorites,
      }}
    >
      <div className={styles.catsView}>{children}</div>
    </Provider>
  );
};

CatsViewer.Viewer = Viewer;
CatsViewer.Favorites = Favorites;

export default CatsViewer;
