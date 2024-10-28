import React from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Artist from './pages/Artist'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className='app-container'>
      <ScrollToTop />
      <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
    <Footer />
    </div>
  )
}

export default App
