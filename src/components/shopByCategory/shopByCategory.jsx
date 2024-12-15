import { useState, useEffect } from "react";
import "./shopByCategory.css";

function ShopBy() {
  const [products, setProducts] = useState([]);

  let handleData = async () => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/Sparsh-V3/myntra-db/refs/heads/main/db.json`
      );
      const data = await response.json();

      const updatedData = data.map((product) => ({
        ...product,
        image: `src/${product.image}`,
      }));

      setProducts(updatedData);
    } catch (error) {
      console.log(`Error: ${error}.`);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <div className="head-title">
        <strong>
          <span
            style={{
              color: "white",
              WebkitTextStroke: "2px #2556ee",
            }}
          >
            SHOP BY
          </span>{" "}
          <span style={{ color: "#2556EE" }}>CATEGORY</span>
        </strong>
      </div>
      <div className="shopping-items">
        {products.map((item, index) => {
          return (
            <div key={index} className="item-card">
              <div className="s-image" style={{ padding: "0" }}>
                <img src={item.image} alt={item.title || "Product"} />
              </div>
              <h2
                key={`t${index}`}
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                }}
              >
                {item.title}
              </h2>
              <h3
                key={`dis${index}`}
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              >
                {item.discount}
              </h3>
              <strong>
                <p
                  key={`buy${index}`}
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  {item.buy}
                </p>
              </strong>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShopBy;
