import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Typewriter from "./components/Typewriter";
function App() {
  return (
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
  );
}

export default App;
