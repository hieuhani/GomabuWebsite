require('normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/animate.css');
require('font-awesome/css/font-awesome.css');

import React from 'react';
import Header from './homepage/components/HeaderComponent';
import UserApp from './homepage/components/UserAppComponent';
import Subscribe from './homepage/components/SubscribeComponent';
import RestApp from './homepage/components/RestAppComponent';
import Contact from './homepage/components/ContactComponent';
import Footer from './homepage/components/FooterComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <UserApp />
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
