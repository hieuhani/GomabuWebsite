'use strict';

import React from 'react';
import jQuery from 'jquery';
require('styles/homepage/components/Contact.scss');

class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
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
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    var subject = this.state.subject.trim();
    var message = this.state.message.trim();
    if(!name || !email || !subject || !message) {
      this.setState({notice: 'Please fill out all text fields.'});
      return;
    }
    if(!this.validateEmail(email)) {
      this.setState({notice: 'Please enter a valid email.'});
      return;
    }

    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    jQuery.ajax({
      url: 'https://coremabu.appspot.com/api/v1/gomabu/contact_us',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify(formData),
      contentType: 'application/json; charset=utf-8',
      success: function() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
          notice: 'Thank you.'
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
      <div className="contact-component" id="contact">
        <div className="container contact-inner">
          <div className="heading col-md-12 text-center">
            <h2>Contact Us</h2>
            <p>
              Want to get in touch with us or simply request a demo version? Let us know by dropping your message below.
            </p>
            <span className="line"></span>
          </div>
          <div className="col-md-12">
            <fieldset className="contact-form animate fadeInUpBig animated">
              <form onSubmit={this.handleSubmit}>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text"
                           className="form-control"
                           id="inputName"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this, 'name')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email"
                           className="form-control"
                           id="inputEmail"
                           value={this.state.email}
                           onChange={this.handleChange.bind(this, 'email')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputSubject">Subject</label>
                    <input type="text"
                           className="form-control"
                           id="inputSubject"
                           value={this.state.subject}
                           onChange={this.handleChange.bind(this, 'subject')}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <label htmlFor="message">Message</label>
                  <textarea id="message"
                            className="form-control"
                            rows="9"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                  ></textarea>
                </div>
                <div className="col-lg-12">
                  <table>
                    <tbody>
                      <tr>
                        <td>{this.state.notice}</td>
                        <td className="spacing"></td>
                        <td>
                          <button className="btn btn-default"
                                  type="submit"
                                  onSubmit={this.handleSubmit}
                          >Send Now <i className="fa fa-paper-plane-o"></i></button>
                        </td>
                      </tr>
                    </tbody>

                  </table>

                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

ContactComponent.displayName = 'HomepageComponentsContactComponent';

// Uncomment properties you need
// ContactComponent.propTypes = {};
// ContactComponent.defaultProps = {};

export default ContactComponent;
