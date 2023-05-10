import React from "react";
import { catsStyles } from "../styles/catStyles";
import FavoriteCard from "./FavoriteCard";

const FavoritesCarousel = ({ favs, showLocalImage }) => {
  return (
    <div style={catsStyles.favoriteContainer}>
      {favs.map((fav) => (
        <FavoriteCard key={fav} fav={fav} showLocalImage={showLocalImage} />
      ))}
    </div>
  );
};

export default FavoritesCarousel;
