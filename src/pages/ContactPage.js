import React from "react";
import Navbar from "../components/Navbar";
import "../components/Contact.css";

function ContactPage() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/abhay-raj-ab0445287/", "_blank");
  };

  const openGitHub = () => {
    window.open("https://github.com/BarryByte", "_blank");
  };

  const openEmail = () => {
    window.location.href = "mailto:abhayraj.12667@gmail.com";
  };

  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <h1>Contact Me</h1>
        <div className="contact-buttons">
          <button className="contact-button linkedin" onClick={openLinkedIn}>
            LinkedIn
          </button>
          <button className="contact-button github" onClick={openGitHub}>
            GitHub
          </button>
          <button className="contact-button email" onClick={openEmail}>
            Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
