import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getProducts = () => {
  return axios.get(baseUrl + "/products").then((res) => res.data);
};
