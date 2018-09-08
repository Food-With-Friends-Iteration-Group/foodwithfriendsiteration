// REQUIRE ANY MODELS, ETC.

const userModel = require('../models/User');
const userController = {};


/**
* getAllUsers
*
* @param next - Callback Function w signature (err, users)
*/
userController.getAllUsers = (req, res) => {
  userModel.findAllUsers()
  .then( data => res.json(data))
  .catch( err => console.log(err))
};

/**
 * getAllUser_Cuisine
 * 
 * 
 */
userController.getUserCuisine = () => {
  // query DB for user/cuisine table

  // handle ERROR

  // return result to VIEW PEOPLE page

};


/**
* createUser - create a new User model and then save the user to the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/

//TODO: setup error handling
userController.createUser = (req, res, next) => {
  userModel.createUser(req.body)
  .then( data => res.json(data))
  .catch( err => res.status(400).send('NOT VALID!'));
  // if (typeof req.body.username === 'string' && typeof req.body.password === 'string') {
  // }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
userController.verifyUser = (req, res, next) => {
  const {email, password_digest} = req.body;
  
  userModel.findByEmail(email)
  .then( data => {
    const userPassword = data.password_digest;
    
    const isValidLogin = userController.validateLogin(password_digest, userPassword);

    res.locals.user_id = data.id

    return isValidLogin ? next() : res.status(400).json({msg: 'Incorrect login info'});
  })
  .catch( err => res.json({msg: err}));

};

userController.validateLogin = (loginAttempt, password_digest) =>{
  return loginAttempt === password_digest ? true : false;
}

module.exports = userController;


/////////SESSION CONTROLLERS


// /**
// * isLoggedIn - find the appropriate session for this request in the database, then
// * verify whether or not the session is still valid.
// *
// *
// */
// sessionController.isLoggedIn = (req, res, next) => {
//   // check if cookie exists
//   if (!req.cookies.ssid) {
//     return res.redirect('/signup');
//   }
//   // check ssid cookie
//   Session.find({cookieId: req.cookies.ssid}, (err, resFind) => {
//     next();
//   });
// };

// /**
// * startSession - create a new Session model and then save the new session to the
// * database.
// *
// *
// */
// sessionController.startSession = (req, res, next) => {
//   // cookieId -> value of the cookie name 'ssid'  === user id
//   // send cookieId to DB, using sessionModel
//   Session.create({ cookieId: res.locals.james }, (err, session) => {
//     if (err) return console.log(`ERROR APPEARED IN STARTSESSION ${err}`);
//     // console.log(`CREATED START SESSION ${session}`);
//   });
//   next();
// };


