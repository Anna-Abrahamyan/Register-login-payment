import Stripe from "stripe";
import config from "config";

const secret = config.get("stripeSecretKey");
const stripe = new Stripe(secret);

const stripeChargeCallback = (res) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

const paymentApi = (payment) => {
  payment.get("/payment", (req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString(),
    });
  });
  payment.post("/payment", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    };
    console.log("11gjmdgjjbhgfjnmghl;jn'gk;dg1", req.body.token.id);
    stripe.charges.create(body, stripeChargeCallback(res));
    console.log("bvgdhgvlkb;", body);
  });
  return payment;
};

export default paymentApi;
