import React, { createContext, useContext } from "react";
import useFavs from "../hooks/useFavs";
import useFetch from "../hooks/useFetch";
import Viewer from "./Viewer";
import FavoritesCarousel from "./FavoritesCarousel";
import styles from "../views/CatsView.module.css";

const CatsContext = createContext();
const { Provider } = CatsContext;
export const useCatsContext = () => useContext(CatsContext);

const Cats = ({ children }) => {
  const { data, isLoading, refetch, setLocalData } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const { favs, handleFavorites } = useFavs();

  const showFavorite = (fav) => {
    setLocalData([
      {
        url: fav,
      },
    ]);
  };

  return (
    <Provider
      value={{
        data,
        isLoading,
        refetch,
        setLocalData,
        favs,
        handleFavorites,
        showFavorite,
      }}
    >
      <div className={styles.catsView}>{children}</div>
    </Provider>
  );
};

Cats.Viewer = Viewer;
Cats.FavoritesCarousel = FavoritesCarousel;

export default Cats;
