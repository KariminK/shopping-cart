import { Link } from "react-router-dom";
import navbarIcon from "../../assets/navbar-icon.svg";
import { useEffect, useState } from "react";

const Navbar = ({ hasCart, onCartClick }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="sticky top-0 w-full text-slate-700 px-5 py-5 bg-white border-b-black box">
      {window.innerWidth < 600 ? (
        <div className="MOBILE_MENU sm:hidden flex justify-between flex-wrap">
          <h1 className="text-3xl font-bold text-yellow-400">eShop</h1>
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
                "links flex flex-col w-full justify-center text-left mt-5 sm:block sm:w-max sm:mt-0"
              }
            >
              <Link
                className="mx-5 py-3 hover:text-yellow-400 transition border-b border-b-slate-100"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="mx-5 py-3 hover:text-yellow-400 transition border-b border-b-slate-100"
                to={"/shop"}
              >
                Shop
              </Link>
              {hasCart && (
                <button className="mx-5 py-3 text-left" onClick={onCartClick}>
                  Cart
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="DESKTOP_MENU hidden sm:flex mx-auto max-w-7xl my-3 justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600">$tuff</h1>
          <div className={"links"}>
            <Link
              className="px-5 border-r hover:text-blue-400 transition text-xl border-slate-100"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="px-5 border-r hover:text-blue-400 transition text-xl border-slate-100"
              to={"/shop"}
            >
              Shop
            </Link>
            {hasCart && (
              <Link
                className="mx-5 text-left hover:text-blue-400 transition text-xl"
                to={"/cart"}
              >
                Cart
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
