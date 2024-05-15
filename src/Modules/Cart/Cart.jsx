import { Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
const Cart = ({ products, onProductRemove }) => {
  let productElems = [];
  if (Array.isArray(products) && products.length !== 0) {
    productElems = products.map((product, id) => {
      return (
        <ShopItem
          gridMode={false}
          id={id}
          productImage={product.image}
          name={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating}
          onRemove={onProductRemove}
        />
      );
    });
  }
  return (
    <section id="Cart" className="max-w-7xl mx-auto">
      {productElems.length !== 0 ? (
        <ul>{...productElems}</ul>
      ) : (
        <div className="my-10">
          <h1 className="text-5xl font-bold text-blue-500">Cart is empty</h1>
          <p className="text-xl">Go and find something interesting!</p>
        </div>
      )}
      <Link to={"/shop"} className="inline-block primary-button">
        Back to shop
      </Link>
    </section>
  );
};
export default Cart;
