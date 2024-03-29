'use strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Intro from './IntroComponent';

require('styles/homepage/components/Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div id="header" className="header-component">
        <span className="mask-overlay" />
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <img src={require('../../../images/logo.png')} alt="Gomabu"/>{' '}
                Gomabu
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#header">About</NavItem>
            <NavItem eventKey={2} href="#pos">Gomabu POS</NavItem>
            <NavItem eventKey={3} href="#contact" className="nav-contact">Contact Us</NavItem>
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
