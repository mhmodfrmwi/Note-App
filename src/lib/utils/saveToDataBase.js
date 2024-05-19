export const saveToDatabase = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
