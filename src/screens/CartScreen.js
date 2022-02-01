import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function CartScreen() {
  const { id } = useParams();
  const location = useLocation();
  const productId = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        Add To Cart : ProductID: {productId} Qty:{qty}
      </p>
    </div>
  );
}
