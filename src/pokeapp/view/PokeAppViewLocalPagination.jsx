import React, { createContext, useContext } from "react";
import usePaginate from "../hooks/paginate/usePaginate";
import useFetch from "../hooks/useFetch";
import {
  POKEMON_API_RESPONSE,
  getAllPokemons,
} from "../services/pokeApi.service";
import PaginationButtons from "../components/PaginationButtons";
import PokemonList from "../components/PokemonList";
import SearchPokemon from "../components/SearchPokemon";
import useFavorites from "../hooks/useFavorites";
import BACKGROUND from "../../assets/background.jpg";

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${BACKGROUND})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const PokeContext = createContext();
const { Provider } = PokeContext;
export const usePokeContext = () => useContext(PokeContext);

const PokeAppViewLocalPagination = () => {
  const ELEMENTS_PER_PAGE = 10;

  const { favorites, handleFavorites } = useFavorites();

  const { data: pokemonsResponse } = useFetch({
    service: getAllPokemons,
  });

  const {
    maxPage,
    result: pokemons,
    search,
    page,
    handleNextPage,
    handlePrevPage,
    handleSearch,
  } = usePaginate({
    data: pokemonsResponse,
    limitElements: ELEMENTS_PER_PAGE,
    filterPropertyName: POKEMON_API_RESPONSE.NAME,
  });

  return (
    <Provider
      value={{
        page,
        search,
        maxPage,
        pokemons,
        favorites,
        handleSearch,
        handleFavorites,
        handlePrevPage,
        handleNextPage,
      }}
    >
      <div style={styles.container}>
        <h1>Pokes</h1>

        <SearchPokemon />
        <PokemonList />
        <PaginationButtons />
      </div>
    </Provider>
  );
};

export default PokeAppViewLocalPagination;
