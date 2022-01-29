const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const limit = rateLimit({
  max: 100, // max requests
  windowMs: 60 * 60 * 1000, // 1 Hour
  message: "Too many requests", // message to send
});

app.use(limit);
app.use(xss());
app.use(helmet());
app.use(mongoSanitize());
app.use("/routeName", limit);
app.use(express.json({ limit: "10kb" }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (res, req) => {
  req.send("PONG");
});

//database
let url = process.env.MONGO_URI;
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("connected to dtc db");
  }
);
app.listen(port, () => console.log(`listening at ${port}`));
