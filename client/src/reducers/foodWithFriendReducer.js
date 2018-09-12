import * as types from '../actions/actions';

const initalState = {
  username: '',
  email: '',
  password: '',
  cuisine: '',
  isLoggedIn: true,
  redirect: false
}

const findFriendsReducer = (state=initalState, action) => {
  switch(action.type) {
    case types.UPDATE_EMAIL:
      let newCurrentEmailState = Object.assign({}, state);
      newCurrentEmailState.email = action.email;
      return newCurrentEmailState;
    case types.UPDATE_PASSWORD:
      let newCurrentPasswordState = Object.assign({}, state);
      newCurrentPasswordState.password = action.password
      return newCurrentPasswordState; 
    case types.TOGGLE_LOGIN:
      let newCurrentRedirectState = Object.assign({}, state);
      newCurrentRedirectState.redirect = !state.redirect;
      return newCurrentRedirectState;
    case types.UPDATE_USERNAME:
      let newCurrentUsernameState = Object.assign({}, state);
      newCurrentUsernameState.username = action.username;
      return newCurrentUsernameState;
    case types.UPDATE_CUISINE:
      let newCurrentCuisineState = Object.assign({}, state);
      newCurrentCuisineState.cuisine = action.cuisine;
      return newCurrentCuisineState;
    default:
      return state;
  }
}

export default findFriendsReducer;