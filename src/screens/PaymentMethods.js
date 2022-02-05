import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActrions";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentMethodsScreen() {
  const cart = useSelector;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.prevenetDefault();
    dispatch(savePaymentMethod(PaymentMethod));
    navigate("/placeorder");
  };
  const [PaymentMethod, setPaymentMethod] = useState("PayPal");
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <form className="form" onSubmit={submitHandler} action="">
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <input
            type="radio"
            id="paypal"
            value="PayPal"
            name="paymentMethod"
            required
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></input>
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div>
          <input
            type="radio"
            id="stripe"
            value="Stripe"
            name="paymentMethod"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></input>
          <label htmlFor="stripe">Stripe</label>
        </div>
        <div>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodsScreen;
