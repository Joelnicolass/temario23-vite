export const addToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return;
  return JSON.parse(item);
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const cleanLocalStorage = () => {
  localStorage.clear();
};
