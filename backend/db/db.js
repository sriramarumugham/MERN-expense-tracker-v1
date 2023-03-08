const mongoose = require("mongoose");
const db = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB CONNECTED");
  } catch (err) {
    console.log("DB connection error", err);
  }
};

module.exports = db;
