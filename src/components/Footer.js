import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    let date = new Date();
    return (
      <footer className="bg-dark text-light py-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <h5>About The News Horizon</h5>
              <p className="small">
                The News Horizon is your reliable source for the latest news and in-depth analysis. We are dedicated to bringing you accurate and unbiased news from around the world.
              </p>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/general" className="text-light" onClick={this.scrollToTop}>Home</Link></li>
                <li><Link to="/about" className="text-light" onClick={this.scrollToTop}>About Us</Link></li>
                <li><Link to="/contactus" className="text-light" onClick={this.scrollToTop}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/" className="text-light"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="https://twitter.com/" className="text-light"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="https://instagram.com/" className="text-light"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.linkedin.com/" className="text-light"><i className="fab fa-linkedin fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="small mb-0">&copy; {date.getFullYear()} The News Horizon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
