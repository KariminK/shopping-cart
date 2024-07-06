import { useEffect, useState } from "react";
const useCategories = (category) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let link = "https://fakestoreapi.com/products/categories";
    if (category)
      link = "https://fakestoreapi.com/products/category/" + category;
    console.log(link);
    fetch(link)
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
