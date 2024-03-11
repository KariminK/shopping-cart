import { Link } from "react-router-dom";

const Navbar = ({ hasCart, onCartClick }) => {
  return (
    <nav>
      <h1>eShop</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop</Link>
      {hasCart && <button onClick={onCartClick}>Cart</button>}
    </nav>
  );
};
export default Navbar;
