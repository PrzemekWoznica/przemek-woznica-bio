import './App.css';
import Navbar from './components/navbar/Navbar';
import Data from './components/personal-data/Data';
import Gallery from './components/gallery/Gallery';
import Biography from './components/biography/Biography';
import Skills from './components/skills/Skills';
import Interests from './components/interests/Interests';
import Image from './components/gallery/image-component/Image';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Data />
        <Gallery>
          <Image src='/images/cv.jpg' alt='Formal View' />
          <Image src='/images/chillout.jpg' alt='On My Way' />
          <Image src='/images/old.jpg' alt='Tomorrow' />
          <Image src='/images/safety.jpeg' alt='#COVID' />
        </Gallery>
        <Biography />
        <Skills />
        <Interests />
      </div>
    </div>
  );
}

export default App;
