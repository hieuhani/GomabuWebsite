'use strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Intro from './IntroComponent';

require('styles/homepage/components/Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <span className="mask-overlay"></span>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Gomabu</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#about">About</NavItem>
            <NavItem eventKey={2} href="#userapp">Features</NavItem>
            <NavItem eventKey={3} href="#restapp">For Restaurants</NavItem>
            <NavItem eventKey={4} href="#contact" className="nav-contact">Contact Us</NavItem>
          </Nav>
        </Navbar>
        <Intro />
      </div>
    );
  }
}

HeaderComponent.displayName = 'HomepageComponentsHeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
