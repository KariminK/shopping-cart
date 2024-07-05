import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";
const ListItem = ({ children }) => {
  return (
    <li className="flex items-center my-4">
      <div className="bg-orange-500 p-1 mx-2 rounded-full">
        <FaCheck color="white" size={10} />
      </div>
      <span className="text-xl">{children}</span>
    </li>
  );
};
ListItem.propTypes = {
  children: PropTypes.string,
};
export default ListItem;
