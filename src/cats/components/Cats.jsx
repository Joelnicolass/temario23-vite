import React, { createContext, useContext } from "react";
import Viewer from "./Viewer";
import { catsStyles } from "../styles/catStyles";
import FavoritesCarousel from "./FavoritesCarousel";
import useFetch from "../hooks/useFetch";
import useFavorites from "../hooks/useFavorites";

const CatsContext = createContext();
const { Provider } = CatsContext;
export const useCatsContext = () => useContext(CatsContext);

const Cats = ({ children }) => {
  const { data, isLoading, refetch, showLocalImage } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const { favs, handleAddToFavs } = useFavorites();

  return (
    <Provider
      value={{
        image: data && data[0].url,
        isLoading,
        refetch,
        showLocalImage,
        favs,
        handleAddToFavs,
      }}
    >
      <div style={catsStyles.container}>
        {isLoading ? <h1>Loading...</h1> : <>{children}</>}
      </div>
    </Provider>
  );
};

Cats.Viewer = Viewer;
Cats.FavoritesCarousel = FavoritesCarousel;

export default Cats;
