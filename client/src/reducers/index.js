import { combineReducers } from 'redux';
import findFriendsReducer from './foodWithFriendReducer';

const reducers = combineReducers({
  friends: findFriendsReducer
})

export default reducers;