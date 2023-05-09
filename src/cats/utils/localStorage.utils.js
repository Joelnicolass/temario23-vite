export const addToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const removeKeyFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const removeItemFromLocalStorage = (key, item) => {
  const items = getFromLocalStorage(key);

  if (!items) return;

  const filteredItems = items.filter((i) => i !== item);

  if (!filteredItems.length) {
    clearLocalStorage();
    return;
  }

  addToLocalStorage(key, filteredItems);
};
