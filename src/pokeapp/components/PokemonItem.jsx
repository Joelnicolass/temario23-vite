import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { usePokeContext } from "../view/PokeAppViewLocalPagination";

const styles = {
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
  },
};

const PokemonItem = ({ pokemon }) => {
  const { name, url } = pokemon;

  const { favorites, handleFavorites } = usePokeContext();

  const { data, isLoading } = useFetch({
    service: async () => {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
  });

  return (
    <div>
      <h3>{name}</h3>

      {isLoading && (
        <div style={styles.img}>
          <h4>Loading</h4>
        </div>
      )}

      {!isLoading && (
        <img
          style={styles.img}
          src={
            data?.sprites?.other?.dream_world?.front_default ||
            data?.sprites?.other?.["official-artwork"]?.front_default
          }
          alt={name}
        />
      )}

      <button
        onClick={() => {
          handleFavorites({ name, url });
        }}
      >
        {favorites.has(name) ? "❤️" : "🖤"}
      </button>
    </div>
  );
};

export default PokemonItem;
