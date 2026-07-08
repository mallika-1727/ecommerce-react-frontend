import "./ProductListing.css";
import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductList from "../../components/ProductList/ProductList";

function ProductListing() {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Breadcrumb />

      <div className="listing-container">
      <FilterSidebar />
      <ProductList />
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductListing;