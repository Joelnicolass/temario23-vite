import React, { useEffect, useState } from "react";

const POKEAPI = {
  URL_BASE: "https://pokeapi.co/api/v2/",
  URL_POKEMON: "pokemon",
  PARAMS: {
    LIMIT: "limit=",
    OFFSET: "offset=",
  },
};

const getAllPokemons = async (limit = 10, offset = 0) => {
  const url = `${POKEAPI.URL_BASE}${POKEAPI.URL_POKEMON}?${
    POKEAPI.PARAMS.LIMIT
  }${limit}&${POKEAPI.PARAMS.OFFSET}${offset * limit}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
};

const PokeAppView = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllPokemons(10, page);
        setPokemons(response);
      } catch (error) {
        setError("Error al obtener los pokemons");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <h1>Pokes</h1>

      <div>
        <h2>Buscar </h2>
        <input />
      </div>

      <div>
        <h2>Lista</h2>

        <div>
          {error && <p>{error}</p>}
          {pokemons.map((pokemon) => (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={handlePrevPage}>-</button>
        <span>{page + 1}</span>
        <button onClick={handleNextPage}>+</button>
      </div>
    </div>
  );
};

export default PokeAppView;
