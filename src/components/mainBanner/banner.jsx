import "./banner.css";

function MainBanner() {
  return (
    <>
      <div className="banner">
        <img src="src/assets/Banner.webp" alt="" />
      </div>
      <div className="specialOffers">
        <div><img src="src/assets/spOffer1.jpg" alt="" /></div>
        <div><img src="src/assets/spOffer2.jpg" alt="" /></div>
        <div><img src="src/assets/spOffer3.jpg" alt="" /></div>
      </div>
      <div className="myntraPrize">
        <img src="src/assets/myntraPrize.jpg" alt="" />
      </div>
    </>
  );
}

export default MainBanner;
