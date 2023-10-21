import { useEffect, useState } from "react";
import getProductsApi from "../API/getProductsApi";

const useGetProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        getProductsApi().then((res) => {
          setProductsData(res.data);
          setLoading(false);
        });
      } catch (error) {
        setLoading(false);
        setError("Error from server");
      }
    };

    getProducts();
  }, []);

  return [productsData, loading, error];
};

export default useGetProduct;
