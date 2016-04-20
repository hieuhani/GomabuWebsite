'use strict';

import React from 'react';
import jQuery from 'jquery';
require('styles/homepage/components/BePartner.scss');

class BePartnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: '',
      restaurant_owner_name: '',
      restaurant_owner_title: '',
      restaurant_owner_phone_number: '',
      restaurant_owner_email: '',

      notice: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    var restaurant_name = this.state.restaurant_name.trim();
    var restaurant_owner_name = this.state.restaurant_owner_name.trim();
    var restaurant_owner_title = this.state.restaurant_owner_title.trim();
    var restaurant_owner_phone_number = this.state.restaurant_owner_phone_number.trim();
    var restaurant_owner_email = this.state.restaurant_owner_email.trim();
    if(!restaurant_name || !restaurant_owner_name || !restaurant_owner_title || !restaurant_owner_phone_number || !restaurant_owner_email) {
      this.setState({notice: 'Please fill out all text fields.'});
      return;
    }
    if(!this.validateEmail(restaurant_owner_email)) {
      this.setState({notice: 'Please enter a valid email.'});
      return;
    }

    var formData = {
      restaurant_name: restaurant_name,
      restaurant_owner_name: restaurant_owner_name,
      restaurant_owner_title: restaurant_owner_title,
      restaurant_owner_phone_number: restaurant_owner_phone_number,
      restaurant_owner_email: restaurant_owner_email
    };

    jQuery.ajax({
      url: 'https://coremabu.appspot.com/api/v1/gomabu/restaurant_subscriber',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify(formData),
      contentType: 'application/json; charset=utf-8',
      success: function() {
        this.setState({
          restaurant_name: '',
          restaurant_owner_name: '',
          restaurant_owner_phone_number: '',
          restaurant_owner_email: '',
          notice: 'Thank you! We will get in touch with you shortly.'
        });
      }.bind(this),
      error: function() {
        this.setState({notice: 'Something went wrong. Please try again.'});
      }.bind(this)
    });
  }

  handleChange(name, evt) {
    var change = {};
    change[name] = evt.target.value;
    this.setState(change)
  }

  render() {
    return (
      <div className="bepartner-component">
        <div className="bepartner">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="heading col-md-12 text-center">
              <h2>GROW YOUR RESTAURANT BUSINESS WITH GOMABU</h2>
              <span className="line"></span>
            </div>
            <div className="restapp-intro clearfix">
              <div className="col-md-12">
                <div className="row restapp-features">
                  <div className="col col-md-4">
                    <i className="fa fa-money fa-5x"></i>
                    <div className="heading">
                      <h2>Increase Sales</h2>
                      <p>
                        Get access to more customers via our app. Reduce waiting time during peak hours. No more delays with
                        order and payment. Increase your productivity and sales.
                      </p>
                    </div>
                  </div>
                  <div className="col col-md-4">
                    <i className="fa fa-tachometer fa-5x"></i>
                    <div className="heading">
                      <h2>Online Real-time menu management</h2>
                      <p>Manage menu and orders online.
                        Let your customers know which dishes are unavailable and specialties of the day</p>
                    </div>
                  </div>
                  <div className="col col-md-4">
                    <i className="fa fa-line-chart fa-5x"></i>
                    <div className="heading">
                      <h2>CRM & Analytics</h2>
                      <p>Retain your customers and target specific groups with different offers. Detailed and actionable
                        analytics to optimise your business and increase revenue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="become-partner clearfix">
              <div className="col col-md-8">
                <div className="description">
                <span>
                  <h2>Sign up to partner</h2>
                  <h4>with Gomabu</h4>
                </span>
                </div>
              </div>
              <div className="col col-md-4">
                <div className="row">
                  <form id="be-partner"
                        className="clearfix"
                        onSubmit={this.handleSubmit}>

                    <input type="text"
                           className="form-control"
                           placeholder="Restaurant Name"
                           value={this.state.restaurant_name}
                           onChange={this.handleChange.bind(this, 'restaurant_name')}
                    />

                    <input type="text"
                           className="form-control"
                           placeholder="Your Name"
                           value={this.state.restaurant_owner_name}
                           onChange={this.handleChange.bind(this, 'restaurant_owner_name')}
                    />

                    <input type="text"
                           className="form-control"
                           placeholder="Your Title"
                           value={this.state.restaurant_owner_title}
                           onChange={this.handleChange.bind(this, 'restaurant_owner_title')}
                    />

                    <input type="text"
                           className="form-control"
                           placeholder="Phone Number"
                           value={this.state.restaurant_owner_phone_number}
                           onChange={this.handleChange.bind(this, 'restaurant_owner_phone_number')}
                    />

                    <input type="text"
                           className="form-control"
                           placeholder="Email"
                           value={this.state.restaurant_owner_email}
                           onChange={this.handleChange.bind(this, 'restaurant_owner_email')}
                    />
                    <button className="btn" onSubmit={this.handleSubmit} value="SUBMIT"></button>
                    <p>{this.state.notice}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BePartnerComponent.displayName = 'HomepageComponentsBePartnerComponent';

// Uncomment properties you need
// BePartnerComponent.propTypes = {};
// BePartnerComponent.defaultProps = {};

export default BePartnerComponent;
