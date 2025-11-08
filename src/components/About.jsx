import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere } from '@react-three/drei'

const FloatingCube = () => {
  return (
    <group>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#6366f1" wireframe />
      </Box>
      <Sphere args={[0.3, 32, 32]} position={[1.5, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Sphere>
      <Sphere args={[0.3, 32, 32]} position={[-1.5, 0, 0]}>
        <meshStandardMaterial color="#ec4899" />
      </Sphere>
    </group>
  )
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredStat, setHoveredStat] = useState(null)

  const stats = [
    { number: '50+', label: 'Projects Completed', color: 'from-indigo-500 to-purple-500' },
    { number: '3+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
    { number: '100%', label: 'Client Satisfaction', color: 'from-pink-500 to-red-500' },
  ]

  return (
    <section id="about" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a <span className="text-indigo-400 font-semibold">full-stack developer</span> passionate about creating 
                innovative digital solutions that make a difference.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With expertise spanning from pixel-perfect frontends to robust backend architectures, 
                I transform complex ideas into elegant, scalable applications.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My approach combines <span className="text-purple-400">creative problem-solving</span> with 
                <span className="text-pink-400"> technical excellence</span>, ensuring every project 
                delivers exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden glass-strong shadow-3d card-3d"
            whileHover={{ scale: 1.02, rotateY: 5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
              <FloatingCube />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl glass-strong border border-white/10 hover:border-indigo-500/50 transition-all overflow-hidden card-3d shadow-3d"
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5,
                rotateX: 2
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <motion.div
                  className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-3d"
                  animate={hoveredStat === index ? { scale: 1.1, y: -2 } : { scale: 1, y: 0 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 font-medium group-hover:text-indigo-300 transition-colors">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

