import { useEffect, useState } from "react";

const useProducts = (product) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products" + (product ? `/${product}` : ""))
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return [loading, error, products];
};
export default useProducts;
