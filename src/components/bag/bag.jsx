import { useEffect, useState } from "react";
import "./bag.css";

function Bag() {
  const [bag, setBag] = useState(() => {
    const savedBag = localStorage.getItem("bag");
    return savedBag ? JSON.parse(savedBag) : [];
  });

  useEffect(() => {
    const storedBag = localStorage.getItem("bag");
    if (storedBag) {
      try {
        const parsedBag = JSON.parse(storedBag);
        if (Array.isArray(parsedBag)) {
          setBag(parsedBag);
        } else {
          console.error("Invalid bag data in localStorage.");
        }
      } catch (error) {
        console.error("Error parsing bag data from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  const handleRemoval = (product) => {
    let allProducts = JSON.parse(localStorage.getItem("bag"));
    let updatedProducts = allProducts.filter((item) => {
      if (item.id !== product.id) return true;
    });
    setBag(updatedProducts);
  };

  return (
    <>
      <section id="baglist">
        <div className="bag">
          <h2>My Bag</h2>
        </div>
        <div className="list">
          {bag.map((item, index) => {
            const { id, title, price, image } = item;
            return (
              <div className="card" key={index}>
                <div className="image" key={id}>
                  <img key={id} src={image} alt="" />
                </div>
                <div className="brief">
                  <h3>{title}</h3>
                  <p>{`Rs.${price}`}</p>
                  <button
                    onClick={(e) => {
                      handleRemoval(item);
                    }}
                  >
                    <strong>Remove from Bag</strong>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Bag;
