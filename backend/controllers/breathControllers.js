//bring in the model
const Breath = require("../models/breath");

const fetchAllBreath = async (req, res) => {
  try {
    //1. Get all breath techniques from mongodb
    const breath = await Breath.find({});
    //2. Send all as response.
    res.json({ breaths: breath });
  } catch (error) {
    console.error(error);
  }
};

const fetchBreath = async (req, res) => {
  //1. Get Id from URL
  const breathId = req.params.id;
  try {
    //2. find object by id
    const breath = await Breath.findById(breathId);
    //3. send ojbect in response
    res.json({ breaths: breath });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
    fetchAllBreath,
    fetchBreath
}