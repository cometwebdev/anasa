import React from 'react';
import { connect } from 'react-redux';
import HomeHeader from './home_header';

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);