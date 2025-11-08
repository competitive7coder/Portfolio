import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import * as THREE from 'three'

const AnimatedGeometry = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        <Sphere args={[1, 64, 64]} scale={1.8}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0}
            transparent
            opacity={0.9}
          />
        </Sphere>
        <Sphere args={[1.2, 32, 32]} scale={1.5}>
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>
      </group>
    </Float>
  )
}

const ParticleField = () => {
  const particles = useMemo(() => {
    const count = 200
    return new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 20)
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#6366f1" transparent opacity={0.6} />
    </points>
  )
}

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: '#', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
    { icon: FaTwitter, href: '#', color: 'hover:text-sky-400' },
    { icon: FaEnvelope, href: '#', color: 'hover:text-red-400' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <Stars radius={300} depth={50} count={5000} factor={4} fade speed={1} />
          <ParticleField />
          <AnimatedGeometry />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1.5}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.span
              className="text-sm md:text-base text-indigo-400 font-mono tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to my digital space
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight text-3d"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                  '0 0 40px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(99, 102, 241, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              I Build
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Digital Experiences
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full-stack developer crafting innovative solutions with modern technologies.
            <br className="hidden md:block" />
            <span className="text-indigo-400">Turning ideas into reality, one line of code at a time.</span>
          </motion.p>

          <motion.div
            className="flex justify-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                className="group relative p-4 rounded-full glass border border-white/10 hover:border-indigo-500/50 transition-all card-3d"
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  rotateY: 10,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Icon className={`text-xl text-gray-400 transition-colors ${color} relative z-10`} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg overflow-hidden shadow-3d glow-indigo"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 30px 60px rgba(99, 102, 241, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-indigo-500/50 rounded-full text-indigo-300 font-semibold text-lg hover:bg-indigo-500/10 hover:border-indigo-400 transition-all glass-strong shadow-3d"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.2)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-indigo-400 transition-colors group">
            <span className="text-xs mb-2 tracking-widest uppercase font-mono">Scroll</span>
            <HiArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

