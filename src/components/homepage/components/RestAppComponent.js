'use strict';

import React from 'react';

require('styles/homepage/components/RestApp.scss');

class RestAppComponent extends React.Component {
  render() {
    return (
      <div className="restapp-component" id="restapp">
        <div className="container restapp-inner">
          <div className="heading col-md-12 text-center">

            <h2>Restaurant Application</h2>

            <p>
              No matter if you have a question or just want to say hello, we would love to hear from you.
            </p>
            <span className="line"></span>
          </div>
          <div className="col-md-12">
            <div className="row restapp-features">
              <div className="col col-md-4">
                <i className="fa fa-money fa-5x"></i>
                <div className="heading">
                  <h2>Get access to new customers</h2>
                  <p>Advertise your restaurant through Gomabu. Fill your empty seats an increase revenue</p>
                </div>
              </div>
              <div className="col col-md-4">
                <i className="fa fa-tachometer fa-5x"></i>
                <div className="heading">
                  <h2>Online Real-time menu management</h2>
                  <p>Manage menu and orders online.
                    Let your customers know which dishes are unavailable and specialties of the day</p>
                </div>
              </div>
              <div className="col col-md-4">
                <i className="fa fa-line-chart fa-5x"></i>
                <div className="heading">
                  <h2>CRM & Analytics</h2>
                  <p>Retain your customers and target specific groups with different offers. Gomabu provides actionable
                  data and help you make critical decision to optimise and increase revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RestAppComponent.displayName = 'HomepageComponentsRestAppComponent';

// Uncomment properties you need
// RestAppComponent.propTypes = {};
// RestAppComponent.defaultProps = {};

export default RestAppComponent;
