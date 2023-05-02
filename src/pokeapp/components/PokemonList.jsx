import React from "react";
import PokemonItem from "./PokemonItem";
import { usePokeContext } from "../view/PokeAppViewLocalPagination";

const styles = {
  container: {
    width: "50%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "1rem",
    margin: "2rem",
  },
};

const PokemonList = () => {
  const { pokemons } = usePokeContext();

  return (
    <div style={styles.container}>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
