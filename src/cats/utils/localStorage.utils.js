export const addToLocaStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));

export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const removeFromLocalStorage = (key) => localStorage.removeItem(key);

export const removeItemFromLocalStorage = (key, item) => {
  const items = getFromLocalStorage(key);
  const filteredItems = items.filter((i) => i !== item);
  addToLocaStorage(key, filteredItems);
};

export const clearLocalStorage = () => localStorage.clear();
