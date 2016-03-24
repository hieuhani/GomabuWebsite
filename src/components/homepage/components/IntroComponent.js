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
              <h1 className="bounceIn animated">We make websites and apps that you will love to have</h1>
              <p>
                Sweet roll applicake I love I love sugar plum soufflé. Donut carrot cake danish liquorice bonbon.
              </p>
              <a href="#subscribe" className="btn btn-default fadeInUp animated">Subscribe our updates</a>
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
