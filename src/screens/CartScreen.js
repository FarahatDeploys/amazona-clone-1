import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { addToCart } from "../actions/cartActrions";
export default function CartScreen() {
  const { id } = useParams();
  const location = useLocation();
  const productId = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        Add To Cart : ProductID: {productId} Qty:{qty}
      </p>
    </div>
  );
}
