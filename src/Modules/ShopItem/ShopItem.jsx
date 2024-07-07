import { Link } from "react-router-dom";
import { FaCartShopping, FaAngleRight } from "react-icons/fa6";
import PropTypes from "prop-types";
const ShopItem = ({
  gridMode,
  id,
  productImage,
  name,
  price,
  description,
  rating,
  amount,
  onAddToCart,
  onRemove,
}) => {
  if (gridMode)
    return (
      <div role="gridcell" className="bg-white p-5 border-2 border-black">
        <div className="h-96 flex items-center justify-center overflow-hidden">
          <img
            src={productImage}
            alt="product's image"
            className="mx-auto h-4/5"
          />
        </div>
        <h1 className="text-2xl font-serif font-bold truncate">{name}</h1>
        <p role="paragraph" className="text-m truncate h-fit">
          {description ? description : "No description"}
        </p>
        <h2 className="text-4xl font-serif font-bold my-3">{price}$</h2>

        <p role="paragraph" className="text-l">
          {rating
            ? `${rating.rate}/5★ out of ${rating.count} opinions`
            : `0 opinions`}
        </p>
        <div className="flex mt-2 gap-2">
          <Link
            className="primary-button grow flex *:hover:opacity-100 items-center justify-between"
            to={"/product/" + (id + 1)}
          >
            View details{" "}
            <FaAngleRight className="opacity-0 transition-opacity" />
          </Link>
          <button
            className="primary-button flex justify-around items-center gap-1 grow bg-black"
            onClick={() => onAddToCart(id)}
          >
            Add to
            <FaCartShopping />
          </button>
        </div>
      </div>
    );
  else
    return (
      <li className="flex items-center border border-black my-2 h-52">
        <div className="max-w-28 max-h-52 flex items-center justify-center overflow-hidden mx-3">
          <img
            src={productImage}
            alt="product's image"
            className="mx-auto h-4/5"
          />
        </div>
        <div>
          <h1 className="text-xl font-serif font-bold">{name}</h1>
          <h2 className="text-3xl font-bold my-3 font-serif">{price}$</h2>
          <h2>Amount: {amount}</h2>

          <div className="flex mt-2 gap-2">
            <Link
              className="primary-button flex *:hover:opacity-100 items-center justify-between"
              to={"/product/" + (id + 1)}
            >
              View details{" "}
              <FaAngleRight className="opacity-0 transition-opacity" />
            </Link>
            {onRemove && (
              <button className="remove-button" onClick={() => onRemove(id)}>
                Remove item
              </button>
            )}
            {onAddToCart && (
              <button
                className="primary-button flex justify-around items-center gap-1 bg-black"
                onClick={() => onAddToCart(id)}
              >
                Add to
                <FaCartShopping />
              </button>
            )}
          </div>
        </div>
      </li>
    );
};

ShopItem.propTypes = {
  gridMode: PropTypes.bool,
  id: PropTypes.number,
  productImage: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  rating: PropTypes.object,
  onAddToCart: PropTypes.func,
  onRemove: PropTypes.func,
  amount: PropTypes.number,
};
export default ShopItem;
