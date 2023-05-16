import React from "react";
import { catsStyles } from "../styles/catStyles";
import { useCatsContext } from "./Cats";

const Viewer = () => {
  const { handleAddToFavs, image, refetch, isLoading } = useCatsContext();

  return (
    <div style={catsStyles.viewerContainer}>
      <div style={catsStyles.viewerTitle}>
        <h1>TITULO</h1>
      </div>
      <div style={catsStyles.viewerImage}>
        <img style={catsStyles.image} src={image} alt="cat" />
      </div>
      <div style={catsStyles.viewerButtons}>
        <button
          onClick={() => {
            handleAddToFavs(image);
          }}
        >
          ❤️
        </button>
        <button onClick={refetch} disabled={isLoading}>
          🔜
        </button>
      </div>
    </div>
  );
};

export default Viewer;
