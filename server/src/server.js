import express from "express";
import config from "config";
import mongo from "./storages/mongodb.js";
import router from "./routes/auth.routes.js";
import cors from "cors";
import dotenv from "dotenv";
import configureRoutes from "./routes/payment.routes.js";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/api/auth", router);
configureRoutes(app);
app.use(express.static("./register-login/build"));

const PORT = config.get("port") || 5000;
const { init } = mongo;

init();

app.listen(PORT, function () {
  console.log(`Authentication Server listening on port ${PORT}`);
});
