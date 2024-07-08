import { FaPlus, FaMinus } from "react-icons/fa6";
import PropTypes from "prop-types";

const Amount = ({ amount, onIncrease, onDecrease, className }) => {
  return (
    <div className={"flex " + className}>
      <button
        className="primary-button bg-black px-2 rounded-l-full"
        aria-label="increase"
        onClick={onIncrease}
      >
        <FaPlus />
      </button>
      <input
        type="text"
        className="outline-none border-2 cursor-default text-center border-black py-1 px-3 w-16"
        value={amount}
        readOnly
      />
      <button
        className="primary-button bg-black px-2 rounded-r-full"
        aria-label="decrease"
        onClick={onDecrease}
      >
        <FaMinus />
      </button>
    </div>
  );
};
Amount.propTypes = {
  amount: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  className: PropTypes.string,
};
export default Amount;
