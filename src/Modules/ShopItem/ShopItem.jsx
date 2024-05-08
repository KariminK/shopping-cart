const ShopItem = ({ gridMode, productImage, name, price, description }) => {
  if (gridMode)
    return (
      <div role="gridcell" className="bg-white p-5 rounded-lg">
        <div className="h-96 flex items-center justify-center overflow-hidden">
          <img
            src={productImage}
            alt="product's image"
            className="mx-auto h-4/5"
          />
        </div>
        <h1 className="text-3xl font-bold truncate">{name}</h1>
        <h2 className="text-5xl text-yellow-900 my-3">{price}$</h2>
        <p role="paragraph" className="text-m overflow-hidden h-20">
          {description ? description : "No description"}
        </p>
        <button className="primary-button mt-2">Add to cart</button>
      </div>
    );
  else
    return (
      <li className="">
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
