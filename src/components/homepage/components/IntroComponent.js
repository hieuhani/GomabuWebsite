'use strict';

import React from 'react';

require('styles/homepage/components/Intro.scss');

class IntroComponent extends React.Component {
  render() {
    return (
      <div className="intro-component">
        <div className="container">
          <div className="row">
            <section className="slogan col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
              <h3 className="bounceIn animated">
                A compact IPad-based POS system specialised for running and growing restaurants
              </h3>
              <a href="https://itunes.apple.com/us/app/gomabu-pos/id1154600186?ls=1&mt=8" className="fadeInUp animated">
                <img src={require('../../../images/appstore.png')} alt="Download on Appstore"/>
              </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

IntroComponent.displayName = 'HomepageComponentsIntroComponent';

// Uncomment properties you need
// IntroComponent.propTypes = {};
// IntroComponent.defaultProps = {};

export default IntroComponent;
