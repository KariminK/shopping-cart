import { useEffect, useState } from "react";

const useProducts = (product, category) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let link = "https://fakestoreapi.com/products";
    if (product) link = "https://fakestoreapi.com/products/" + product;
    if (category)
      link = link = "https://fakestoreapi.com/products/category/" + category;
    fetch(link)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      })
      .catch((err) => {
        setError(err);
      });
  }, [product, category]);
  return [loading, error, products];
};
export default useProducts;
