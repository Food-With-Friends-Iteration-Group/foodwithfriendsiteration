import * as types from './actions.js';

const initalState = {
  users: [
    {
      user: 'James',
      cuisine: 'Indian'
    },
    {
      user: 'Aaron',
      cuisine: 'French'
    },
    {
      user: 'Mike',
      cuisine: 'Italian'
    }
  ],
  pw: '',
  user: '',
}

const findFriendsReducer = (state=initalState, action) => {
  switch(action.types) {
    case types.FindFriends:
      let newFindFriendState = Object.assign({}, state);
      return newFindFriendState;
    case types.CurrentUser:
      let newCurrentUserState = Object.assign({}, state);
      newCurrentUserState.user = action.user;
      newCurrentUserState.pw = action.pw;
      return newCurrentUserState;

    default:
      return state;
  }
}

export default findFriendsReducer;