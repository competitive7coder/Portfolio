import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: FaPhone,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Your City, Country',
      href: '#',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-sm md:text-base text-indigo-400 font-mono tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            Let's Connect
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Get In
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            {contactInfo.map(({ icon: Icon, text, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="group relative flex items-center space-x-4 p-6 rounded-2xl glass-strong border border-white/10 hover:border-indigo-500/50 transition-all overflow-hidden card-3d shadow-3d"
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  rotateY: 5,
                  rotateX: 2
                }}
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10 p-4 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                  <Icon className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={24} />
                </div>
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors text-lg">
                  {text}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-3 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-3d focus:shadow-3d-hover"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-3 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-3d focus:shadow-3d-hover"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-3 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send Message</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

