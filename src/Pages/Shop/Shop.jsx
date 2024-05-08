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
        />
      );
    });
  }
  return (
    <>
      <div className="p-2 grid gap-4 grid-cols-5 bg-slate-300">
        {...productElements}
      </div>
    </>
  );
};
export default Shop;
