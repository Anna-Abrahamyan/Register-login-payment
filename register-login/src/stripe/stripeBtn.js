import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeBtn = (props) => {
  const publishableKey =
    "pk_test_51K4R3NDtqTX1p0nljKrsy7eRHOhLruPmbRWH6j9Ff5mwhTyBoOx7vjojemqN0h9X6t1cIwOS6YjWkMCtou8sUAkE00tt8bv5mO";
  const onToken = (token) => {
    const data = {
      amount: props.amount,
      token,
    };

    axios({
      method: "post",
      url: "http://localhost:4002/payment",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data,
    })
      .then((response) => {
        alert("Payment Success");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="GO TO CHECKOUT"
      name="A.A"
      description="Christmas decoration"
      panelLabel="Pay"
      image="https://cdn4.vectorstock.com/i/1000x1000/18/08/credit-card-icon-vector-21541808.jpg"
      amount={props.amount}
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default StripeBtn;
