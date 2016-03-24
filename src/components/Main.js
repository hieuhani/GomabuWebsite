require('normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/animate.css');
require('font-awesome/css/font-awesome.css');

import React from 'react';
import Header from './homepage/components/HeaderComponent';
import About from './homepage/components/AboutComponent';
import UserApp from './homepage/components/UserAppComponent';
import BePartner from './homepage/components/BePartnerComponent';
import Subscribe from './homepage/components/SubscribeComponent';
import RestApp from './homepage/components/RestAppComponent';
import Contact from './homepage/components/ContactComponent';
import Footer from './homepage/components/FooterComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <About />
        <UserApp />
        <BePartner />
        <RestApp />
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
