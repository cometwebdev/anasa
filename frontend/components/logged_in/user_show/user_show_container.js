import React from 'react';

import { connect } from 'react-redux';

import UserShow from "./user_show";
const mapStateToProps = (state, ownProps) => {
  // make use of userId param from route here
  // 
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // add user api util, actions, reducer on frontend
  // add user controller get description on backend and make way to modify description

  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);