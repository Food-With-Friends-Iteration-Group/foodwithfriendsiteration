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
  ]
}

const findFriendsReducer = (state=initalState, action) => {
  switch(action.types) {
    case types.FindFriends:
      let newFindFriendState = Object.assign({}, state);

    return newFindFriendState;

    default:
      return state;
  }
}

export default findFriendsReducer;