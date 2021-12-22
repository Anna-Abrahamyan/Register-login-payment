import "./main.css";
import StripeBtn from "../stripe/stripeBtn";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const Payment = () => {
  let sum = 0;
  const { products } = useContext(ProductContext);
  products.map((product) => {
    sum += product.price;
  });
  console.log(sum);
  return (
    <div className="container1">
      <div className="paymentForm">
        <div className="totalAmount">
          <p>The total amount of</p>
        </div>
        <div className="amount1">
          <span className="span1">Temporary amount</span>
          <span className="span2">${sum}</span>
        </div>
        <div className="amount1">
          <span className="span1">Shipping</span>
          <span className="span2">Cards</span>
        </div>
        <div className="amount1" id="amount1">
          <div className="finalAmount">The total amount of</div>
          <span className="sum">${sum}</span>
        </div>
        <br></br>
        <StripeBtn amount={sum * 100} />
      </div>
    </div>
  );
};

export default Payment;
