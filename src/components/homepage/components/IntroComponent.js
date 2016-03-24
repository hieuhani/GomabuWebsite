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
              <h1 className="bounceIn animated">PLACE YOUR FOOD ORDER ON THE GO</h1>
              <p>
                Let your favourite restaurant know you are heading over and dishes you would like to have without waiting
              </p>
              <a href="#subscribe" className="btn btn-default fadeInUp animated">Stay Updated</a>
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
