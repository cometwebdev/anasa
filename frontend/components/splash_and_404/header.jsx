import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="splash-404-header">
      <div className="splash-404-header-row">
        <div className="splash-404-header-wrapper">
          <div className="splash-404-header-nav-group">
            <Link to="/" className="splash-404-header-logo">
              <img src="assets/icon.png" className="auth-icon" alt=""/>
              <span>anasa</span>
            </Link>
          </div>
          <div className="splash-404-header-nav-group">
            <Link to="/login" className="splash-404-header-login">
              <span className="splash-404-header-login-text">Log In</span>
            </Link>
            <Link to="/signup" className="splash-404-header-login">
            <span className="splash-404-header-login-text">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}