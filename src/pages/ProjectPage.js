import React from 'react';
import Navbar from '../components/Navbar';
import Tile from '../components/Tile'
import Banner from '../components/Banner';
import ProgressBar from '../components/ProgressBar';

const ProjectPage = () => {
  return (
    <div>
        <Navbar/>
        <Tile
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
        />
        <Banner/>
        <ProgressBar percentage={0}/>
    </div>
  );
};

export default ProjectPage;


{/* <div style="width:100%;height:0;padding-bottom:80%;position:relative;"><iframe src="https://giphy.com/embed/l1Et7Qw1XjvunS0Io" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div> */}
{/* <iframe src="https://giphy.com/embed/l1Et7Qw1XjvunS0Io" width="480" height="386" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/feistmusic-century-feist-l1Et7Qw1XjvunS0Io">via GIPHY</a></p> */}