import { Link } from "react-router-dom";
import navbarIcon from "../../assets/navbar-icon.svg";
import { useEffect, useState } from "react";

const Navbar = ({ hasCart, onCartClick }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className=" text-slate-100 p-3 border-b-black">
      <div className="MOBILE_MENU sm:hidden flex justify-between flex-wrap">
        <h1 className="text-3xl font-bold">eShop</h1>
        <button
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <img src={navbarIcon} alt="show links" className="w-7" />
        </button>
        {showLinks && (
          <div
            className={
              "links flex flex-col w-full justify-center text-left gap-5 mt-5 sm:block sm:w-max sm:mt-0"
            }
          >
            <Link className="mx-5" to={"/"}>
              Home
            </Link>
            <Link className="mx-5" to={"/shop"}>
              Shop
            </Link>
            {hasCart && (
              <button className="mx-5 text-left" onClick={onCartClick}>
                Cart
              </button>
            )}
          </div>
        )}
      </div>
      <div className="DESKTOP_MENU hidden sm:flex justify-between items-center">
        <h1 className="text-3xl font-bold">eShop</h1>
        <div className={"links"}>
          <Link className="mx-5" to={"/"}>
            Home
          </Link>
          <Link className="mx-5" to={"/shop"}>
            Shop
          </Link>
          {hasCart && (
            <button className="mx-5 text-left" onClick={onCartClick}>
              Cart
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
