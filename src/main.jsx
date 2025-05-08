import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'

// Improved Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

// Root component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </BrowserRouter>
  </StrictMode>,

)