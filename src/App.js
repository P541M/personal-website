import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <LandingPage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </div>
  );
}

export default App;
