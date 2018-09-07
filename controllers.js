// REQUIRE ANY MODELS, ETC.

const controllers = {};

/**
* getAllUsers
*
* @param next - Callback Function w signature (err, users)
*/
controllers.getAllUsers = (next) => {
  User.find({}, next);
};

/**
 * getAllUser_Cuisine
 * 
 * 
 */
controllers.getUserCuisine = () => {
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
controllers.createUser = (req, res, next) => {
  if (typeof req.body.username === 'string' && typeof req.body.password === 'string') {
    // create user object and send to DB.
    User.create(req.body, (err, user) => {
      if (err) {
        // redirect to signup page
        
      } else {
        // store in locals to pass to session controller
        res.locals.user = user._id;
        next();
      }
    });
  } else {
    // re-render signup
    
  }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
controllers.verifyUser = (req, res, next) => {

  const username = req.body.username;
  const pw = req.body.password;

  // find user
  // query DB
    // handle errors -- on error, redirect to signup
      return res.redirect('/sign-up');

    // TEST if PW is correct

     // }else {
      // Incorrect, redirect to signup
      res.redirect('/sign-up');
};


module.exports = controllers;


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


