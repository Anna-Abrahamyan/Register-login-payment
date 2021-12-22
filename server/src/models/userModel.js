import mongoose from "mongoose";
import mongo from "../storages/mongodb.js";

const { init } = mongo;

init();

const Schema = mongoose.Schema;

const User = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "email required"],
    unique: [true, "This email already registered"],
  },
  username: {
    type: String,
    required: [true, "email required"],
    unique: [true, "This username already registered"],
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", User);
