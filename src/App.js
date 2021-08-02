import './App.css';
import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Data from './components/personal-data/Data';
import Gallery from './components/gallery/Gallery';
import Apps from './components/apps/Apps';
import Image from './components/gallery/image-component/Image';
import Popup from './components/popup/Popup';

function App() {
  const [image, setImage] = useState('');
  const [trigger, setTrigger] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Data />
        <Gallery>
          <Image src='/images/cv.jpg' alt='Formal View' 
            selectImage={() => setImage('/images/cv.jpg')}
            triggerOnClick={() => setTrigger(true)}/>
          <Image src='/images/chillout.jpg' alt='On My Way' 
            selectImage={() => setImage('/images/chillout.jpg')}
            triggerOnClick={() => setTrigger(true)}/>
          <Image src='/images/old.jpg' alt='Tomorrow' 
            selectImage={() => setImage('/images/old.jpg')}
            triggerOnClick={() => setTrigger(true)}/>
          <Image src='/images/safety.jpeg' alt='#COVID' 
            selectImage={() => setImage('/images/safety.jpeg')}
            triggerOnClick={() => setTrigger(true)}/>
        </Gallery>      
        <Apps />
      </div>
      <Popup image={image} trigger={trigger} closeOnClick={() => setTrigger(false)}/>
    </div>
  );
}

export default App;
