'use strict';

import React from 'react';

require('styles/homepage/components/POS.scss');


class POSComponent extends React.Component {
  render() {
    return (
      <div className="pos-component wrapper" id="pos">
        <div className="container">
          <div className="row">
            <div className="heading col-sm-8 col-sm-offset-2">
              <h2>
                A simple and easy to use IPad-based POS system
              </h2>
              <span className="line" />
            </div>
          </div>
          <div className="row screenshots">
            <div className="col-sm-6">
              <img src={require('../../../images/gomabu-on-ipad.png')} alt="Gomabu on iPad" className="img-responsive" />

            </div>
            <div className="col-sm-6 features">
              <ul className="list nav">
                <li>
                  Easily sign up in few minutes or sign in with Google/Facebook
                </li>
                <li>
                  Manage multiple restaurant businesses
                </li>
                <li>
                  Reach new customers via our channel
                </li>
                <li>
                  Create and display your own custom menu
                </li>
                <li>
                  Easily manage your restaurant’s details
                </li>
                <li>
                  Detailed reports daily to gain insight into your business performance
                </li>
                <li>
                  Make order, keep track of all orders and payments
                </li>
              </ul>

              <div className="icon-download">
                <a href="https://itunes.apple.com/us/app/gomabu-pos/id1154600186?ls=1&mt=8">
                  <img src={require('../../../images/appstore.png')} alt="Download on Appstore"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

POSComponent.displayName = 'HomepageComponentsPOSComponent';

// Uncomment properties you need
// UserAppComponent.propTypes = {};
// UserAppComponent.defaultProps = {};

export default POSComponent;
