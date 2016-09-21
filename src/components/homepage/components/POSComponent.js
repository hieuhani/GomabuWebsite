'use strict';

import React from 'react';
import { Carousel } from 'react-bootstrap';

require('styles/homepage/components/POS.scss');


class POSComponent extends React.Component {
  render() {
    return (
      <div className="pos-component wrapper" id="userapp">
        <div className="container">
          <div className="row">
            <div className="heading col-sm-4 col-sm-offset-4">
              <h2>
                A simple and easy to use IPad-based POS system
              </h2>
              <span className="line" />
            </div>
          </div>
          <div className="row screenshots">
            <div className="col-sm-6 col-sm-offset-3">
              <Carousel controls={false}>
                <Carousel.Item>
                  <img className="img-responsive" src="http://a3.mzstatic.com/us/r30/Purple71/v4/49/5c/88/495c883e-7859-6b0b-76a8-77208c1786f0/sc552x414.jpeg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src="http://a1.mzstatic.com/us/r30/Purple62/v4/09/dd/fb/09ddfbe4-cb62-703e-21de-bebb32892f1d/sc552x414.jpeg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src="http://a2.mzstatic.com/us/r30/Purple62/v4/c1/a0/14/c1a01414-b1e9-7d12-40ee-e1726873805b/sc552x414.jpeg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src="http://a1.mzstatic.com/us/r30/Purple71/v4/34/22/13/342213b5-b462-4b05-f4ee-29a023c2dc24/sc552x414.jpeg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src="http://a2.mzstatic.com/us/r30/Purple71/v4/c2/c0/de/c2c0de65-5de1-7df6-fe2f-59f571d50389/sc552x414.jpeg"/>
                </Carousel.Item>
              </Carousel>

            </div>
            <div className="col-sm-6">

            </div>
          </div>
          <div className="row pos-features">
            <div className="pull-down col-sm-offset-2 col-sm-4">
              <ul className="features-list features-list-right">
                <li className="features-list-item animated fadeInRight visible">
                  <div className="features-content">
                    <h5>
                      Easily sign up in few minutes or sign in with Google/Facebook
                    </h5>
                  </div>
                </li>
                <li className="features-list-item animated fadeInRight visible">
                  <div className="features-content">
                    <h5>
                      Manage multiple restaurant businesses
                    </h5>
                  </div>
                </li>
                <li className="features-list-item animated fadeInRight visible">
                  <div className="features-content">
                    <h5>
                      Reach new customers via our channel
                    </h5>
                  </div>
                </li>
                <li className="features-list-item animated fadeInRight visible">
                  <div className="features-content">
                    <h5>
                      Create and display your own custom menu
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pull-down col-sm-4">
              <ul className="features-list features-list-right">
                <li className="features-list-item animated fadeInRight visible">
                  <div className="features-content">
                    <h5>
                      Easily manage your restaurant’s details
                    </h5>
                  </div>
                </li>
                <li className="features-list-item animated fadeInRight visible">
                  <div className="features-content">
                    <h5>
                      Detailed reports daily to gain insight into your business performance
                    </h5>
                  </div>
                </li>
                <li className="features-list-item animated fadeInRight visible">
                  <div className="features-content">
                    <h5>
                      Make order, keep track of all orders and payments
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="icon-download">
              <a href="https://itunes.apple.com/us/app/gomabu-pos/id1154600186?ls=1&mt=8">
                <img src={require('../../../images/appstore.png')} alt="Download on Appstore"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

POSComponent.displayName = 'HomepageComponentsPOSComponent';

// Uncomment properties you need
// UserAppComponent.propTypes = {};
// UserAppComponent.defaultProps = {};

export default POSComponent;
