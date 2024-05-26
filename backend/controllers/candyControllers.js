const Candy = require("../models/candy");

const fetchAllCandies = async (req, res) => {
  const candy = await Candy.find({});
  res.json({ candies: candy });
}

const fetchOneCandy = async (req, res) => {
  const candyId = req.params.id;
  const candy = await Candy.findById(candyId);
  res.json({ candies: candy });
}

const createCandy = async (req, res) => {
  console.log(`BODY: ${req.body}`);
  const kind = req.body.kind;
  const flavor = req.body.flavor;

  const candy = await Candy.create({
    kind: kind,
    flavor: flavor
  });
  res.json({ candies: candy });
}

const updateCandy = async (req, res) => {
  const candyId = req.params.id;
  const { kind, flavor } = req.body;
  const candy = await Candy.findByIdAndUpdate(candyId, {
    kind: kind,
    flavor: flavor,
  });
  const updateCandy = await Candy.findById(candyId);
  res.json({ candies: updateCandy });
}

const deleteCandy = async (req, res) => {
  const candyId = req.params.id;
  try {
    await Candy.deleteOne({ _id: candyId });
    res.send({ Success: "Record has been deleted." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ Error: "Failed to delete record." });
  }
}

module.exports = {
  fetchAllCandies,
  fetchOneCandy,
  createCandy,
  updateCandy,
  deleteCandy,
};
