import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced 3D Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 transition-all duration-1500"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 transition-all duration-2000"
          style={{
            left: `${mousePosition.x * 0.7}%`,
            top: `${mousePosition.y * 0.7}%`,
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

