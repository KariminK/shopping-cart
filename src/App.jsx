import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ErrorPage from "./Pages/Error/Error";
import Navbar from "./Modules/Navbar/Navbar";
import Cart from "./Modules/Cart/Cart";
import useProducts from "./hooks/useProducts";
const App = () => {
  const [loading, error, products] = useProducts();
  const selectedItems = products.slice(0, 10);
  return (
    <div className="h-screen ">
      <Navbar hasCart={true} cartItemsAmount={selectedItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/cart" element={<Cart products={selectedItems} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App;
