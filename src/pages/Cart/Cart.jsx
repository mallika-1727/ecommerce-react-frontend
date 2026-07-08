import "./Cart.css";

import Navbar from "../../components/Navbar/Navbar";


import CartItems from "../../components/CartItems/CartItems";
import CartSummary from "../../components/CartSummary/CartSummary";
import CartFeatures from "../../components/CartFeatures/CartFeatures";
import SavedForLater from "../../components/SavedForLater/SavedForLater";

import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";

import Footer from "../../components/Footer/Footer";

function Cart() {
  return (
    <>
      <Navbar />
     
      

      <div className="cart-top">
        <CartItems />
        <CartSummary />
      </div>

      <CartFeatures />

      <SavedForLater />

      <DiscountBanner />

  

      <Footer />
    </>
  );
}

export default Cart;