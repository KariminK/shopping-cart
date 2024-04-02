import { useState } from "react";

const ShopSettings = ({ onFilter, categories }) => {
  const [mode, setMode] = useState("list");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const priceChangeHandler = (e, setPrice) => {
    e.preventDefault();
    if (!isNaN(Number(e.target.value))) {
      setPrice(+e.target.value);
    }
  };
  const selectCategoryHandler = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };

  let categoryElements = [];
  if (Array.isArray(categories)) {
    categories.forEach((category, index) => {
      categoryElements.push(
        <option key={index} value={category}>
          {category}
        </option>
      );
    });
  }
  const filterHandle = (e) => {
    e.preventDefault();
    const filterData = {
      mode,
      minPrice,
      maxPrice,
      selectedCategory,
    };
    onFilter(filterData);
  };
  return (
    <form aria-label="filters">
      <button
        onClick={(e) => {
          e.preventDefault();
          mode === "list" ? setMode("grid") : setMode("list");
        }}
      >
        {mode + " mode"}
      </button>
      <label htmlFor="minPrice">Min. price:</label>
      <input
        type="text"
        name="minPrice"
        value={minPrice}
        onChange={(e) => priceChangeHandler(e, setMinPrice)}
        id="minPrice"
      />
      <label htmlFor="maxPrice">Max. price:</label>
      <input
        type="text"
        name="maxPrice"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => priceChangeHandler(e, setMaxPrice)}
      />
      <label htmlFor="category">Category:</label>
      <select
        name="category"
        id="category"
        onChange={(e) => selectCategoryHandler(e)}
        value={selectedCategory}
      >
        {categoryElements}
      </select>
      <button onClick={filterHandle}>Filter</button>
    </form>
  );
};
export default ShopSettings;
