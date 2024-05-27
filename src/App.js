import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
function App() {
  return (
    <div className='sections'>
      <Navbar/>
      <About/>

      <Skills/>
      <Contact/>
      <p>This is a sample</p>
    </div>
  );
}

export default App;
