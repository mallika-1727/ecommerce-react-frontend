import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductGrid from "./pages/ProductGrid/ProductGrid";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Product Listing */}
      <Route
        path="/product-listing"
        element={<ProductListing />}
      />

      {/* Product Grid */}
      <Route
        path="/product-grid"
        element={<ProductGrid />}
      />

      {/* Product Details */}
      <Route
        path="/product-details/:id"
        element={<ProductDetails />}
      />

      {/* Cart - Login Required */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Signup */}
      <Route path="/signup" element={<Signup />} />

      {/* Forgot Password */}
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Checkout - Login Required */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      {/* Order Success */}
      <Route
        path="/order-success"
        element={<OrderSuccess />}
      />
    </Routes>
  );
}

export default App;