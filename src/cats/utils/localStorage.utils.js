export const addToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const cleanLocalStorage = () => {
  localStorage.clear();
};
