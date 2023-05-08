import React, { useEffect, useState } from "react";
import styles from "./CatsView.module.css";
import useFetch from "../hooks/useFetch";

const CatsView = () => {
  const { data, isLoading, refetch } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const [favs, setFavs] = useState([]);

  const isFavorite = (cat) => {};

  const addToFavorites = (cat) => {
    setFavs([...new Set([...favs, cat])]);
  };

  const removeFromFavorites = (cat) => {};

  const handleFavorites = () => {
    addToFavorites(data[0].url);

    console.log(favs);
  };

  return (
    <div className={styles.catsView}>
      <div>
        {favs.map((cat) => (
          <h1 key={cat}>{cat}</h1>
        ))}
      </div>
      <div className={styles.viewer}>
        {isLoading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <img alt="cat" src={data[0].url} />
        )}

        <div className={styles.btnGroup}>
          <button onClick={handleFavorites}>❤️</button>
          <button onClick={refetch}>🔜</button>
        </div>
      </div>
      <div className={styles.favoriteContainer}>
        <div className={styles.favoriteCard}>
          <img src="https://cdn2.thecatapi.com/images/8f.gif" />
        </div>
      </div>
    </div>
  );
};

export default CatsView;
