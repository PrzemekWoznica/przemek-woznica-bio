import './App.css';
import Navbar from './components/navbar/Navbar';
import Data from './components/personal-data/Data';
import Skills from './components/skills/Skills';
import Apps from './components/apps/Apps';
import Photos from './components/photos/Photos';



function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Data /> 
        <Skills />   
        <Apps />
        <Photos />
      </div>
    </div>
  );
}

export default App;
