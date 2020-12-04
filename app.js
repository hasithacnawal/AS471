const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("config");
const dotenv = require("dotenv");

const app = express();

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//connect
mongoose
  .connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => console.log("server started on 5000"));
