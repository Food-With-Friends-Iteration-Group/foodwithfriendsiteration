const FindFriends = 'FindFriends';
const CurrentUser = 'CurrentUser';
const CurrentPW = 'CurrentPW'

const findFriends = () => ({types: FindFriends});

const currentPW = (value) => ({
  type: CurrentPW,
  pw: value,
});

const currentUser = (value) => ({
  type: CurrentUser, 
  user: value,
});

module.exports = {
  FindFriends,
  findFriends,
  CurrentUser,
  currentUser,
  currentPW,
  CurrentPW,
}