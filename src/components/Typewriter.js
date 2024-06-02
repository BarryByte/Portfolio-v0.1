import { useState, useEffect } from "react";
import "./Typewriter.css";
import myimage from "../assets/image-from-rawpixel-id-6728521-svg.svg";

function Typewriter({ text, typingSpeed = 400, deletingSpeed = 50, duration = 1000 }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < text[index].length) {
          setDisplayText((prev) => prev + text[index].charAt(displayText.length));
        } else {
          setTimeout(() => setIsDeleting(true), duration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]);

  return (
    <div className="typewriter">
      <div className="typing-effect">
        <h1 className="const-text">Hi There!</h1>
        <h1 className="const-text">I'm Abhay Raj</h1>
        <span className="displaying-text">{displayText}<span className="caret">|</span></span> 
        
      </div>
      <div>
        <img className="home-img1" src={myimage} alt="Sample image" />
      </div>
    </div>
  );
}

export default Typewriter;
