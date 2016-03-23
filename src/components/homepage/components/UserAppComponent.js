'use strict';

import React from 'react';

require('styles/homepage/components/UserApp.scss');

let userAppImage = require('../../../images/userapp.png');



class UserAppComponent extends React.Component {
  render() {
    return (
      <div className="userapp-component wrapper">
        <div className="container">
          <div className="row">
            <div className="heading col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">
              <h2>
                All you want from an app
              </h2>
              <p>
                Lollipop unerdwear.com donut chocolate cake marshmallow.
              </p>
              <span className="line"></span>
            </div>
          </div>
          <div className="row userapp-features">
            <div className="pull-down col-md-4 col-sm-4">
              <ul className="features-list features-list-left">
                <li className="features-list-item animated fadeInLeft visible">
                  <i className="fa fa-map-marker fa-5x"></i>
                  <div className="features-content">
                    <h5>Discover great food around you</h5>
                  </div>
                </li>
                <li className="features-list-item animated fadeInLeft visible">
                  <i className="fa fa-clock-o fa-5x"></i>
                  <div className="features-content">
                    <h5>Last minute booking</h5>
                    <p>
                      Skip the queue and dine at your favourite busy restaurant
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <figure className="col-md-4 col-sm-4 animated fadeInUp">
              <img src={userAppImage} alt="Gomabu User Application" className="img-responsive"/>
            </figure>
            <div className="pull-down col-md-4 col-sm-4">
              <ul className="features-list features-list-right">
                <li className="features-list-item animated fadeInRight visible">
                  <i className="fa fa-cutlery fa-5x"></i>
                  <div className="features-content">
                    <h5>Pre-order food</h5>
                    <p>
                      Hungry or in a rush and don't want to wait for food? Get your meal ready by pre-ordering from our app
                    </p>
                  </div>
                </li>
                <li className="features-list-item animated fadeInRight visible">
                  <i className="fa fa-credit-card fa-5x"></i>
                  <div className="features-content">
                    <h5>Mobile Payment</h5>
                    <p>
                      Pay bill with your phone. Earn reward points after each payment.<br/>
                      Share bill with your fiends
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserAppComponent.displayName = 'HomepageComponentsUserAppComponent';

// Uncomment properties you need
// UserAppComponent.propTypes = {};
// UserAppComponent.defaultProps = {};

export default UserAppComponent;