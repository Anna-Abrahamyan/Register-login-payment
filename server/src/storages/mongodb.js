import mongoose from "mongoose";
import config from "config";

async function init() {
  const mongoDB = config.get("mongodbUrl");
  await mongoose.connect(
    mongoDB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) console.log(error);
    }
  );

  const db = mongoose.connection;
}

const obj = {
  init,
};

export default obj;
