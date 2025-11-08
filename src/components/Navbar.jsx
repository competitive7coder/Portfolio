import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Change background on scroll
      setIsScrolled(currentScrollY > 50)

      // Detect scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false) // scroll down → hide
      } else {
        setShowNavbar(true) // scroll up → show
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => (document.body.style.overflow = 'unset')
  }, [isMenuOpen])

  const navItems = [
    { name: 'WORKS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'GITHUB', href: '#', icon: FaGithub },
    { name: 'LINKEDIN', href: '#', icon: FaLinkedin },
    { name: 'TWITTER', href: '#', icon: FaTwitter },
  ]

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: showNavbar ? 0 : -100, // hide when scrolling down
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          willChange: 'transform',
        }}
        className={`z-[100] transition-all duration-300 ${
          isScrolled
            ? 'glass-strong border-b border-indigo-500/30 shadow-3d'
            : 'glass border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-3d"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Portfolio
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-indigo-400 transition-colors relative group px-4 py-2 rounded-lg"
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            {!isMenuOpen && (
              <motion.button
                className="text-gray-300 hover:text-indigo-400 transition-colors relative z-[101] p-2 rounded-lg glass hover:border border-indigo-500/30"
                onClick={() => setIsMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBars size={24} />
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[200] flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors z-[201]"
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(false)
              }}
            >
              <FaTimes size={20} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-8 mb-16">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-black text-7xl md:text-9xl font-bold tracking-tight hover:opacity-70 transition-opacity"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name === 'CONTACT' ? (
                      <span>
                        CONT
                        <span className="inline-block w-16 h-16 rounded-full bg-black relative">
                          <span className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                            @
                          </span>
                        </span>
                        CT
                      </span>
                    ) : (
                      item.name
                    )}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center space-x-8"
              >
                {socialLinks.map(({ name, href }) => (
                  <motion.a
                    key={name}
                    href={href}
                    className="text-black text-lg font-semibold underline hover:opacity-70 transition-opacity flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{name}</span>
                    <span className="text-sm">↗</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
