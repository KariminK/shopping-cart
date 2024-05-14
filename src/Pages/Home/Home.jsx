import { Link } from "react-router-dom";
import placeholderImg from "/src/assets/stuff.jpeg";
const Home = () => {
  return (
    <>
      <section className="mt-20 max-w-7xl mx-auto grid grid-cols-2 place-items-center mb-6">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold ">
            Come and discover multiple{" "}
            <span className="text-blue-600">$tuff</span>
          </h1>
          <p className="text-xl text-slate-700 my-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            neque in itaque assumenda eos doloribus adipisci cupiditate porro
            vitae iusto.
          </p>
          <Link className="primary-button" to={"/shop"}>
            Shop now
          </Link>
        </div>
        <div className="border-2 shadow-inner border-blue-500">
          <img
            src={placeholderImg}
            alt=""
            className="w-[500px] place-self-start"
            title="created with bing"
          />
        </div>
      </section>
      <marquee className="bg-red-600 uppercase font-bold text-white py-2 text-3xl">
        hot $tuff in your neighbourhood! cheapest prices and fastest delivery
      </marquee>
    </>
  );
};
export default Home;
