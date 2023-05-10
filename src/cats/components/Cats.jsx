import React, { createContext } from "react";
import Viewer from "./Viewer";
import { catsStyles } from "../styles/catStyles";
import FavoritesCarousel from "./FavoritesCarousel";
import useFetch from "../hooks/useFetch";
import useFavorites from "../hooks/useFavorites";

const CatsContext = createContext();
const { Provider } = CatsContext;

const Cats = () => {
  const { data, isLoading, refetch, showLocalImage } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const { favs, handleAddToFavs } = useFavorites();

  return (
    <Provider>
      <div style={catsStyles.container}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Viewer
              handleAddToFavs={handleAddToFavs}
              image={data[0].url}
              isLoading={isLoading}
              refetch={refetch}
            />

            <FavoritesCarousel favs={favs} showLocalImage={showLocalImage} />
          </>
        )}
      </div>
    </Provider>
  );
};

export default Cats;
