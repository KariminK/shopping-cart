import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ErrorPage from "./Pages/Error/Error";
import Navbar from "./Modules/Navbar/Navbar";
import Cart from "./Modules/Cart/Cart";

const App = () => {
  return (
    <div className="h-screen ">
      <Navbar hasCart={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App;
