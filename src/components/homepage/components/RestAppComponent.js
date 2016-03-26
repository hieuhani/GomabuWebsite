'use strict';

import React from 'react';

require('styles/homepage/components/RestApp.scss');

class RestAppComponent extends React.Component {
  render() {
    return (
      <div className="restapp-component" id="restapp">
        <div className="container restapp-inner">
          <div className="heading col-md-12 text-center">

            <h2>GROW YOUR RESTAURANT BUSINESS WITH GOMABU</h2>
            <span className="line"></span>
          </div>
          <div className="clearfix">
            <div className="col-md-12">
              <div className="row restapp-features">
                <div className="col col-md-4">
                  <i className="fa fa-money fa-5x"></i>
                  <div className="heading">
                    <h2>Increase Sales</h2>
                    <p>
                      Get access to more customers via our app. Reduce waiting time during peak hours. No more delays with
                      order and payment. Increase your productivity and sales.
                    </p>
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
                    <p>Retain your customers and target specific groups with different offers. Detailed and actionable
                      analytics to optimise your business and increase revenue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="become-partner clearfix">
            <div className="col col-md-8">
              <div className="description">
                <span>
                  <h2>Sign up to partner</h2>
                  <h4>with Gomabu</h4>
                </span>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="row">
                <form action="#" method="POST" id="be-partner" className="clearfix">

                  <input type="text" className="form-control" placeholder="Restaurant Name"/>

                  <input type="text" className="form-control" placeholder="Your Name"/>

                  <input type="text" className="form-control" placeholder="Your Title"/>

                  <input type="text" className="form-control" placeholder="Phone Number"/>

                  <input type="text" className="form-control" placeholder="Email"/>
                  <button className="btn">SUBMIT</button>
                </form>
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
