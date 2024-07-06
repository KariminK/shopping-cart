import { useEffect, useState } from "react";
const useCategories = (category) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products/categories" +
        (category ? `/${category}` : "")
    )
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setCategories(json);
      })
      .catch((err) => {
        setError(err);
      });
  }, [category]);
  return [loading, error, categories];
};
export default useCategories;
