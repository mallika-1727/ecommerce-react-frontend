import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductGrid from "./pages/ProductGrid/ProductGrid";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Product Listing (6 horizontal cards) */}
      <Route path="/product-listing" element={<ProductListing />} />

      {/* Product Grid (3×3 Grid) */}
      <Route path="/product-grid" element={<ProductGrid />} />

      {/* Product Details */}
      <Route path="/product-details/:id" element={<ProductDetails />} />

      {/* Cart */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;