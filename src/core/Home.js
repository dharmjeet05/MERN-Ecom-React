import React, { useState, useEffect } from "react";
import "../styles.css";

// Base
import Base from "./Base";

// Components
import Card from "./Card";

// Helper
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row text-center">
        <h1 className="text-white mb-4">All of T-Shirts:</h1>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-4 mb-4">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
};

export default Home;
