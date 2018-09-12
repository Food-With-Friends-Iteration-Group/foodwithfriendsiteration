// const db = require("../dbConfig");
const User = require("../models/UserSchemaModel");

const cuisineController = {
  changeCuisine(req, res) {
    User.findOneAndUpdate(
      { loginName: "theirLoginName" },
      { $set: { favoriteCuisine: "newCuisine" } },{new:true},
      (err, data) => {
        if (err) {
          res.send("trouble with db while trying to change the cuisine");
        }else{
          continue;
        }
      }
    );
  },
  getCuisine(req, res) {
    User.find({
      // favoriteCuisine:req.locals.cuisine
      favoriteCuisine: "cupOfNoodles"
    });
  }
};
module.exports = cuisineController;
// module.exports = {
//   findAll: () => {
//     return db.any(`
//     SELECT * FROM "user_cuisine"`);
//   },

//   //TODO: Have entires in table be temporary
//   create: (user_id, cuisine_id) => {
//     return db.one(
//       `
//       INSERT INTO "user_cuisine"(user_id, cuisine_id)
//       VALUES ($1, $2)
//       RETURNING *
//     `,
//       [user_id, cuisine_id]
//     );
//   }
// };
