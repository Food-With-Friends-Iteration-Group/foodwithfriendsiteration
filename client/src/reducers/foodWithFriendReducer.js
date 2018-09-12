import * as types from '../actions/actions';

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
  cuisine: 'italian',
  isLoggedIn: true,
  redirect: false
}

const findFriendsReducer = (state=initalState, action) => {
  switch(action.type) {
    case types.FindFriends:
      let newFindFriendState = Object.assign({}, state);
      return newFindFriendState;
    case types.CurrentUser:
      let newCurrentUserState = Object.assign({}, state);
      newCurrentUserState.user = action.user;
      return newCurrentUserState;
    case types.CurrentPW:
      let newCurrentPWState = Object.assign({}, state);
      newCurrentPWState.pw = action.pw;
      return newCurrentPWState; 
    case types.TOGGLE_LOGIN:
      let newToggleState = Object.assign({}, state);
      newToggleState.redirect = !state.redirect;
      return newToggleState;
    default:
      return state;
  }
}

export default findFriendsReducer;