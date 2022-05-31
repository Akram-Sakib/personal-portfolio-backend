const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const portfolioModel = require("./../models/PortfolioModel");
const Portfolio = new mongoose.model("Portfolio", portfolioModel);

router.get("/", async(req,res)=>{
    try {
        const result = await Portfolio.find({});
        res.status(200).json({
            result:result,
          message: "All Portfolio Data",
        });
    } catch (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
    }
})

router.post("/", async (req, res)=> {

    try {
        const newPortfolio = new Portfolio(req.body);
        const result = await newPortfolio.save();
        res.status(200).json({
          message: "Portfolio inserted Successfully",
        });
    } catch (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
    }

});

module.exports = router;