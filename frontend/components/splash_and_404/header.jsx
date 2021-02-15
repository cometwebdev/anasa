import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src="assets/icon.png" alt=""/>
          <p>
            anasa
          </p>
        </Link>
      </div>
      <div>
        <p>Why Anasa?</p>
        <p>Solutions</p>
        <p>Resources</p>
        <p>Entreprise</p>
        <p>Pricing</p>
      </div>
      <div>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}