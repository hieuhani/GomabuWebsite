'use strict';

import React from 'react';

require('styles/homepage/components/Footer.scss');

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy; 2016 Gomabu Limited. All Rights Reserved.<br/>
                <a href="mailto:contact-us@gomabu.com">contact-us@gomabu.com</a>
              </p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

FooterComponent.displayName = 'HomepageComponentsFooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
