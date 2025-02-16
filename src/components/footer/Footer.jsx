import React from "react";
import "./Footer.css";
import { User } from "lucide-react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="top_left">
          <img src="/logo.png" alt="Logo" />
          <p>
            I am a full-stack developer from Uzbekistan with 1+ years of
            experience in creating private websites.
          </p>
        </div>
        <div className="top_right">
          <div className="footer_email">
            <User />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer_subscribe">Subscribe</div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="footer_bottom_left">
          2024 Javohir Abdusharipov. All rights reserved.
        </p>
        <div className="footer_bottom_right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
