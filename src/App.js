
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 3000,
      }
    );
  }, [])
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contactus />} />
      </Routes>

    </div>
  );
}


export default App;
