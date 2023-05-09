import { useEffect, useState } from "react";
import {
  addToLocaStorage,
  getFromLocalStorage,
} from "../utils/localStorage.utils";

const useFavs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favs = getFromLocalStorage("favs");
    favs && setFavs(favs);
  }, []);

  const isFavorite = (item) => favs.includes(item);

  const addToFavorites = (item) => {
    const newFavs = [...new Set([...favs, item])];
    setFavs(newFavs);
    addToLocaStorage("favs", newFavs);
  };

  const removeFromFavorites = (item) => {
    const newFavs = favs.filter((fav) => fav !== item);
    setFavs(newFavs);
    addToLocaStorage("favs", newFavs);
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
