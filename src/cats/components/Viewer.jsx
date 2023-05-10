import React from "react";
import { catsStyles } from "../styles/catStyles";

const Viewer = ({ handleAddToFavs, image, refetch, isLoading }) => {
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
