import logo from './Logo2-01.svg';
import image from './luzon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <img src={logo} className="Applogo" alt="logo"/>
      <ul>
          <li><a href="#Home">HOME</a></li>
          <li><a href="#About">ABOUT</a></li>
          <li><a href="#Projects">PROJECTS</a></li>
          <li><a href="#Contact">CONTACT</a></li>
      </ul>
      <home id="Home" className="HomeSec">
        <content className="Homecontent">
          <bio id="Text" className="Hometext">
            <h1>Jose Emmanuel Miclat Junio</h1>
            <h3>Developer</h3>
          </bio>
          <img src={image} className="luzon"/>
        </content>
      </home>
      <about id="About" className="AboutSec">
        <h1>About</h1>
      </about>
      <projects id="Projects" className="ProjectsSec">
        <h1>Projects</h1>
      </projects>
      <contact id="Contact" className="ContactSec">
        <h1>Contact</h1>
      </contact>
    </div>
  );
}

export default App;
