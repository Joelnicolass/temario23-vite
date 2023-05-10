import { useState, useEffect } from "react";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../utils/localStorage.utils";

const useFavorites = (keyName = "favs") => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favorites = getFromLocalStorage(keyName);

    favorites && setFavs(favorites);
  }, []);

  const isFavorite = (item) => favs.includes(item);

  const addToFavorites = (item) => {
    const newFavs = [...new Set([...favs, item])];
    setFavs(newFavs);
    addToLocalStorage(keyName, newFavs);
  };

  const removeFromFavorites = (item) => {
    const newFavs = favs.filter((fav) => fav !== item);
    setFavs(newFavs);
    addToLocalStorage(keyName, newFavs);
  };

  const handleAddToFavs = (item) => {
    isFavorite(item) ? removeFromFavorites(item) : addToFavorites(item);
  };

  return {
    favs,
    handleAddToFavs,
  };
};

export default useFavorites;
