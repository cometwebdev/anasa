import React from 'react';
import Header from './header';
import Footer from './footer';

export default (props) => {
  return (
    <>
      <Header />
      <div className="PageNotFound-title">
        <h1>This page is lost in space!</h1>
        <h4>We can't find what you're looking for, but the links below may help.</h4>
      </div>
      <div className="PageNotFound-img">
        <img src="assets/lost.jpeg" alt="page-not-found"/>
      </div>
      <Footer />
    </>
  );
}