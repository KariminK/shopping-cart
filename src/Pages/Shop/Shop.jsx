import ShopItem from "../../Modules/ShopItem/ShopItem";
import ShopSettings from "../../Modules/ShopSettings/ShopSettings";
import PropTypes from "prop-types";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
const Shop = ({ onAddToCart }) => {
  const { category } = useParams();
  let loading, error, products;
  if (category) {
    [loading, error, products] = useCategories(category);
  } else {
    [loading, error, products] = useProducts();
  }
  const [loadingCat, errorCat, categories] = useCategories();

  let productElements = [];
  productElements = products.map((product, index) => {
    return (
      <ShopItem
        gridMode={true}
        productImage={product.image}
        id={index}
        name={product.title}
        price={product.price}
        description={product.description}
        rating={product.rating}
        onAddToCart={onAddToCart}
        key={index}
      />
    );
  });
  return (
    <>
      {errorCat && <p>Erro while loading filters</p>}
      {loadingCat && <p>Loading filters...</p>}
      {categories && <ShopSettings categories={categories} />}
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {productElements && (
        <div className="mx-10 p-3 grid gap-4 grid-cols-4">
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
