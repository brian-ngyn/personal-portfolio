import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { createTheme } from '@mui/material/styles';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className="min-h-screen text-[#E0E1DD]" style={{
          backgroundImage: "linear-gradient(90deg, #0D1B2A 0%, #0D1B2A 25%, #1B263B 25%, #1B263B 100%)",
        }}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
