
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/api";


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

console.log(id);
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");


useEffect(() => {

  const fetchProduct = async () => {

    try {

      setLoading(true);

      const response = await API.get(`/products/${id}`);

      setProduct(response.data);

    } catch (error) {

      console.log(error);
      setError("Failed to load product");

    } finally {

      setLoading(false);

    }

  };


  fetchProduct();

}, [id]);



if (loading) {
  return <h2>Loading product...</h2>;
}


if (error) {
  return <h2>{error}</h2>;
}

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