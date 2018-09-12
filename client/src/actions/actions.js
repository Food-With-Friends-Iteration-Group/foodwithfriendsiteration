const FindFriends = 'FindFriends';
const CurrentUser = 'CurrentUser';
const CurrentPW = 'CurrentPW';
const TIME_STAMP = 'TIME_STAMP';
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

const findFriends = () => ({types: FindFriends});

const currentPW = (value) => ({
  type: CurrentPW,
  pw: value,
});

const currentUser = (value) => ({
  type: CurrentUser, 
  user: value,
});

const updateTimestamp = (ts) => ({
  type: TIME_STAMP,
  timestamp: ts
});

const toggleLogIn = () => ({
  type: TOGGLE_LOGIN
})

module.exports = {
  FindFriends,
  findFriends,
  CurrentUser,
  currentUser,
  currentPW,
  CurrentPW,
  TOGGLE_LOGIN,
  toggleLogIn,
  updateTimestamp
}