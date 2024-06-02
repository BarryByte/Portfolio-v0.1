import React from "react";
import Navbar from "../components/Navbar";
import "../components/Resume.css";

const ResumePage = () => {
  return (
    <div>
      <Navbar />
      <div className="resume-container">
        <h1>Resume Page</h1>
        <p>Welcome to the Resume Page</p>
        <iframe
          className="resume-iframe"
          src="https://drive.google.com/file/d/1KNVQ0tIzSKkHwnRiesZhVm_KMeGacP8U/preview"
          title="Resume"
          frameBorder="0"
          scrolling="auto"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumePage;
