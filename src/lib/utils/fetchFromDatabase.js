const fetchFromDatabase = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
export default fetchFromDatabase;
