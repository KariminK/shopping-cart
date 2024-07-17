import ShopItem from "../../Modules/ShopItem/ShopItem";
import ShopSettings from "../../Modules/ShopSettings/ShopSettings";
import PropTypes from "prop-types";
import useProducts from "../../hooks/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import { useState } from "react";
const Shop = ({ onAddToCart }) => {
  const { category } = useParams();
  const [loading, error, products] = useProducts(false, category);
  const [loadingCat, errorCat, categories] = useCategories();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    mode: true,
    minPrice: 0,
    maxPrice: 1000,
  });

  const filterHandle = (newFilters) => {
    if (
      newFilters.selectedCategory != category &&
      !(newFilters.selectedCategory === "All" && category === undefined)
    ) {
      navigate("/shop/" + newFilters.selectedCategory);
    }
    setFilters(newFilters);
  };

  let productElements = [];
  productElements = products
    .filter(
      (product) =>
        product.price > filters.minPrice && product.price < filters.maxPrice
    )
    .map((product, index) => {
      return (
        <ShopItem
          gridMode={filters.mode}
          productImage={product.image}
          id={index + 1}
          name={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating}
          onAddToCart={onAddToCart}
          key={index + 1}
        />
      );
    });
  return (
    <>
      {errorCat && <p>Erro while loading filters</p>}
      {loadingCat && <p>Loading filters...</p>}
      {categories && (
        <ShopSettings onFilter={filterHandle} categories={categories} />
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {productElements && (
        <div className="mx-10 p-3 grid gap-4 grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 sm:p-0">
          {productElements}
        </div>
      )}
    </>
  );
};
Shop.propTypes = {
  onAddToCart: PropTypes.func,
};
export default Shop;
