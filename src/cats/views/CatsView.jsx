import React, { useEffect, useState } from "react";
import { catsStyles } from "../styles/catStyles";
import useFetch from "../hooks/useFetch";

const CatsView = () => {
  const { data, isLoading, refetch } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );
  const image = isLoading ? "" : data[0].url;

  const [favs, setFavs] = useState([]);

  const handleAddToFavs = () => {
    setFavs([...favs, image]);
  };
  const handleRemoveFromFavs = () => {};

  return (
    <div style={catsStyles.container}>
      <div style={catsStyles.viewerContainer}>
        <div style={catsStyles.viewerTitle}>
          <h1>Title</h1>
          <p>{favs}</p>
        </div>
        <div style={catsStyles.viewerImage}>
          <img style={catsStyles.image} src={image} alt="cat" />
        </div>
        <div style={catsStyles.viewerButtons}>
          <button
            onClick={() => {
              handleAddToFavs();
            }}
          >
            ❤️
          </button>
          <button onClick={refetch} disabled={isLoading}>
            🔜
          </button>
        </div>
      </div>
      <div style={catsStyles.favoriteContainer}>
        <div style={catsStyles.favoriteCard}>
          <img
            style={catsStyles.image}
            src="https://cdn2.thecatapi.com/images/8f.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default CatsView;
