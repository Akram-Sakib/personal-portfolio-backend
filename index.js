const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.port || 5000;

const portfolioRoute = require("./routes/PortfolioRoute");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8czld.mongodb.net/personal_portfolio?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connection Succssfull"))
  .catch((err) => console.log(err));

app.use("/portfolio", portfolioRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
