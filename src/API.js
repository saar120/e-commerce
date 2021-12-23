import axios from "axios";

const store = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export default class API {
  static getCategories = async () => {
    const { data } = await store.get("/categories");
    return data;
  };
  static getCategory = async (category) => {
    const { data } = await store.get("/category/" + category);
    return data;
  };
}
