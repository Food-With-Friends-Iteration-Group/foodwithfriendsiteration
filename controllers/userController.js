// REQUIRE ANY MODELS, ETC.
const User = require("../models/UserSchemaModel");
const bcrypt = require('bcrypt');

const userController = {
  getAll(req, res) {
    User.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  //first chect is the user exists if they do ask them to sign in instead
  checkForUser(req, res, next) {
    User.findOne({ loginName: "name", password: "password" }, (err, data) => {
      if (data) {
        res.send(data);
      } else {
        next();
      }
    });
  },
  addUser(req, res) {
    const saltRounds = 10;
    const password = req.body.password;
    const loginName = req.body.loginName
    const favoriteCuisine = req.body.favoriteCuisine

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        res.status(400).send('Sorry, there was a hashing error: ', err)
      } else {
        const user = new User({
          loginName: loginName,
          password: hash,
          favoriteCuisine: favoriteCuisine
        })
        
        user.save((err, savedUser) => {
          if (err) {
            res.send("problem adding user to the database");
          } else {
            // set cookie after successfully saving user
            let randomNum = Math.random().toString();
            randomNum = randomNum.substring(2, randomNum.length);
            res.cookie('FOODcookie', randomNum, { maxAge: 900000, httpOnly: true });
            console.log('cookie created successfully');
            res.send(savedUser);
          }
        })
      }
    })
  },

  getUser(req, res) {
    User.findOne(
      {
        loginName: "name",
        password: "pass"
      },
      (err, data) => {
        if (err) {
          //maybe we have an error because the user doesnt exists?
          res.send("user not found");
        } else {
          res.send(data);
        }
      }
    );
  },
  removeUser(req, res) {
    User.deleteOne({ loginName: "name", password: "pass" }, (err, data) => {
      if (err) {
        res.send("sorry could not delete user from the database");
      } else {
        res.send(data);
      }
    });
  }
};
module.exports = userController;
