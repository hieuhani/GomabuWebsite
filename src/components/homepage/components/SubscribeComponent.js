'use strict';

import React from 'react';
import jQuery from 'jquery'
require('styles/homepage/components/Subscribe.scss');


class SubscribeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriberEmail: '',
      validationClass: 'init',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleChange(evt) {
    var text = evt.target.value;
    var tmpValidationClass = 'has-error';
    if(this.validateEmail(text)) {
      tmpValidationClass = 'has-success'
    }

    this.setState({ subscriberEmail: evt.target.value, validationClass: tmpValidationClass });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    var subscriberEmail = this.state.subscriberEmail.trim();
    if(!subscriberEmail) {
      this.setState({message: 'Please enter your email.'});
      return;
    }

    if(!this.validateEmail(subscriberEmail)) {
      this.setState({message: 'Please enter a valid email.'});
      return;
    }

    var user_email = {
      user_email: subscriberEmail
    };

    jQuery.ajax({
      url: 'https://prod-coremabu.appspot.com/api/v1/gomabu/user_subscriber',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify(user_email),
      contentType: 'application/json; charset=utf-8',
      success: function() {
        this.setState({subscriberEmail: '', message: 'Thank you for your subscription! We will get in touch with you when we are ready.', validationClass: 'init'});
      }.bind(this),
      error: function() {
        this.setState({message: 'Something went wrong. Please try again.'});
      }.bind(this)
    });

  }

  render() {
    return (
      <div className="subscribe-component" id="subscribe">
        <div className="subscribe">
          <div className="bg-overlay"></div>
          <div className="container subscribe-inner">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="title">
                  <h2>
                    Stay Updated
                  </h2>
                </div>
                <p>
                  Subscribe to our newsletter
                </p>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-3 animated fadeInUp visible">
              <div className="contact-form">
                <form action="#" className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="form-group subscribe-form-input has-feedback">
                    <div className={this.state.validationClass}>
                      <input type="text"
                             className="subscribe-form-email form-control form-control-lg"
                             placeholder="Enter your email address"
                             value={this.state.subscriberEmail}
                             onChange={this.handleChange}
                      />
                      <span className="glyphicon glyphicon glyphicon-remove form-control-feedback"/>
                      <button className="subscribe-form-submit btn bg-inverse btn-lg">Subscribe</button>
                    </div>

                  </div>
                  <p>{this.state.message}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SubscribeComponent.displayName = 'HomepageComponentsSubscribeComponent';

// Uncomment properties you need
// SubscribeComponent.propTypes = {};
// SubscribeComponent.defaultProps = {};

export default SubscribeComponent;
