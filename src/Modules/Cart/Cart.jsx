import { Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
import useCart from "../../hooks/useCart";
import PropTypes from "prop-types";
const Cart = ({ productAmounts, productIDs, onProductRemove }) => {
  const [loading, error, products] = useCart(productIDs);
  if (productIDs.length === 0) {
    return (
      <section id="Cart" className="max-w-7xl mx-auto">
        <div className="my-10">
          <h1 className="text-7xl font-bold font-serif">Cart is empty</h1>
          <p className="text-xl my-4">Go and find something interesting!</p>
          <Link to={"/shop"} className="inline-block primary-button">
            Back to shop
          </Link>
        </div>
      </section>
    );
  }

  let productElems = [];
  productElems = products.map((product, id) => {
    return (
      <ShopItem
        gridMode={false}
        id={product.id}
        productImage={product.image}
        name={product.title}
        price={product.price}
        description={product.description}
        rating={product.rating}
        onRemove={onProductRemove}
        amount={+productAmounts[product.id]}
        key={id}
      />
    );
  });
  return (
    <section id="Cart" className="max-w-7xl mx-auto">
      {loading && <p>Loading products...</p>}
      {error && <p>Error while loading products</p>}
      <ul>{productElems}</ul>
      <Link to={"/shop"} className="inline-block primary-button">
        Back to shop
      </Link>
    </section>
  );
};
Cart.propTypes = {
  productAmounts: PropTypes.object,
  productIDs: PropTypes.array,
  onProductRemove: PropTypes.func,
};
export default Cart;
