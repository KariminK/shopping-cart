import ShopItem from "../../Modules/ShopItem/ShopItem";
import ShopSettings from "../../Modules/ShopSettings/ShopSettings";
const Shop = ({ products }) => {
  let productElements = [];
  let categories = [];
  if (!Array.isArray(products)) {
    return <h1>Loading products...</h1>;
  }
  categories = products
    .map((el) => el.category)
    .filter((el, index, arr) => arr.indexOf(el) === index);
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
  return (
    <>
      <ShopSettings categories={categories} />
      <div className="mx-10 p-3 grid gap-4 grid-cols-4">
        {...productElements}
      </div>
    </>
  );
};
export default Shop;
