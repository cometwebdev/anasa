import React from 'react';
import Header from './header';
import Footer from './footer';

export default ({ signupLink }) => {
  return (
    <>
      <Header />
      <div className="splash-main">
        <div className="splash-text">
          <h3>Work on big ideas, without the busywork.</h3>
          <p>From the small stuff to the big picture, Asana organizes work so teams know what to do, why it matters, and how to get it done.</p>
          {signupLink}
        </div>
        <div className="splash-img">
         {/* { <img src="assets/teamwork.jpeg" alt="teamwork!"/>} */}
        </div>
      </div>
      <Footer />
    </>
  );
}