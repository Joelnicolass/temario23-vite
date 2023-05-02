import React from "react";
import { usePokeContext } from "../view/PokeAppViewLocalPagination";

const SearchPokemon = () => {
  const { search: query, handleSearch } = usePokeContext();

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search pokemon by name"
    />
  );
};

export default SearchPokemon;
