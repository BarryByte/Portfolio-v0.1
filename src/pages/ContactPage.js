import React from "react";
import Navbar from "../components/Navbar";
import "../components/Contact.css";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p className="contact-description">
          Feel free to reach out to me via the following channels:
        </p>
        <div className="contact-grid">
          <a href="https://github.com/BarryByte" target="_blank" className="contact-tile">
            <i className="fab fa-github contact-icon"></i>
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://www.instagram.com/your-username"target="_blank"
            className="contact-tile"
          >
            <i className="fab fa-instagram contact-icon"></i>
            <span>Instagram Profile</span>
          </a>
          <a
            href="mailTo:abhay.23bcs10181@ms.sst.scaler.com"target="_blank"
            className="contact-tile"
          >
            <i className="far fa-envelope contact-icon"></i>
            <span>Mail</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
