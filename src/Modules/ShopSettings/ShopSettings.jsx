import { useState } from "react";
import PropTypes from "prop-types";
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
    <>
      <form
        aria-label="filters"
        className="flex items-center justify-between max-w-7xl mx-auto flex-wrap"
      >
        <h1 className="text-2xl font-serif font-bold w-full mb-2">Filters:</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            mode === "list" ? setMode("grid") : setMode("list");
          }}
          className="secondary-button w-36"
        >
          {mode + " mode"}
        </button>
        <label htmlFor="minPrice">
          Min. price:{" "}
          <input
            type="text"
            name="minPrice"
            value={minPrice}
            onChange={(e) => priceChangeHandler(e, setMinPrice)}
            id="minPrice"
            className="border focus:scale-110 outline-none border-orange-400 px-2 py-1 w-12"
          />
        </label>

        <label htmlFor="maxPrice">
          Max. price:{" "}
          <input
            type="text"
            name="maxPrice"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => priceChangeHandler(e, setMaxPrice)}
            className="border focus:scale-110 outline-none border-orange-400 px-2  py-1 w-12"
          />
        </label>

        <label htmlFor="category">
          Category:{" "}
          <select
            name="category"
            id="category"
            onChange={(e) => selectCategoryHandler(e)}
            value={selectedCategory}
            className="border outline-none bg-white border-orange-400 p-1"
          >
            {categoryElements}
          </select>
        </label>

        <button onClick={filterHandle} className="primary-button">
          Filter
        </button>
      </form>
    </>
  );
};

ShopSettings.propTypes = {
  onFilter: PropTypes.func,
  categories: PropTypes.array,
};

export default ShopSettings;
