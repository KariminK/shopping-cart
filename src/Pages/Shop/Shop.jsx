import ShopItem from "../../Modules/ShopItem/ShopItem";
const Shop = ({ products }) => {
  let productElements = [];
  if (Array.isArray(products)) {
    productElements = products.map((product) => {
      return (
        <ShopItem
          productImage={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      );
    });
  }
  return (
    <>
      <h1>Products:</h1>
      {...productElements}
    </>
  );
};
export default Shop;
