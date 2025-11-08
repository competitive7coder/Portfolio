import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#', label: 'Email' },
  ]

  return (
    <footer className="border-t border-indigo-500/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Portfolio. All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                aria-label={label}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

