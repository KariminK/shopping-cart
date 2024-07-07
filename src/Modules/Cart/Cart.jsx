import { Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
import useCart from "../../hooks/useCart";
import PropTypes from "prop-types";
const Cart = ({ productData = {}, onProductRemove }) => {
  const [loading, error, products] = useCart(Object.keys(productData));
  if (Object.keys(productData).length === 0) {
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
    console.log(productData);
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
        amount={+productData[product.id]}
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
  productData: PropTypes.object,
  onProductRemove: PropTypes.func,
};
export default Cart;
