
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './pages/Home';
import About from './pages/About';
import Upcoming from './pages/Upcoming';
import Contact from './pages/Contact';
import ResponsiveAppBar from './components/Nav';
import { Routes, Route } from 'react-router';



function App() {
  return (
    <div className="App">
      
      <main>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Upcoming' element={<Upcoming/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
