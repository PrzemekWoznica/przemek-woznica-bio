import './App.css';
import Navbar from './components/navbar/Navbar';
import Data from './components/personal-data/Data';
import Gallery from './components/gallery/Gallery';
import Biography from './components/biography/Biography';
import Skills from './components/skills/Skills';
import Interests from './components/interests/Interests';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Data />
        <Gallery />
        <Biography />
        <Skills />
        <Interests />
      </div>
    </div>
  );
}

export default App;
