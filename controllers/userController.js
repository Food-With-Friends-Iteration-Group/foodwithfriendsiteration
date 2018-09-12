const User = require("../models/UserModel");
const bcrypt = require('bcrypt');

const userController = {
  getAll: (req, res) => {
    User.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  //first chect is the user exists if they do ask them to sign in instead
  checkForUser: (req, res, next) => {
    User.findOne({ loginName: "name", password: "password" }, (err, data) => {
      if (data) {
        res.send(data);
      } else {
        next();
      }
    });
  },
  addUser: (req, res, next) => {
    const saltRounds = 10;
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password;
    const cuisine = req.body.cuisine

    bcrypt.hash(password, saltRounds, (err, password) => {
      if (err) {
        res.status(400).send('Sorry, there was a hashing error: ', err)
      } else {
        const user = new User({
          username,
          email,
          password,
          cuisine
        })
        console.log('USER IS: ', user);
        user.save((err, savedUser) => {
          if (err) {
            res.send("problem adding user to the database");
          } else {
            // set cookie after successfully saving user
            let randomNum = Math.random().toString();
            randomNum = randomNum.substring(2, randomNum.length);
            res.cookie('FOODcookie', randomNum, { maxAge: 900000, httpOnly: true });
            console.log('COOKIE SUCCESS; RES.SENDING NOW');
            res.status(200).send(savedUser);
            // next()
          }
        })
      }
    })
  },

  getUser: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, result) => {
        if (err) return res.status(500).send(err)
        if (!result) return res.status(500).send(result)
        const { username, cuisine } = result;
        console.log({ username, cuisine })
        bcrypt.compare(password, result.password, (err, match) => {
          if (err) return res.status(500).send(err);
          if (!match) return res.status(500).send({});
          return res.status(200).send({ username, cuisine });
        })
      }
    );
  },
  removeUser: (req, res) => {
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
