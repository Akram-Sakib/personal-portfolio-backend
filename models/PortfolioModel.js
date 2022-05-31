const mongoose = require("mongoose");

const PortfolioModel = mongoose.Schema({
  order: { type: Number },
  name: {
    type: String,
  },
  featureimg: String,
  category: {
    type: [String],
  },
  description: String,
  screenshots: [String],
  tags: [String],
  projectlink: String,
  frontendlink: String,
  backendlink: String,
});

module.exports = PortfolioModel;
