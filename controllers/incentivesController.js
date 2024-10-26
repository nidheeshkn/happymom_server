const Incentive = require('../models/incentive');


const walletHistoriesController = require("../controllers/walletHistoriesController");
const subscribersController = require("../controllers/subscribersController");



async function getAll(req, res) {

  const data = await Incentive.findAll();
  console.log(data);
  res.send(data)
}

async function getById(req, res) {

  const data = await Incentive.findOne({
    where: {
      position_id: req.body.position_id
    }
  });
  console.log(data);
  res.send(data)
}


async function searchByString(req, res) {

  const data = await Incentive.findOne({
    where: {
      position_name: req.body.position_id
    }
  });
  console.log(data);
  res.send(data)
}



async function searchByNumber(req, res) {

  const data = await Incentive.findOne({
    where: {
      position_name: req.body.position_id
    }
  });
  console.log(data);
  res.send(data)
}

async function add(req, res) {

  console.log(req.body);
  const data = await Incentive.create({
    name: req.body.name,
    description: req.body.description,
  });
  Incentive.sync();
  console.log("new positions auto-generated ID:", data.id);
  console.log(data);
  res.send(data)
}


async function update(req, res) {
  console.log(req.body);

  const data = await Incentive.update({
    name: req.body.name,
    description: req.body.description,
  },{
    where: {
      id: req.body.id
    }
  });
  Incentive.sync();
  console.log(data);
  res.send(data)
}


async function payIncentive(req, res) {
  console.log(req.body);
  const data = await Incentive.findOne({
    where: {
      id: req.body.incentiveType,
    }
  });
  console.log(data);
await walletHistoriesController.addIncentiveHistory(req.body,req.user.userId, data.name);
await subscribersController.addIncentive2Subscriber(req.body.user_id,req.body.amount);
  console.log(req.body);
  res.send(req.body)
}





  module.exports={getAll,getById,searchByString,searchByNumber,add,update,payIncentive}