import { useEffect, useState } from "react";

const useProducts = (product, category) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      let link = "https://fakestoreapi.com/products";

      if (product) link = `https://fakestoreapi.com/products/${product}`;
      if (category)
        link = `https://fakestoreapi.com/products/category/${category}`;

      try {
        const response = await fetch(link);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return [loading, error, products];
};

export default useProducts;
