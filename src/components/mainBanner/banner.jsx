import "./banner.css";

function MainBanner() {
  return (
    <>
      <div className="banner">
        <img src="assets/Banner.webp" alt="" />
      </div>
      <div className="specialOffers">
        <div>
          <img src="assets/spOffer1.jpg" alt="" />
        </div>
        <div>
          <img src="assets/spOffer2.jpg" alt="" />
        </div>
        <div>
          <img src="assets/spOffer3.jpg" alt="" />
        </div>
      </div>
      <div className="myntraPrize">
        <img src="assets/myntraPrize.jpg" alt="" />
      </div>
    </>
  );
}

export default MainBanner;
