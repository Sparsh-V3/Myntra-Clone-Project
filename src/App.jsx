import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./components/Home/Home";
import LoginOrSignup from "./components/LoginOrSignup/loginOrSignup";
import Navbar from "./components/navbar/navbar";
import Wishlist from "./components/wishlist/wishlist";
import Bag from "./components/bag/bag";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginOrSignup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </>
  );
}

export default App;
