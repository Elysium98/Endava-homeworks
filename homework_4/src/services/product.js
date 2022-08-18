import axios from "axios";

const baseUrl = "http://localhost:3000/products";
const headers = {
  "Content-type": "application/json",
};

class ProductService {
  getProducts = async () => {
    const response = await axios.get(baseUrl);
    if (response.status === 200) {
      return await response.data;
    }
    throw new Error("something went wrong");
  };

  getProductById = async (id) => {
    const response = await axios.get(baseUrl + "/" + id);
    if (response.status === 200) {
      return await response.data;
    }
    throw new Error("something went wrong");
  };

  createProduct = async (product) => {
    const response = await axios.post(baseUrl, product, headers);
    console.log(response);
    if (response.status === 201) {
      return await response.data;
    }

    throw new Error("Something went wrong");
  };

  updateProduct = async (product) => {
    const response = await axios.put(
      baseUrl + "/" + product.id,
      product,
      headers
    );
    if (response.status === 200) {
      return await response.data;
    }
    throw new Error("Something went wrong");
  };

  deleteProduct = async (id) => {
    const response = await axios.delete(baseUrl + "/" + id, {
      method: "DELETE",
    });
    console.log(response);
    if (response.status === 200) {
      return await response.statusText;
    }
    throw new Error("Something went wrong");
  };
}
export default ProductService;
