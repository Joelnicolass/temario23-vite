import React from "react";
import styles from "../views/CatsView.module.css";
import { useCatsContext } from "./CatsViewer";

const Favorites = () => {
  const { favs, setLocalData, enabledFavorites } = useCatsContext();

  const selectFavorite = (fav) => {
    setLocalData([
      {
        url: fav,
      },
    ]);
  };

  return (
    <div className={styles.favoriteContainer}>
      {favs.map((fav) => (
        <div className={styles.favoriteCard} key={fav}>
          <img src={fav} alt="cat" onClick={() => selectFavorite(fav)} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
