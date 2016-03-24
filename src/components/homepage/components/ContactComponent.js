'use strict';

import React from 'react';

require('styles/homepage/components/Contact.scss');

class ContactComponent extends React.Component {
  render() {
    return (
      <div className="contact-component" id="contact">
        <div className="container contact-inner">
          <div className="heading col-md-12 text-center">

            <h2>Contact Us</h2>

            <p>
              Want to get in touch with us?
              No matter if you have a question or just want to say hello, we would love to hear from you.
            </p>
            <span className="line"></span>
          </div>
          <div className="col-md-12">
            <fieldset className="contact-form animate fadeInUpBig animated">
              <form action="#" method="post">
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName"/>
                  </div>
                  <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail"/>
                  </div>
                  <div className="form-group">
                    <label for="inputSubject">Subject</label>
                    <input type="text" className="form-control" id="inputSubject"/>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <label for="message">Message</label>
                  <textarea id="message" className="form-control" rows="9"></textarea>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-default" type="submit">Send Now<i className="fa fa-paper-plane-o"></i></button>
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
