import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MobileNavbar from '../navbar/MobileNavbar'
import Navbar from '../navbar/Navbar'

// Animation variants
const navVariants = {
  hidden: { top: -80, opacity: 0 },
  visible: {
    top: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.5,
    }
  }
}

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const badgeVariants = {
  hidden: { scale: 0.6, opacity: 0, filter: 'blur(10px)' },
  visible: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 200, damping: 18, delay: 0.4 }
  }
}

const buttonVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 180, damping: 16 }
  },
  hover: {
    scale: 1.07,
    boxShadow: '0 0 24px rgba(13, 202, 240, 0.55)',
    transition: { type: 'spring', stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.96 }
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`w-100 ${isScrolled ? 'fixed-top shadow-lg' : 'position-absolute'}`} 
        style={{ 
          backgroundColor: isScrolled ? '#1c1e21' : 'transparent', 
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          zIndex: 1050 
        }}
      >
        <motion.nav
          className='navbar-wrapper position-relative'
          variants={navVariants}
          initial='hidden'
          animate='visible'
        >
          <MobileNavbar className={'d-md-none mobile-navbar'} />
          <Navbar className={'d-none d-md-block navbar'} />
        </motion.nav>
      </div>

      <header className='d-flex page-header justify-content-center align-items-center'>

        {/* Hero content staggers in */}
        <motion.div
          className='header-text'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Greeting badge */}
          <motion.div variants={badgeVariants} className='text-center'>
            <span className='hero-badge'>👋 Welcome to my portfolio</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 className='text-center' variants={itemVariants}>
            <big className='text-info mb-0 p-0'> Hi </big> i'm Ahmed Sani
          </motion.h2>

          {/* Sub-heading */}
          <motion.h6 className='mt-0 p-0 text-center' variants={itemVariants}>
            Software Developer | Engineer
          </motion.h6>

          {/* Description */}
          <motion.p className='m-0 p-0 text-center mx-auto' variants={itemVariants}>
            A highly skilled and motivated web developer who delivers best quality and
            scalable software for your business.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className='d-flex justify-content-center w-100'
            variants={itemVariants}
          >
            <motion.a
              href="assets/ahmed-resume.pdf"
              className="btn btn-info py-1 text-light mt-2 px-4"
              download={'ahmed_sani_resume.pdf'}
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <i className='fas fa-download me-1'></i> Download resume
            </motion.a>
          </motion.div>
        </motion.div>

      </header>
    </>
  )
}

export default Header
