import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'INSIGHTFLOW',
      description:
        'InsightFlow is a mobile-first AI-driven application that empowers users to extract meaningful insights from their datasets effortlessly. Built with Flutter and integrated with Gemini AI and Firebase, it bridges the gap between raw data and decision-making.',
      tech: ['Flutter', 'Gemini AI', 'Firebase', 'Dart'],
      github: 'https://github.com/SumedhaKar/InsightFlow',
      demo: '#',
      device: 'phone',
      gradient: 'from-purple-600 via-purple-500 to-indigo-600',
    },
    {
      title: 'ASSISTENCIA',
      description:
        'Assistencia is a facial recognition-based attendance system built using Python and OpenCV. It automates check-in/out tracking, reduces manual errors by 85%, and provides real-time dashboards for administrators.',
      tech: ['Python', 'OpenCV', 'Flask', 'SQLite'],
      github: '#',
      demo: '#',
      device: 'laptop',
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
    },
    {
      title: 'LINKIN PARK',
      description:
        'A modern tribute website for the legendary band Linkin Park, featuring a dark, immersive design with stunning visuals and smooth animations.',
      tech: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      device: 'browser',
      gradient: 'from-gray-900 via-gray-800 to-black',
    },
    {
      title: 'ALANZO CATERING',
      description:
        'An elegant catering website showcasing beautiful menus and food presentations with a clean, modern design that highlights culinary excellence.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      github: '#',
      demo: '#',
      device: 'laptop',
      gradient: 'from-gray-800 via-gray-700 to-gray-900',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const DeviceFrame = ({ children, device, gradient }) => {
    if (device === 'phone') {
      return (
        <div className="relative mx-auto" style={{ width: '280px', height: '560px' }}>
          {/* Phone Frame */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400 rounded-[3rem] p-3 shadow-2xl">
            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
              {/* Screen Content */}
              <div className={`w-full h-full bg-gradient-to-b ${gradient} p-4 overflow-y-auto`}>
                {children}
              </div>
            </div>
          </div>
        </div>
      )
    } else if (device === 'laptop') {
      return (
        <div className="relative mx-auto" style={{ width: '600px', maxWidth: '100%' }}>
          {/* Laptop Frame */}
          <div className="relative">
            {/* Screen */}
            <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg p-2 shadow-2xl">
              <div className="bg-black rounded-t-md h-6 flex items-center justify-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className={`bg-gradient-to-br ${gradient} rounded-b-md overflow-hidden`} style={{ height: '360px' }}>
                {children}
              </div>
            </div>
            {/* Base */}
            <div className="bg-gradient-to-b from-gray-300 to-gray-400 h-4 rounded-b-lg shadow-lg" />
            <div className="bg-gray-500 h-1 w-3/4 mx-auto rounded-b-lg" />
          </div>
        </div>
      )
    } else {
      // Browser
      return (
        <div className="relative mx-auto" style={{ width: '600px', maxWidth: '100%' }}>
          {/* Browser Frame */}
          <div className="bg-gray-200 rounded-t-lg p-2 shadow-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-white rounded px-4 py-1 text-xs text-gray-500">
                https://linkinpark.com
              </div>
              <div className="text-gray-600">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
                </svg>
              </div>
            </div>
            <div className={`bg-gradient-to-br ${gradient} rounded-b-lg overflow-hidden`} style={{ height: '400px' }}>
              {children}
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <section id="projects" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-24"
        >
          <motion.span
            className="text-sm md:text-base text-indigo-400 font-mono tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in modern web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-full rounded-2xl overflow-hidden glass-strong border border-white/10 hover:border-indigo-500/50 transition-all p-6 flex flex-col card-3d shadow-3d">
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Project Number */}
                <motion.div
                  className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>

                {/* Device Preview */}
                <motion.div
                  className="mb-6 -mx-6 -mt-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <DeviceFrame device={project.device} gradient={project.gradient}>
                    <div className="h-full w-full flex items-center justify-center p-8">
                      <div className="text-white text-center">
                        <div className="text-2xl md:text-3xl font-bold mb-2">{project.title}</div>
                        <div className="text-xs opacity-60">Preview</div>
                      </div>
                    </div>
                  </DeviceFrame>
                </motion.div>

                {/* Project Info */}
                <div className="flex-1 space-y-4 relative z-10">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-400 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 pt-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex space-x-4 pt-4 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm group/link"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                      <FaExternalLinkAlt size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm group/link"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Demo</span>
                      <FaExternalLinkAlt size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

