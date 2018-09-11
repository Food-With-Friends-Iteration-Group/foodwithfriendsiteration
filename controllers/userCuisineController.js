// const userCuisineModel = require("../models/UserCuisine");
// const userCuisineController = {};

// userCuisineController.getAll = (req, res) => {
//   userCuisineModel
//     .findAll()
//     .then(data => res.json(data))
//     .catch(err => res.json(err));
// };

// userCuisineController.add = (req, res, next) => {
//   const { user_id, cuisine_id } = res.locals;
//   userCuisineModel
//     .create(user_id, cuisine_id)
//     .then(data => next())
//     .catch(err => res.json(err));
// };

// module.exports = userCuisineController;
