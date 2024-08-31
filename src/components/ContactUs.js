import React, { Component } from 'react';

export class ContactUs extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="p-4 bg-dark text-light rounded shadow">
          <h4 className="text-center mb-4">Contact Us</h4>
          <p className="text-center lead mb-4">
            We'd love to hear from you! Whether you have a question about our articles, feedback on the site, or just want to say hello, feel free to reach out.
          </p>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control bg-dark text-light border-secondary" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control bg-dark text-light border-secondary" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control bg-dark text-light border-secondary" id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light w-100">Send Message</button>
              </form>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h5>Contact Information</h5>
              <p className="lead">
                <strong>Email:</strong> contact@thenewshorizon.com <br />
                <strong>Phone:</strong> +123-456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
