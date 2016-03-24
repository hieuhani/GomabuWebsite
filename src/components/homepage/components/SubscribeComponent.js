'use strict';

import React from 'react';

require('styles/homepage/components/Subscribe.scss');


class SubscribeComponent extends React.Component {
  render() {
    return (
      <div className="subscribe-component">
        <div className="subscribe">
          <div className="bg-overlay"></div>
          <div className="container subscribe-inner">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="title">
                  <h2>
                    Subscribe to our updates
                  </h2>
                </div>
                <p>
                  Subscribe to our email newsletter for useful tips and resources.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-3 animated fadeInUp visible">
              <div className="contact-form">
                <form action="#" className="form-horizontal">
                  <div className="form-group subscribe-form-input has-feedback">
                    <input type="text" className="subscribe-form-email form-control form-control-lg"
                           placeholder="Enter your email address"/>
                    <button className="subscribe-form-submit btn bg-inverse btn-lg">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SubscribeComponent.displayName = 'HomepageComponentsSubscribeComponent';

// Uncomment properties you need
// SubscribeComponent.propTypes = {};
// SubscribeComponent.defaultProps = {};

export default SubscribeComponent;
