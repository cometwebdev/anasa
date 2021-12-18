import React from 'react';

import { connect } from 'react-redux';

import UserShow from "./user_show";
import HomeHeaderContainer from '../header/home_header_container'
import SidebarContainer from '../sidebar/sidebar_container';
import UserTaskContainer from './user_show_container';

import {
  getUser,
  updateUser
} from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // make use of userId param from route here
  // 
  
  const user = state.entities.users[ownProps.match.params.userId];
  const name = user ? `${user.email}'s Page` : "User Profile Page";
  return { user,
           header: <HomeHeaderContainer title="User Profile Page" />,
           sidebar: <SidebarContainer />,
           tasks: <UserTaskContainer id={user.id} />,
           name
   };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // add user api util, actions, reducer on frontend
  // add user controller get description on backend and make way to modify description
  const userId = ownProps.match.params.userId;
  return {
    thunkGetUser: () => dispatch(getUser(userId)),
    thunkUpdateUser: (user) => dispatch(updateUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);