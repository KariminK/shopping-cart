import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ErrorPage from "./Pages/Error/Error";
import Navbar from "./Modules/Navbar/Navbar";
import Cart from "./Modules/Cart/Cart";
import { useState } from "react";
import ProductDetails from "./Modules/ProductDetails/ProductDetails";
const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const productRemoveHandler = (productIndex) => {
    setSelectedItems(
      selectedItems.filter((item, index) => index !== productIndex)
    );
  };
  const addToCartHandler = (productIndex) => {
    setSelectedItems([...selectedItems, productIndex]);
  };
  return (
    <div className="">
      <Navbar hasCart={true} cartItemsAmount={selectedItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCartHandler} />} />
        <Route
          path="/shop/:category"
          element={<Shop onAddToCart={addToCartHandler} />}
        />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <Cart
              products={selectedItems}
              onProductRemove={productRemoveHandler}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App;
