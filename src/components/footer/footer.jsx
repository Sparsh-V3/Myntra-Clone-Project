import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="necessary-others">
        <div>
          <h6>ONLINE SHOPPING</h6>
          <ul className="online-shopping">
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Home & Living</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Myntra Insider</a>
            </li>
          </ul>
          <br />
          <h6>USEFUL LINKS</h6>
          <ul className="useful-links">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">careers</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Whitehat</a>
            </li>
            <li>
              <a href="#">Cleartrip</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>CUSTOMER POLICIES</h6>
          <ul className="customer-policies">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">T&C</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Track Orders</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Cancellation</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Grievance Officer</a>
            </li>
          </ul>
        </div>
        <div className="extras">
          <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6>
          <div className="get-it-on">
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.myntra.android&pli=1">
                <img src="assets/Footer/google-play.png" alt="" />
              </a>
            </div>
            <div>
              <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">
                <img src="assets/Footer/apple-store.png" alt="" />
              </a>
            </div>
          </div>
          <h6>KEEP IN TOUCH</h6>
          <div className="icons">
            <img src="assets/Footer/facebook.png" alt="" />
            <img src="assets/Footer/twitter.png" alt="" />
            <img src="assets/Footer/yt.png" alt="" />
            <img src="assets/Footer/inst.png" alt="" />
          </div>
        </div>
        <div className="least">
          <div className="original">
            <div>
              <img src="assets/Footer/original.png" alt="" />
            </div>
            <p>
              <strong>100% ORIGINAL</strong> guarantee for all products at
              myntra.com
            </p>
          </div>
          <div className="returnal">
            <div>
              <img src="assets/Footer/fourteen.png" alt="" />
            </div>
            <p>
              <strong>Return within 14days</strong> of receiving your order
            </p>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <p>
          In case of any concern,{" "}
          <strong>
            <a href="#" style={{ color: "#526CD0", textDecoration: "none" }}>
              Contact Us
            </a>
          </strong>
        </p>
        <p>© 2024 www.myntra.com. All rights reserved.</p>
        <p>
          <a
            href="https://www.flipkart.com/"
            style={{ color: "gray", textDecoration: "none" }}
          >
            A Flipkart Company
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
