import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="mt-20 max-w-4xl mx-auto grid grid-cols-2 place-items-center mb-6">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-l text-slate-700 my-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            neque in itaque assumenda eos doloribus adipisci cupiditate porro
            vitae iusto.
          </p>
          <Link className="primary-button">Shop now</Link>
        </div>
        <div className="border-2 p-5 border-blue-500">
          <img
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
            className="h-96 place-self-start"
          />
        </div>
      </section>
    </>
  );
};
export default Home;
