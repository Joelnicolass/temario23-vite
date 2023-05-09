import React from "react";
import styles from "../views/CatsView.module.css";
import FavoriteCard from "./FavoriteCard";
import { useCatsContext } from "./Cats";

const FavoritesCarousel = () => {
  const { favs } = useCatsContext();

  return (
    <div className={styles.favoriteContainer}>
      {favs.map((fav) => (
        <FavoriteCard fav={fav} key={fav} />
      ))}
    </div>
  );
};

export default FavoritesCarousel;
