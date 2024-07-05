import { Link } from "react-router-dom";
import placeholderImg from "/src/assets/stuff.jpeg";
import { FaAngleRight } from "react-icons/fa6";
import ListItem from "./components/ListItem";
const Home = () => {
  return (
    <>
      <section className="mt-4 max-w-7xl mx-auto grid grid-cols-2 mb-6">
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
        <div className="place-self-center flex">
          <div className="border-2 shadow-inner justify-self-start border-blue-500">
            <img
              src={placeholderImg}
              alt=""
              className="w-[500px]"
              title="created with bing"
            />
          </div>
          <div className="border-2 shadow-inner justify-self-end border-blue-500">
            <img
              src={placeholderImg}
              alt=""
              className="w-[500px]"
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
