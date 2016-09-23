require('normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/animate.css');

import React from 'react';
import Header from './homepage/components/HeaderComponent';
import Subscribe from './homepage/components/SubscribeComponent';
import POS from './homepage/components/POSComponent';
import Contact from './homepage/components/ContactComponent';
import Footer from './homepage/components/FooterComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <POS />
        <Subscribe />
        <Contact />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
