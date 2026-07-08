import "./ProductGrid.css";
import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import GridFilterSidebar from "../../components/GridFilterSidebar/GridFilterSidebar";
import ProductGridList from "../../components/ProductGridList/ProductGridList";
import Pagination from "../../components/Pagination/Pagination";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
function ProductGrid() {
  return (

    <>
  <Navbar />
  <CategoryBar />
  <Breadcrumb />
  
<div className="grid-container">

  <GridFilterSidebar />

  <ProductGridList /></div>
  <Pagination />
  <Newsletter />
  <Footer />
 
</>
   

  );
}

export default ProductGrid;