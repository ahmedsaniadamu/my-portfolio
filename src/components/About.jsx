import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
}

const About = () => {
  return (
    <div className='about py-3 overflow-hidden' id="about" style={{ background: '#1c1e21' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container px-2"
      >
        <motion.div variants={itemVariants} className="text-center mb-3">
          <h5 className="header fw-bold mb-2 text-light" style={{ fontSize: '1rem' }}>
            <span className='text-info'>About</span> Me
          </h5>
          <div className="mx-auto bg-info" style={{ width: '40px', height: '2px', borderRadius: '2px' }}></div>
        </motion.div>

        <section className='row align-items-center justify-content-center'>
          <motion.div variants={itemVariants} className='col-12 col-md-5 col-lg-4 mb-3 mb-md-0 d-flex justify-content-center'>
            <img
              src="assets/ahmed.jpeg"
              alt="ahmed image"
              className="rounded shadow-lg position-relative"
              style={{ width: '230px', height: '270px', objectFit: 'fill', border: '3px solid rgba(255, 255, 255, 0.1)', zIndex: 2 }}
            />
          </motion.div>
          <motion.div variants={itemVariants} className='col-12 col-md-7 col-lg-8'>
            <div className="bg-dark p-3 p-md-4 rounded-4 shadow-lg position-relative" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <i className="fas fa-quote-left text-info mb-2 opacity-50" style={{ fontSize: '0.8rem' }}></i>
              <p className='lh-base mb-3' style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.6rem' }}>
                I am a passionate web developer dedicated to programming and transforming complex
                problems into elegant, efficient solutions. I bring your design ideas to
                life through high-quality, scalable websites that help your business grow
                faster using modern web technologies.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-info" style={{ width: '20px', height: '2px' }}></div>
                  <span className="fw-bold text-light tracking-wide" style={{ fontSize: '0.6rem' }}>Ahmed Sani</span>
                </div>
                <i className="fas fa-quote-right text-info opacity-50" style={{ fontSize: '0.8rem' }}></i>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  )
}

export default About
