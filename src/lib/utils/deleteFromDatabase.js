import fetchFromDatabase from "./fetchFromDatabase";
import { saveToDatabase } from "./saveToDataBase";

const deleteFromDatabase = (key, index) => {
  const products = fetchFromDatabase(key);
  products.splice(index, 1);
  saveToDatabase(key, products);
};
export default deleteFromDatabase;
