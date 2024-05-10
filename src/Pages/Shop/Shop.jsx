import ShopItem from "../../Modules/ShopItem/ShopItem";
const Shop = ({ products }) => {
  let productElements = [];
  if (Array.isArray(products)) {
    productElements = products.map((product) => {
      return (
        <ShopItem
          gridMode={true}
          productImage={product.image}
          name={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating}
        />
      );
    });
  }
  return (
    <>
      <div className="mx-10 p-3 grid gap-4 grid-cols-4">
        {...productElements}
      </div>
    </>
  );
};
export default Shop;
