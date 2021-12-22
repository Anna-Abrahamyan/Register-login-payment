import paymentApi from "../stripe/payment.js";

const configureRoutes = (app) => {
  paymentApi(app);
};

export default configureRoutes;
