const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

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

module.exports = {
  updateEmail,
  UPDATE_EMAIL,
  updatePassword,
  UPDATE_PASSWORD,
  toggleLogIn,
  TOGGLE_LOGIN
}