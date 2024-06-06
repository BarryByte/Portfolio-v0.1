import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import clockImage from "../assets/Pasted_image.png";
import musicstore from "../assets/Musicstore.jpeg";
import tictactoe from "../assets/tictactoe.jpeg";
import quickquiz from "../assets/quickquiz.jpeg";

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <ProjectCard
        image={musicstore}
        title="Music Store Management System"
        description="This project is a comprehensive system for managing a music store. It includes handling product inventory, customer profiles, sales transactions, and employee management. The system facilitates the creation, update, retrieval, and deletion of information about musical products, customers, sales, and staff."
        link="https://github.com/BarryByte/MusicStoreManagement"
        linktext="GitHub Repository"
      />
      <ProjectCard
        image={quickquiz}
        title="Quick-Quiz"
        description="Quick-Quiz is an interactive web application that tests users' knowledge on various topics. Built using HTML, CSS, and JavaScript, it features dynamic question loading, responsive design for both desktop and mobile, real-time feedback, and score tracking. The user-friendly interface ensures a seamless experience. This project enhanced my skills in front-end development and user experience design."
        link="https://github.com/BarryByte/Quick-Quiz"
        linktext="GitHub Repository"
      />
      <ProjectCard
        image={tictactoe}
        title="Tic-Tac-Toe"
        description="Tic-Tac-Toe Game Using Object-Oriented Programming (OOP) Concepts
        This project is a classic Tic-Tac-Toe game developed using Java and Object-Oriented Programming (OOP) principles. The game implements the essential functionality and rules of Tic-Tac-Toe, where two players take turns placing their markers (X or O) on a 3x3 grid to win by forming a horizontal, vertical, or diagonal line"
        link="https://github.com/BarryByte/Tic-Tac-Toe"
        linktext="GitHub Repository"
      />
      <ProjectCard
        image={clockImage}
        title="Pokedox-Clock"
        description="I developed a dynamic analog clock using HTML, CSS, and JavaScript. The clock features real-time updates, visually appealing design, and user controls to pause and resume the clock hands."
        link="https://github.com/BarryByte/Pokedex/tree/main/clock_example"
        linktext="GitHub Repository"
      />

      {/* <Tile
          header={"Font is awesome -> FontAwesome "}
          subHeader={"Take the hassle out of icons in your designs."}
          img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
          text={"The easiest way to get icons on your website is with a Kit. It's your very own custom version of Font Awesome, all bundled up with only the icons, tools, and settings you need."}
          link={"https://fontawesome.com/start"}
          linkText={"Start for Free"}
          position={"img-right"}
          bgColor={"red"}
          // const headerStyle = {
          //   color: 'blue',
          //   fontSize: '24px',
          //   textAlign: 'center'
          // };
          
          // const paragraphStyle = {
          //   color: 'gray',
          //   fontSize: '16px',
          //   lineHeight: '1.5'
          // };
        /> */}

      {/* <Banner/> */}
      {/* <ProgressBar percentage={0}/> */}
    </div>
  );
};

export default ProjectPage;

{
  /* <div style="width:100%;height:0;padding-bottom:80%;position:relative;"><iframe src="https://giphy.com/embed/l1Et7Qw1XjvunS0Io" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div> */
}
{
  /* <iframe src="https://giphy.com/embed/l1Et7Qw1XjvunS0Io" width="480" height="386" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/feistmusic-century-feist-l1Et7Qw1XjvunS0Io">via GIPHY</a></p> */
}
