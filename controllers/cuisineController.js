const cuisineModel = require('../models/Cuisine');
const cuisineController = {};


cuisineController.getAll = (req,res) => {
  cuisineModel.findAll()
  .then(data => res.json(data))
  .catch( err => res.json(err));
}

cuisineController.getID = (req, res, next) => {
  const {type} = req.body;

  cuisineModel.findOne(type)
  .then(data => {
    res.locals.cuisine_id = data.id;
    return next()
  })
  .catch( err => res.json(err));
}

module.exports = cuisineController;
