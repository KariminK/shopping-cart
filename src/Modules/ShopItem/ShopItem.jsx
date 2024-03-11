const ShopItem = ({ gridMode, productImage, name, price, description }) => {
  if (gridMode)
    return (
      <div role="gridcell">
        <img src={productImage} alt="product's image" />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p role="paragraph">
          {description ? description.slice(0, 50) + "..." : "No description"}
        </p>
      </div>
    );
  else
    return (
      <li>
        <img src={productImage} alt="product's image" />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p role="paragraph">
          {description ? description.slice(0, 50) + "..." : "No description"}
        </p>
      </li>
    );
};
export default ShopItem;
