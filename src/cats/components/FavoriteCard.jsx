import React from "react";
import styles from "../views/CatsView.module.css";
import { useCatsContext } from "./Cats";

const FavoriteCard = ({ fav }) => {
  const { showFavorite } = useCatsContext();

  return (
    <div className={styles.favoriteCard}>
      <img
        src={fav}
        onClick={() => {
          showFavorite(fav);
        }}
      />
    </div>
  );
};

export default FavoriteCard;
