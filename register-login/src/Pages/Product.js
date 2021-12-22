import React from "react";
import { data } from "./ProductData";

export const Product = ({
  id,
  productName,
  oldPrice,
  image,
  discount,
  products,
  setProducts,
}) => {
  const price = Math.round(oldPrice - (oldPrice * discount) / 100);
  return (
    <div
      className="product"
      id={id}
      onClick={() => {
        setProducts([...products, { id, oldPrice, price, discount, image }]);
      }}
    >
      {" "}
      <div className="part a">
        <div>
          <img src={image} alt="image" className="image" />
        </div>
        <div className="productDetails">
          <div className="productName">{productName}</div>
          <div className="amount">
            <div className="price">${price}</div>
            <div className="oldPrice">${oldPrice}</div>
          </div>
        </div>
        <div className="buy">
          <span>BUY +</span>
        </div>
      </div>
      <div className="part b">
        <div className="span">
          <span>Big Christmas discount</span>
        </div>
        <div className="discount-span">
          <div className="discount">{discount}%</div>
          <span className="off">Off</span>
        </div>
      </div>
    </div>
  );
};
