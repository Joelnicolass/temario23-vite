import React, { useEffect, useState } from "react";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../utils/localStorage.utils";

const useFavs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const loadFavorites = () => getFromLocalStorage("favs") || [];
    setFavs(loadFavorites());
  }, []);

  const isFavorite = (item) => {
    return favs.includes(item);
  };

  const addToFavorites = (item) => {
    const newFavs = [...favs, item];
    const withoutDuplicates = [...new Set(newFavs)];
    setFavs(withoutDuplicates);
    addToLocalStorage("favs", withoutDuplicates);
  };

  const removeFromFavorites = (item) => {
    const newFavs = favs.filter((f) => f !== item);
    setFavs(newFavs);
    addToLocalStorage("favs", newFavs);
  };

  const handleFavorites = (item) => {
    isFavorite(item) ? removeFromFavorites(item) : addToFavorites(item);
  };

  return {
    favs,
    handleFavorites,
  };
};

export default useFavs;
