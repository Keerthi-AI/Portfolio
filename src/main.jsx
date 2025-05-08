import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css'

// Improved Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

// Root component
function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="relative overflow-hidden">
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </HashRouter>
  );
}

// Create root and render app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)