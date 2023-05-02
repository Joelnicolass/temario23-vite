import React, { useEffect, useState } from "react";

const useFavorites = () => {
  const KEY_LOCAL_STORAGE = "favorites";

  useEffect(() => {
    const favorites = localStorage.getItem(KEY_LOCAL_STORAGE);

    if (favorites) {
      setFavorites(new Map(JSON.parse(favorites)));
    }
  }, []);

  const [favorites, setFavorites] = useState(new Map([]));

  const addFavorite = ({ name, url }) => {
    const newFavorites = structuredClone(favorites);
    newFavorites.set(name, { name, url });

    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify([...newFavorites]));

    setFavorites(newFavorites);
  };

  const removeFavorite = ({ name }) => {
    const newFavorites = structuredClone(favorites);
    newFavorites.delete(name);

    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify([...newFavorites]));

    setFavorites(newFavorites);
  };

  const handleFavorites = ({ name, url }) => {
    if (favorites.has(name)) {
      removeFavorite({ name });
      return;
    }

    addFavorite({ name, url });
  };

  return { favorites, handleFavorites };
};

export default useFavorites;
