import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import Typewriter from "./components/Typewriter";
const HomePage = () => {
  return (
    <div>
      <div className="sections">
      <Navbar />
      <Typewriter className="typewriter"
        text={[
          "What is Lorem Ipsum?",
          "Why do we use it?",
          "Where does it come from?",
          "Where can I get some?"
        ]}
        typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
      />
    <About/>
    </div>
    </div>
  );
};

export default HomePage;