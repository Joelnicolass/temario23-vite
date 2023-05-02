export const paginationUtils = {
  getMaxPage: (array, page_size) => {
    return Math.ceil(array.length / page_size);
  },
  paginate: (array, page_size, page_number) => {
    return array.slice(page_size * page_number, page_size * (page_number + 1));
  },
  filterElements: (array, query, filterProperty) => {
    if (!filterProperty)
      return array.filter((element) => element.includes(query.toLowerCase()));

    return array.filter((element) =>
      element[filterProperty].includes(query.toLowerCase())
    );
  },
  isEmpty: (arr) => arr.length === 0,
};
