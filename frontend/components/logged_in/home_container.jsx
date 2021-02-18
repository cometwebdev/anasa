
// need to import Rect from 'react' in container files
//    if passing custom React Components as props 
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home'

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);