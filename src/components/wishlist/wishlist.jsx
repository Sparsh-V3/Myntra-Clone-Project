import { useEffect, useState } from "react";
import "./wishlist.css";

function Wishlist() {
  const [bag, setBag] = useState(() => {
    const savedBag = localStorage.getItem("bag");
    return savedBag ? JSON.parse(savedBag) : [];
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(`Error fetching products: ${error.message}`);
      }
    };
    console.log(bag);
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  const handleBag = (product) => {
    if (!bag.includes(products.id)) {
      setBag((prevBag) => [...prevBag, product]);
    } else {
      alert("Product is already in the bag!");
    }
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setBag([]);
  };

  return (
    <section id="wishlist">
      <button onClick={clearLocalStorage}>Clear Local Storage</button>
      <div className="wish">
        <h2>My Wishlist</h2>
      </div>
      <div className="list">
        {products.map((item) => {
          const { id, title, price, image } = item;
          return (
            <div className="card" key={id}>
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="brief">
                <h3>{title}</h3>
                <p>{`$${price}`}</p>
                <button
                  onClick={() => handleBag(item)}
                  disabled={bag.some((bagItem) => bagItem.id === id)}
                >
                  <strong>
                    {bag.some((bagItem) => bagItem.id === id)
                      ? "In Bag"
                      : "Add to Bag"}
                  </strong>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </section>
  );
}

export default Wishlist;
