import React, { useState, useEffect } from "react";
import "../styles.css";

// Base
import Base from "./Base";

// Components
import Card from "./Card";

// Helper
import { loadCart } from "./helper/cartHelper";
import StripeCheckout from "../payment/helper/StripeCheckout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div>
        <h2>Your Selected Products</h2>
        <div className="row">
          {products.map((pro, index) => (
            <div key={index} className="col-6 mb-4">
              <Card
                key={index}
                product={pro}
                addToCart={false}
                removeFromCart={true}
                setReload={setReload}
                reload={reload}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to Checkout">
      <div className="row text-center">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">
          <StripeCheckout products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
