import { Link } from "react-router-dom";
import man1 from "/src/assets/man 1.jpg";
import man2 from "/src/assets/man 2.jpg";

import { FaAngleRight } from "react-icons/fa6";
import ListItem from "./components/ListItem";
const Home = () => {
  return (
    <>
      <section className="mt-4 max-w-7xl mx-auto grid grid-cols-3 mb-6">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold ">
            Cheapest online store ever on Earth
          </h1>
          <Link
            className="primary-button flex items-center w-fit my-10"
            to={"/shop"}
          >
            Explore More <FaAngleRight className="ml-2" />
          </Link>
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
          <div className="rotate-6 bg-gradient-to-t from-orange-400 via-yellow-400 to-orange-400 absolute top-5 left-10 shadow-inner h-fit">
            <img
              src={man1}
              alt=""
              className="w-[350px] -rotate-6"
              title="created with bing"
            />
          </div>
          <div className="-rotate-12 bg-gradient-to-t from-orange-400 via-yellow-400 to-orange-400 absolute bottom-5 right-0 shadow-inner h-fit">
            <img
              src={man2}
              alt=""
              className="w-[250px] rotate-6"
              title="created with bing"
            />
          </div>
        </div>
      </section>
      <marquee className="bg-red-600 uppercase font-bold text-white py-2 text-3xl">
        hot $tuff in your neighbourhood! cheapest prices and fastest delivery
      </marquee>
      <section className="text-center py-5 bg-orange-200">
        <h1 className="text-4xl font-bold my-2">DISCLAMER!</h1>
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
