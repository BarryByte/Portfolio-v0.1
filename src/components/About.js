import "./About.css";
import React from 'react';

function About() {
  return (
    <section id="about-section" className="about-section-1">
      <div className="aboutContentBox">
        <div className="aboutContent">
          <h1> Get to know me!</h1>
          <p>
            Hi, my name is Abhay. I am a first year student at Scaler School of
            Technology. This is my about section. Will add further more...
          </p>
          <br />
          <span>Full Stack</span>
          <br />
          <span>Developer</span>
        </div>
        <div className="aboutImg">
          <img
            className="img-profile"
            src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
            alt="Profile"
          />
        </div>
      </div>
      <div className="brief-intro">
        <div className="brief-intro-text">
          <span className="brief-title">Get to know me!</span>
          <p className="brief-para">
            Hi, I'm Abhay Raj, a passionate and an aspiring software developer
            currently studying at Scaler School of Technology. With a strong
            foundation in Data Structures and Algorithms (DSA) using both Java
            and Python, I bring problem-solving skills and efficiency to every
            project I undertake.
            <br />
            I am also one of the Head of the Department of Creative and Design
            for my college fest, where I lead a team in bringing innovative
            ideas to life and ensuring the success of our events.
            <br /> My expertise extends to web development, where I have
            hands-on experience in HTML, JavaScript, CSS, and ReactJS. I enjoy
            creating dynamic and responsive web applications that provide
            excellent user experiences.
          </p>
        </div>
        <div className="brief-img">
          <img
            className="img-profile"
            src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
