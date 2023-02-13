import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ProjectContextProvider } from './context/ProjectContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="font-neurialgrotesk	min-h-screen text-[#545454] text-lg bg-fixed"
        style={{
          backgroundImage: `linear-gradient(
            #f0f0f0 0%, #f0f0f0 11.5%,
            #ebebeb 11.5%, #ebebeb 11.6%,
            #f0f0f0 11.6%, #f0f0f0 23.1%,
            #ebebeb 23.1%, #ebebeb 23.2%,
            #f0f0f0 23.2%, #f0f0f0 34.7%,
            #ebebeb 34.7%, #ebebeb 34.8%,
            #f0f0f0 34.8%, #f0f0f0 46.3%,
            #ebebeb 46.3%, #ebebeb 46.4%,
            #f0f0f0 46.4%, #f0f0f0 57.9%,
            #ebebeb 57.9%, #ebebeb 58%,
            #f0f0f0 58%, #f0f0f0 69.5%,
            #ebebeb 69.5%, #ebebeb 69.6%,
            #f0f0f0 69.6%, #f0f0f0 81.1%,
            #ebebeb 81.1%, #ebebeb 81.2%,
            #f0f0f0 81.2%, #f0f0f0 92.7%,
            #ebebeb 92.7%, #ebebeb 92.8%,
            #f0f0f0 92.8%, #f0f0f0 100%)`,
        }}
      >
        <ProjectContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </ProjectContextProvider>
      </div>
    </>
  )
}

export default App;
