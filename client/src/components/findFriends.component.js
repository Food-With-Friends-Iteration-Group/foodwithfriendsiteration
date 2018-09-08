import { connect } from 'react-redux';
import React, { Component } from 'react';
import store from './store';

const mapStateToProps = store => ({
  findFriends: store.friends
})


const FindFriends = (props) => {
  let friendsArr = [];
  for(let i = 0; i < props.findFriends.users.length; i++) {
    friendsArr.push(<div className="friend-box" key={"friend" + i}><div className="inner-box"><span className="friend-box__user">User:     </span>{props.findFriends.users[i].user}</div><div className="inner-box"><span className="friend-box__cuisine"> Cuisine:     </span>{props.findFriends.users[i].cuisine}</div></div>)
  }
  return (
    <div className="find-friends-container">
      <div className="main-header">Find Friends</div>
      <div className="find-friend-box">
        {friendsArr}
      </div>
    </div>
  )
}


export default connect(mapStateToProps)(FindFriends);