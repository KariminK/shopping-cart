import { Link } from "react-router-dom";

const ShopItem = ({
  gridMode,
  id,
  productImage,
  name,
  price,
  description,
  rating,
  onAddToCart,
  onRemove,
}) => {
  if (gridMode)
    return (
      <div
        role="gridcell"
        className="bg-white p-5 rounded-lg border-2 border-slate-400"
      >
        <div className="h-96 flex items-center justify-center overflow-hidden">
          <img
            src={productImage}
            alt="product's image"
            className="mx-auto h-4/5"
          />
        </div>
        <h1 className="text-2xl font-bold truncate">{name}</h1>
        <p role="paragraph" className="text-m truncate h-fit">
          {description ? description : "No description"}
        </p>
        <h2 className="text-4xl text-blue-600 font-bold my-3">{price}$</h2>

        <p role="paragraph" className="text-l">
          {rating
            ? `${rating.rate}/5★ out of ${rating.count} opinions`
            : `0 opinions`}
        </p>
        <div className="flex justify-center mt-2 gap-2">
          <button className="primary-button" onClick={() => onAddToCart(id)}>
            Add to cart
          </button>
          <Link className="secondary-button" to={"/product/" + (id + 1)}>
            View details
          </Link>
        </div>
      </div>
    );
  else
    return (
      <li className="flex items-center border border-blue-600 my-2 h-52 rounded">
        <div className="max-w-28 max-h-52 flex items-center justify-center overflow-hidden mx-3">
          <img
            src={productImage}
            alt="product's image"
            className="mx-auto h-4/5"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-4xl font-bold text-blue-500 my-3">{price}$</h2>
          {onRemove && (
            <button className="remove-button" onClick={() => onRemove(id)}>
              Remove item
            </button>
          )}
        </div>
      </li>
    );
};
export default ShopItem;
