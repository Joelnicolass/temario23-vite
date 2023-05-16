import React from "react";
import { catsStyles } from "../styles/catStyles";
import FavoriteCard from "./FavoriteCard";
import { useCatsContext } from "./Cats";

const FavoritesCarousel = () => {
  const { favs, showLocalImage } = useCatsContext();

  return (
    <div style={catsStyles.favoriteContainer}>
      {favs.map((fav) => (
        <FavoriteCard key={fav} fav={fav} showLocalImage={showLocalImage} />
      ))}
    </div>
  );
};

export default FavoritesCarousel;
