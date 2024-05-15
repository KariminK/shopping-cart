import { Navigate, useNavigate, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, error, product] = useProducts(id);
  const navigate = useNavigate();
  if (loading) return <h1>Loading details...</h1>;
  if (error) navigate("/error");
  return (
    <div className="grid grid-cols-2 max-w-6xl gap-5 mx-auto">
      <div className="flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-4/5" />
      </div>
      <div>
        <h1 className="text-5xl">{product.title}</h1>
        <p className="text-slate-500 text-lg">Shop &gt; {product.category}</p>

        <p>
          Rating:{" "}
          <span className="text-blue-500 font-bold">{product.rating.rate}</span>{" "}
          out of 5 based on{" "}
          <span className="text-blue-500 font-bold">
            {product.rating.count}
          </span>{" "}
          opinions
        </p>
        <div className="grid grid-cols-2">
          <p className="text-lg mt-5">{product.description}</p>
        </div>
      </div>
    </div>
  );
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
