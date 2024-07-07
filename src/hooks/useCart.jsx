import { useEffect, useState } from "react";

const fetchProducts = async (productIDs, setProducts, setError, setLoading) => {
  if (productIDs.length === 0) return;
  try {
    const responses = await Promise.all(
      productIDs.map((id) => fetch(`https://fakestoreapi.com/products/${id}`))
    );
    const data = await Promise.all(responses.map((res) => res.json()));
    setProducts(data);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};

const useCart = (productIDs) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(productIDs, setProducts, setError, setLoading);
  }, [productIDs]);

  return [loading, error, products];
};

export default useCart;
