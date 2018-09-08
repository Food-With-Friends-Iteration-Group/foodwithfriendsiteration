const FindFriends = 'FindFriends';
const CurrentUser = 'CurrentUser';

const findFriends = () => ({types: FindFriends});
const currentUser = (username, password) => (
  {types: CurrentUser, 
    user: username, 
    pw: password});

module.exports = {
  FindFriends,
  findFriends,
  CurrentUser,
  currentUser,
}