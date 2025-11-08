import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiJavascript,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'

// Custom Java Icon Component
const JavaIcon = ({ size, style, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={style}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.851 18.56s.885.66 1.567.66c.977 0 1.567-.495 1.567-1.239v-7.111h1.496v7.185c0 1.732-1.039 2.651-2.742 2.651-1.239 0-2.086-.495-2.848-1.146zm5.93.66c1.732 0 2.651-.743 3.188-1.34l-1.146-1.146c-.33.412-.909.743-1.65.743-.909 0-1.32-.33-1.732-.99v-1.567h4.953v-1.32c0-2.321-1.32-4.036-3.717-4.036-2.321 0-3.801 1.65-3.801 3.801v6.435c0 .99.165 1.32.577 1.732.495.495 1.155.66 1.734.66zm-.082-8.436c.66 0 1.155.33 1.32.99v-.495c0-.66-.33-1.155-.99-1.155-.66 0-1.155.495-1.155 1.155v.495c.165-.66.66-.99 1.32-.99zM14.116 24c-1.732 0-2.651-.412-3.188-.908l1.146-1.239c.495.33 1.155.577 1.896.577 1.32 0 2.156-.825 2.156-2.321h-2.156v-1.32h3.388v1.32c0 2.321-1.32 3.801-3.242 3.801zm-5.93-5.445v-1.32c0-.66.33-1.155.99-1.155.66 0 1.155.495 1.155 1.155v1.32c0 .66-.495 1.155-1.155 1.155-.66 0-.99-.495-.99-1.155z"/>
    <path d="M11.936 12.322c-1.155 0-1.732.495-1.732 1.32 0 .99.66 1.32 1.65 1.32.825 0 1.32-.33 1.65-.99v-1.32c-.33-.33-.99-.33-1.567-.33zm-1.32 1.32c0-.33.165-.495.495-.495.33 0 .495.165.495.495 0 .33-.165.495-.495.495-.33 0-.495-.165-.495-.495z"/>
  </svg>
)

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Vanilla.js', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Three.js', icon: SiThreedotjs, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Java', icon: JavaIcon, color: '#ED8B00' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
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
            Expertise
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Infinite Scrolling Skills */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -((128 + 24) * skills.length)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* First set of skills */}
            <div className="flex gap-6">
              {skills.map(({ name, icon: Icon, color }, index) => (
                <motion.div
                  key={`first-${name}-${index}`}
                  className="group relative flex-shrink-0 w-32 h-32 rounded-2xl glass-strong border border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer overflow-hidden card-3d shadow-3d"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotateY: 10,
                    rotateX: 5
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2 p-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={40} style={{ color }} className="group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-indigo-300 transition-colors text-center">
                      {name}
                    </span>
                  </div>
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex gap-6">
              {skills.map(({ name, icon: Icon, color }, index) => (
                <motion.div
                  key={`second-${name}-${index}`}
                  className="group relative flex-shrink-0 w-32 h-32 rounded-2xl glass-strong border border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer overflow-hidden card-3d shadow-3d"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotateY: 10,
                    rotateX: 5
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2 p-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={40} style={{ color }} className="group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-indigo-300 transition-colors text-center">
                      {name}
                    </span>
                  </div>
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

