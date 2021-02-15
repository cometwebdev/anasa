import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Splash from './splash';

const mapStateToProps = (props) => {
  return {
    signupLink: <Link to="/signup">Sign up</Link>
  }
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);