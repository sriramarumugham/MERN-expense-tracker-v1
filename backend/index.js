const express = require("express");

const cors = require("cors");

const db = require("./db/db");

const { readdirSync } = require("fs");

const app = express();

//middlewares
app.use(express.json());
app.use(cors({}));

require("dotenv").config();

const port = process.env.PORT;

readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

const server = () => {
  db();
  app.listen(port, () => {
    console.log("app runnig on port", port);
  });
};
server();
