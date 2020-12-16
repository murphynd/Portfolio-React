import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="fotter-subscription">
        <p className="footer-subsciption-header">This is my footer heading</p>
        <p className="footer-subscription-text">text here</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        {/* to ad include wrapper */}
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/projects">PROJECTS</Link>
          </div>
        </div>
      </div>
      <selction className="social-media">
        <div className="socail-media-wrap">
          <div className="footer-logo">
            <div className="social-logo"></div>
          </div>
        </div>
      </selction>
    </div>
  );
}

export default Footer;
