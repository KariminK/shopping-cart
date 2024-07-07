import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";
import Amount from "../Amount/Amount";
import PropTypes from "prop-types";
const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [loading, error, product] = useProducts(id);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  if (loading) return <h1>Loading details...</h1>;
  if (error) navigate("/error");
  return (
    <div className="grid grid-cols-2 my-10 gap-10 max-w-6xl mx-auto">
      <div className="flex items-center justify-center border-r-2">
        <img src={product.image} alt={product.title} className="w-4/5" />
      </div>
      <div className="bg-white p-3">
        <h1 className="text-4xl font-bold font-serif">{product.title}</h1>
        <p className="text-slate-500 text-sm">Shop &gt; {product.category}</p>
        <h2 className="text-6xl my-5 font-bold font-serif">
          {product.price.toFixed(2)}$
        </h2>
        <div className="flex gap-2 items-center">
          <Amount
            amount={amount}
            onIncrease={() => setAmount(amount + 1)}
            onDecrease={() => setAmount(amount !== 1 ? amount - 1 : amount)}
          />
          <button
            className="primary-button"
            onClick={() => onAddToCart(id, amount)}
          >
            Add to cart
          </button>
        </div>
        <p>
          Rating:{" "}
          <span className="text-orange-500 font-bold">
            {product.rating.rate}
          </span>{" "}
          out of 5 based on{" "}
          <span className="text-orange-500 font-bold">
            {product.rating.count}
          </span>{" "}
          opinions
        </p>
        <h3 className="text-2xl mt-3 font-bold font-serif">Description</h3>
        <p className="text-lg">{product.description}</p>
      </div>
    </div>
  );
};
ProductDetails.propTypes = {
  onAddToCart: PropTypes.func,
};
export default ProductDetails;

//{
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }
