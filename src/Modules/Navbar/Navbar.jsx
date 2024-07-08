import { Link, useLocation } from "react-router-dom";
import navbarIcon from "../../assets/navbar-icon.svg";
import { useEffect, useState } from "react";

const Navbar = ({ hasCart, cartItemsAmount }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [mode, setMode] = useState(
    window.innerWidth < 650 ? "mobile" : "desktop"
  );
  const { pathname } = useLocation();
  useEffect(() => {
    addEventListener("resize", () => {
      if (innerWidth < 650) setMode("mobile");
      else setMode("desktop");
    });
  }, []);
  return (
    <nav className="sticky top-0 w-full z-10  px-5 py-5 border-b-2 border-b-slate-200 bg-white box">
      {mode === "mobile" ? (
        <div className="MOBILE_MENU sm:hidden flex justify-between flex-wrap">
          <h1 className="text-3xl font-bold text-orange-500">eShop</h1>
          <button
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <img src={navbarIcon} alt="show links" className="w-7" />
          </button>
          {showLinks && (
            <ul
              className={
                "links font-semibold flex flex-col w-full justify-center text-left mt-5 sm:block sm:w-max sm:mt-0"
              }
            >
              <li
                className={
                  "py-3 border-b" +
                  (pathname === "/"
                    ? " text-orange-600  border-b-orange-500"
                    : " border-b-slate-500")
                }
              >
                <Link
                  className="hover:text-orange-400 transition text-xl"
                  to={"/"}
                >
                  Home
                </Link>
              </li>

              <li
                className={
                  "py-3 border-b" +
                  (pathname === "/shop"
                    ? " text-orange-600  border-b-orange-500"
                    : " border-b-slate-500")
                }
              >
                <Link
                  className="hover:text-orange-400 transition text-xl"
                  to={"/shop"}
                >
                  Shop
                </Link>
              </li>
              {hasCart && (
                <li
                  className={
                    "py-3 border-b" +
                    (pathname === "/cart"
                      ? " text-orange-600  border-b-orange-500"
                      : " border-b-slate-500")
                  }
                >
                  <Link
                    className="hover:text-orange-400 transition text-xl"
                    to={"/cart"}
                  >
                    Cart{" "}
                    {cartItemsAmount !== undefined && `[${cartItemsAmount}]`}
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      ) : (
        <div className="DESKTOP_MENU hidden sm:flex mx-auto max-w-7xl justify-between items-center">
          <h1 className="text-4xl font-bold text-orange-600">$tuff</h1>
          <div className={"links"}>
            <Link
              className={
                "px-5 border-r hover:text-slate-900 transition text-xl pb-2 border-slate-100" +
                (pathname === "/"
                  ? " text-orange-600 border-b-2 border-b-orange-500"
                  : "")
              }
              to={"/"}
            >
              Home
            </Link>
            <Link
              className={
                "px-5 border-r hover:text-slate-900 transition text-xl pb-2 border-slate-100" +
                (pathname === "/shop"
                  ? " text-orange-600 border-b-2 border-b-orange-500"
                  : "")
              }
              to={"/shop"}
            >
              Shop
            </Link>
            {hasCart && (
              <Link
                className={
                  "px-5 border-r hover:text-slate-900 transition text-xl pb-2 border-slate-100" +
                  (pathname === "/cart"
                    ? " text-orange-600 border-b-2 border-b-orange-500"
                    : "")
                }
                to={"/cart"}
              >
                Cart {cartItemsAmount !== undefined && `[${cartItemsAmount}]`}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
