import ShopItem from "../ShopItem/ShopItem";
const Cart = ({ products }) => {
  let productElems = [];
  if (Array.isArray(products) && products.length !== 0) {
    productElems = products.map((product) => {
      return (
        <ShopItem
          name={product.name}
          price={product.price}
          productImage={product.image}
          description={product.description}
        />
      );
    });
  }
  return (
    <div id="Cart" role="dialog">
      <button id="close-cart-button">X</button>
      {productElems.length !== 0 ? (
        <ul>{...productElems}</ul>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </div>
  );
};
export default Cart;
