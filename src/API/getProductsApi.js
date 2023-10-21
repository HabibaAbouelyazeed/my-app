import axios from "axios";

const getProductsApi = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getProductsApi;
