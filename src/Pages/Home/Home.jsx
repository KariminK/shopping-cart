import { Link } from "react-router-dom";
import man1 from "/src/assets/man 1.jpg";
import man2 from "/src/assets/man 2.jpg";
import Marquee from "react-fast-marquee";
import { FaAngleRight, FaCartShopping } from "react-icons/fa6";
import ListItem from "./components/ListItem";
import useCategories from "../../hooks/useCategories";
const Home = () => {
  const [loading, error, categories] = useCategories();
  let categoryEls = [];
  if (categories) {
    categoryEls = categories.map((category, i) => {
      return (
        <li
          className="text-2xl font-serif font-bold bg-white grow mx-[1px] first:ml-0 last:mr-0 p-7 text-center hover:text-orange-600 cursor-pointer transition-colors"
          key={i}
        >
          <Link to={`/shop/${category}`}>{category}</Link>
        </li>
      );
    });
  }
  return (
    <>
      <section className="mt-4 max-w-7xl mx-auto grid grid-cols-3 mb-6">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold font-serif">
            Cheapest online store ever on Earth
          </h1>
          <div className="flex items-center gap-4 mt-5 mb-10">
            <Link className="primary-button flex items-center " to={"/shop"}>
              Explore More <FaAngleRight className="ml-2" />
            </Link>
            <Link className="primary-button p-4 bg-black" to={"/cart"}>
              <FaCartShopping />
            </Link>
          </div>
          <h2 className="text-xl font-bold">What makes us cheapest?</h2>
          <ul className="list-inside">
            <ListItem>0% tax</ListItem>
            <ListItem>Shipping from china</ListItem>
            <ListItem>No Guarantee (0 employers needed)</ListItem>
            <ListItem>No returns</ListItem>
            <ListItem>No margin for store</ListItem>
          </ul>
        </div>
        <div className="relative col-span-2">
          <div className="rotate-6 p-2 bg-gradient-to-t from-orange-400 via-yellow-400 to-orange-400 absolute top-5 left-10 shadow-inner h-fit">
            <img
              src={man1}
              alt=""
              className="w-[350px] -rotate-6"
              title="created with bing"
            />
          </div>
          <div className="-rotate-12 p-2 bg-gradient-to-t from-orange-400 via-yellow-400 to-orange-400 absolute bottom-5 right-0 shadow-inner h-fit">
            <img
              src={man2}
              alt=""
              className="w-[250px] rotate-6"
              title="created with bing"
            />
          </div>
        </div>
      </section>
      <section className="border-2 border-gray-200 max-w-7xl mx-auto capitalize my-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {categories && (
          <ul className="flex justify-between bg-gray-200">{categoryEls}</ul>
        )}
      </section>
      <Marquee className="bg-red-600 uppercase font-bold text-white py-2 text-3xl">
        hot $tuff in your neighbourhood! cheapest prices and fastest delivery
      </Marquee>
      <section className="text-center py-5 bg-orange-200">
        <h1 className="text-4xl font-bold font-serif my-2">DISCLAMER!</h1>
        <p className="text-lg">
          I do not support shops like this, which are extremely unfriendly for
          customers. All of this content was written as a joke. It&apos;s only
          personal project for learning purposes.
        </p>
      </section>
    </>
  );
};
export default Home;
