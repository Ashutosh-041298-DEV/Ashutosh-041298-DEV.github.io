
import './App.css';
import { About } from './components/.About';
import { Contact } from './components/contact';
import { Home } from './components/Home';


import { Navbar } from './components/Navbar';
import { Skills } from './components/skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
