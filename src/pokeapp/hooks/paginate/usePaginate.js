import React, { useState } from "react";
import { paginationUtils } from "./pagination.utils";

const usePaginate = ({
  data = [],
  limitElements = 5,
  filterPropertyName = "",
}) => {
  const MIN_PAGE_STATE = 0;
  const MIN_PAGE_VISIBLE = 1;

  const [page, setPage] = useState(MIN_PAGE_STATE);
  const [search, setSearch] = useState("");

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleSearch = (e) => {
    setPage(MIN_PAGE_STATE);
    setSearch(e.target.value);
  };

  const applyFiltersAndPagination = (array, page_size, page_number) => {
    let result = [];
    let maxPage = MIN_PAGE_STATE;

    if (!search) {
      result = paginationUtils.paginate(array, page_size, page_number);
      maxPage = paginationUtils.getMaxPage(array, page_size);
    }

    if (search) {
      const filtered = paginationUtils.filterElements(
        array,
        search,
        filterPropertyName
      );
      result = paginationUtils.paginate(filtered, page_size, page_number);

      maxPage = paginationUtils.isEmpty(filtered)
        ? MIN_PAGE_VISIBLE
        : paginationUtils.getMaxPage(filtered, page_size);
    }

    return {
      result,
      maxPage,
    };
  };

  const { result, maxPage } = applyFiltersAndPagination(
    data,
    limitElements,
    page
  );

  return {
    result,
    maxPage,
    search,
    page,
    handleSearch,
    handleNextPage,
    handlePrevPage,
  };
};

export default usePaginate;
