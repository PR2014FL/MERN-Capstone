//1. Bring in the model
const Dimension = require("../models/dimension");
//2. I only need to fetch all to build state in the frontend

const fetchAllDimensions = async (req, res) => {
  try {
    //1.GET all dimensions
    const dimension = await Dimension.find({});
    //2. Send all as response
    res.json({ dimensions: dimension });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {fetchAllDimensions};