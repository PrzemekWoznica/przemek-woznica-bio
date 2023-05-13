import './App.css';
import Navbar from './components/navbar/Navbar';
import Data from './components/personal-data/Data';
import Skills from './components/skills/Skills';
import Apps from './components/apps/Apps';



function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Data /> 
        <Skills />   
        <Apps />
      </div>
    </div>
  );
}

export default App;
