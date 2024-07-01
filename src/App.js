import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';

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
    </div>
  );
}

export default App;
