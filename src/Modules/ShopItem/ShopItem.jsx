import { Link } from "react-router-dom";

const ShopItem = ({
  gridMode,
  id,
  productImage,
  name,
  price,
  description,
  rating,
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
          <button className="primary-button ">Add to cart</button>
          <Link className="secondary-button" to={"/product/"}>
            View details
          </Link>
        </div>
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
