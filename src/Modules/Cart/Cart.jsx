import { Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
import useCart from "../../hooks/useCart";
import PropTypes from "prop-types";

const calcTotalPrice = (products, productAmounts) => {
  let totalPrice = products
    .reduce((prev, curr) => (prev += curr.price * productAmounts[curr.id]), 0)
    .toFixed(2);
  if (isNaN(totalPrice)) return 0.0;
  else return totalPrice;
};

const Cart = ({
  productAmounts,
  productIDs,
  onProductRemove,
  onAmountChange,
}) => {
  const [loading, error, products] = useCart(productIDs);

  const totalPrice = calcTotalPrice(products, productAmounts);

  if (productIDs.length === 0) {
    return (
      <section id="Cart" className="max-w-7xl mx-auto">
        <div className="my-10">
          <h1 className="text-7xl font-bold font-serif">Cart is empty</h1>
          <p className="text-xl my-4">Go and find something interesting!</p>
          <Link
            to={"/shopping-cart/shop"}
            className="inline-block primary-button"
          >
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
        amount={productAmounts[product.id]}
        key={id}
        onAmountChange={onAmountChange}
      />
    );
  });
  return (
    <section id="Cart" className="max-w-7xl mx-auto">
      {loading && <p>Loading products...</p>}
      {error && <p>Error while loading products</p>}
      <ul>{productElems}</ul>

      <h1 className="text-5xl py-5 mt-5 border-t-2 border-t-slate-500 font-serif font-bold">
        Total price: {totalPrice}$
      </h1>
      <button className="primary-button">Checkout</button>
      <Link
        to={"/shopping-cart/shop"}
        className="inline-block mx-2 secondary-button"
      >
        Back to shop
      </Link>
    </section>
  );
};
Cart.propTypes = {
  productAmounts: PropTypes.object,
  productIDs: PropTypes.array,
  onProductRemove: PropTypes.func,
  onAmountChange: PropTypes.func,
};
export default Cart;
