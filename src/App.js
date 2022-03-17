import './App.css';
import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Data from './components/personal-data/Data';
import Gallery from './components/gallery/Gallery';
import Apps from './components/apps/Apps';
import Image from './components/gallery/image-component/Image';
import Popup from './components/popup/Popup';
import cv from './images/cv.jpg';
import chillout from './images/chillout.jpg';
import old from './images/old.jpg';
import safety from './images/safety.jpeg';


function App() {
  const [image, setImage] = useState('');
  const [trigger, setTrigger] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Data />
        <Gallery>
          <Image src={cv} alt='Formal View' 
            selectImage={() => setImage('/images/cv.jpg')}
            triggerOnClick={() => setTrigger(true)}/>
          <Image src={chillout} alt='On My Way' 
            selectImage={() => setImage('/images/chillout.jpg')}
            triggerOnClick={() => setTrigger(true)}/>
          <Image src={old} alt='Tomorrow' 
            selectImage={() => setImage('/images/old.jpg')}
            triggerOnClick={() => setTrigger(true)}/>
          <Image src={safety} alt='#COVID' 
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
