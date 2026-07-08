import products from "../../data/products.json";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import DealsSection from "../../components/DealsSection/DealsSection";
import HomeOutdoor from "../../components/HomeOutdoor/HomeOutdoor";
import ConsumerElectronics from "../../components/ConsumerElectronics/ConsumerElectronics";
import InquiryBanner from "../../components/InquiryBanner/InquiryBanner";
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems";
import ExtraServices from "../../components/ExtraServices/ExtraServices";
import Suppliers from "../../components/Suppliers/Suppliers";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
function Home() {
  console.log(products);

  return (
    <>
      <Navbar />
      <CategoryBar />
      <Hero />
      <DealsSection />
      <HomeOutdoor />
      <ConsumerElectronics />
      <InquiryBanner />
      <RecommendedItems />
      <ExtraServices />
      <Suppliers />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;