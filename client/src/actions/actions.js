const FindFriends = 'FindFriends';
const CurrentUser = 'CurrentUser';
const CurrentPW = 'CurrentPW';
const TIME_STAMP = 'TIME_STAMP';

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
})

module.exports = {
  FindFriends,
  findFriends,
  CurrentUser,
  currentUser,
  currentPW,
  CurrentPW,
  updateTimestamp
}