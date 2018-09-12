const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_CUISINE = 'UPDATE_CUISINE';

const updateEmail = (email) => ({
  type: UPDATE_EMAIL, 
  email,
});

const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password
});

const toggleLogIn = () => ({
  type: TOGGLE_LOGIN
})

const updateUsername = username => ({
  type: UPDATE_USERNAME,
  username
})

const updateCuisine = cuisine =>({
  type: UPDATE_CUISINE,
  cuisine
})

module.exports = {
  updateEmail,
  UPDATE_EMAIL,
  updatePassword,
  UPDATE_PASSWORD,
  updateUsername,
  UPDATE_USERNAME,
  updateCuisine,
  UPDATE_CUISINE,
  toggleLogIn,
  TOGGLE_LOGIN
}