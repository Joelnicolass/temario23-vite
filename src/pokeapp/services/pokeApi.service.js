import { POKEAPI } from "../config/pokeApi";

export const getAllPokemons = async (limit = 100000, offset = 0) => {
  const url = `${POKEAPI.URL_BASE}${POKEAPI.URL_POKEMON}?${
    POKEAPI.PARAMS.LIMIT
  }${limit}&${POKEAPI.PARAMS.OFFSET}${offset * limit}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
};

export const POKEMON_API_RESPONSE = {
  NAME: "name",
  URL: "url",
};
