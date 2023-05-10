import React from "react";
import { catsStyles } from "../styles/catStyles";

const FavoriteCard = ({ showLocalImage, fav }) => {
  return (
    <div style={catsStyles.favoriteCard}>
      <img
        onClick={() => {
          showLocalImage(fav);
        }}
        style={catsStyles.image}
        src={fav}
      />
    </div>
  );
};

export default FavoriteCard;
