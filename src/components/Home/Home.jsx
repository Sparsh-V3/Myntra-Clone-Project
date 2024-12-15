import Offer from "../discountedOffer/offer";
import MainBanner from "../mainBanner/banner";
import Slider from "../slider/slider";
import ShopBy from "../shopByCategory/shopByCategory";
import Footer from "../footer/footer";

function HomePage() {
  return (
    <>
      <Offer />
      <MainBanner />
      <Slider />
      <ShopBy />
      <Footer />
    </>
  );
}

export default HomePage;
