'use strict';

import React from 'react';

require('styles/homepage/components/BePartner.scss');

class BePartnerComponent extends React.Component {
  render() {
    return (
      <div className="bepartner-component">
        <div className="bepartner">
          <div className="bg-overlay"></div>
          <div className="container">
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
                <form action="#" method="POST" id="be-partner" className="row">

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

BePartnerComponent.displayName = 'HomepageComponentsBePartnerComponent';

// Uncomment properties you need
// BePartnerComponent.propTypes = {};
// BePartnerComponent.defaultProps = {};

export default BePartnerComponent;
