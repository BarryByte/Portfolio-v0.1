import './About.css' 
function About() {
  return (
    <section id="aboutSection">
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
        <button className="btn btn-primary">Primary Button</button>
        
      </div>
      <div className="aboutImg">
        <img src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"></img>
      </div>
    </section>
  );
}
export default About;
