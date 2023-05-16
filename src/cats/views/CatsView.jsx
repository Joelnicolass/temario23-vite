import React from "react";
import Cats from "../components/Cats";

const CatsView = () => {
  return (
    <>
      <Cats>
        <Cats.FavoritesCarousel />
        <Cats.Viewer />
      </Cats>
    </>
  );
};

export default CatsView;
