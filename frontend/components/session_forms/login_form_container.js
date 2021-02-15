import React from 'react';
import { connect } from 'react-redux';
import { login, loginDemo } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    signupLink: <Link to="/signup" className="link">Sign up</Link>
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(login(user)),
    loginDemoUser: () => dispatch(loginDemo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);