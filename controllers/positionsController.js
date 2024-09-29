const Position = require('../models/position')


async function getAll(req, res) {

  const position_data = await Position.findAll();
  console.log(position_data);
  res.send(position_data)
}

async function getById(req, res) {

  const position_data = await Position.findOne({
    where: {
      position_id: req.body.position_id
    }
  });
  console.log(position_data);
  res.send(position_data)
}


async function searchByString(req, res) {

  const position_data = await Position.findOne({
    where: {
      position_name: req.body.position_id
    }
  });
  console.log(position_data);
  res.send(position_data)
}



async function searchByNumber(req, res) {

  const position_data = await Position.findOne({
    where: {
      position_name: req.body.position_id
    }
  });
  console.log(position_data);
  res.send(position_data)
}

async function add(req, res) {
  const position_data = await Position.create({
    position_name: req.body.position_name,
    position_rank: req.body.position_rank,
    gross_wallet: req.body.gross_wallet,
    total_subscribers: req.body.total_subscribers
  });
  Position.sync();
  console.log("new positions auto-generated ID:", position_data.position_id);
  console.log(position_data);
  res.send(position_data)
}


async function update(req, res) {
  const position_data = await Position.create({
    position_name: req.body.position_name,
    position_rank: req.body.position_rank,
    gross_wallet: req.body.gross_wallet,
    total_subscribers: req.body.total_subscribers
  },{
    where: {
      position_id: req.body.position_id
    }
  });
  Position.sync();
  console.log(position_data);
  res.send(position_data)
}


async function positionsData(req, res) {

    console.log(req.session.session_id)
    const position_data = await Position.findAll();
    // const result = await User.findOne({ where: { mobile_number: req.body.mobile_number } });
    console.log(position_data);
    res.send(position_data)
  }





  module.exports={getAll,getById,searchByString,searchByNumber,add,update}