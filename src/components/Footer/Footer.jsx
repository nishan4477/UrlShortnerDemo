import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";

import twitter from "../../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container__main">
        <div className="footer__container">
          <h3 className="logo">Shortly</h3>

          <div className="footer-col__wrapper">
            <h4 className="footer-col__header">Features</h4>
            <ul>
              <li>
                {" "}
                <Link to="">Link Shortening</Link>
              </li>
              <li>
                <Link to="">Branded Links</Link>
              </li>
              <li>
                {" "}
                <Link to="">analytics</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col__wrapper">
            <h4 className="footer-col__header">Features</h4>
            <ul>
              <li>
                {" "}
                <Link to="">Link Shortening</Link>
              </li>
              <li>
                <Link to="">Branded Links</Link>
              </li>
              <li>
                {" "}
                <Link to="">analytics</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col__wrapper">
            <h4 className="footer-col__header">Features</h4>
            <ul>
              <li>
                {" "}
                <Link to="">Link Shortening</Link>
              </li>
              <li>
                <Link to="">Branded Links</Link>
              </li>
              <li>
                {" "}
                <Link to="">analytics</Link>
              </li>
            </ul>
          </div>

          <div className="social-media__wrapper">
            <Link to="www.facebook.com" target="_blank">
              <img src={facebook} alt="facebook-logo" />
            </Link>
            <Link to="www.twitter.com" target="_blank">
              <img src={twitter} alt="twitter-logo" />
            </Link>
            <Link to="www.pnterest.com" target="_blank">
              <img src={pinterest} alt="pinterest-logo" />
            </Link>
            <Link to="www.instagram.com" target="_blank">
              <img src={instagram} alt="instagram-logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
