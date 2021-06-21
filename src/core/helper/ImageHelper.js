import React from "react";

import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561340/pexels-photo-3561340.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`;

  return (
    <div className="rounded border border-success p-2 mb-3">
      <img
        src={imageUrl}
        alt={product.name}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="rounded"
      />
    </div>
  );
};

export default ImageHelper;
