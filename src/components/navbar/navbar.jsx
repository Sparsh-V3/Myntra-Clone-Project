import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faUser,
  faBagShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Profile from "../profile/profile";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const handleBaglist = () => {
    navigate("/bag");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav id="navbar">
        <div id="logo" onClick={handleHome}>
          <img src="src/assets/myntra.png" alt="" />
        </div>
        <div className={`navContents ${menuOpen ? "active" : ""}`}>
          <h3>MEN</h3>
          <h3>WOMEN</h3>
          <h3>KIDS</h3>
          <h3>HOME & LIVING</h3>
          <h3>BEAUTY</h3>
          <h3 style={{ position: "relative" }}>
            STUDIO
            <sup
              style={{
                color: "#FF3F6C",
                position: "absolute",
                top: "10px",
                left: "68px",
              }}
            >
              New
            </sup>
          </h3>
        </div>
        <div className="search">
          <button id="searchBtn">
            <FontAwesomeIcon icon={faSearch} style={{ color: "#73748A" }} />
          </button>
          <input
            type="text"
            id="searchInput"
            placeholder="Search for products, brands and more"
          />
        </div>
        {/* Hamburger menu */}
        <div
          id="menuIcon"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`others ${menuOpen ? "active" : ""}`}>
          <div
            onMouseEnter={() => {
              setProfileOpen(true);
            }}
            onMouseLeave={() => {
              setProfileOpen(false);
            }}
          >
            {/* Profile display on certain condition and is indirectly part of the navbar */}
            {profileOpen && <Profile />}
            <FontAwesomeIcon icon={faUser} />
            <p>Profile</p>
          </div>
          <div className="my-wishlist" onClick={() => handleWishlist()}>
            <FontAwesomeIcon icon={faRegularHeart} />
            <p>Wishlist</p>
          </div>
          <div className="my-bag" onClick={() => handleBaglist()}>
            <FontAwesomeIcon icon={faBagShopping} />
            <p>Bag</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
