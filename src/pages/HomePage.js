import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Typewriter from "../components/Typewriter";

const HomePage = () => {
  return (
    <div>
      <div className="sections">
        <Navbar />
        <Typewriter
          className="typewriter"
          text={[
            "Software Developer",
            "MERN Stack Developer",
            "Data Structures & Algorithm",
            "Python",
            ""
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
        />
        
      </div>
    </div>
  );
};

export default HomePage;
