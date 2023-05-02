import React from "react";
import { usePokeContext } from "../view/PokeAppViewLocalPagination";

const PaginationButtons = () => {
  const { page, maxPage, handleNextPage, handlePrevPage } = usePokeContext();

  return (
    <div>
      <button onClick={handlePrevPage} disabled={page === 0}>
        -
      </button>
      <span>{page + 1}</span>

      <button onClick={handleNextPage} disabled={page + 1 === maxPage}>
        +
      </button>
    </div>
  );
};

export default PaginationButtons;
