
import { useParams } from "react-router-dom";
import products from "../../data/products.json";


import "./ProductDetails.css";

import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import SupplierCard from "../../components/SupplierCard/SupplierCard";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import YouMayLike from "../../components/YouMayLike/YouMayLike";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";
import Footer from "../../components/Footer/Footer";
function ProductDetails() {

const { id } = useParams();

const product = products.find(
  (item) => item.id === Number(id)
);

  return (
    <>
      <Navbar />
      <CategoryBar />
      <Breadcrumb />
      <div className="product-wrapper">
       <ProductGallery product={product} />
        <ProductInfo product={product} />
        <SupplierCard />
        </div>
        <div className="product-middle-section">
    <ProductDescription product={product} />
    <YouMayLike />
</div>

<RelatedProducts />
<DiscountBanner />
<Footer />
    </>
  );
}

export default ProductDetails;