import axios from "axios";

const baseUrl = "http://localhost:3000/ingredients";

class IngredientService {
  getIngredients = async () => {
    const response = await axios.get(baseUrl);
    if (response.status === 200) {
      return await response.data;
    }
    throw new Error("something went wrong");
  };
}

export default IngredientService;
