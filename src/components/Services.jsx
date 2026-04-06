import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const services = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    desc: 'Implementation of PSD or Figma design into a live website with cross browser compatibility and modern standards.'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Design',
    desc: 'Design that aims to make web pages render flawlessly on a variety of devices: mobile, tablet and desktop.'
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'Template Editing',
    desc: 'Editing, optimizing and redefining an already created website or web application to match your business goals.'
  }
]

const Services = () => {
  return (
    <div className='py-3 overflow-hidden services' id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="container px-2"
      >
        <motion.div variants={itemVariants} className="text-center mb-3 mt-3">
          <h5 className="header fw-bold mb-2 text-white" style={{ fontSize: '1rem' }}>
            <span className='text-info'>My</span> Services
          </h5>
          <div className="mx-auto bg-info" style={{ width: '40px', height: '2px', borderRadius: '2px' }}></div>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <motion.div
              className="col-12 col-md-4"
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="card h-100 border-0 p-3 rounded-4 bg-dark shadow-lg mx-1" style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                <div className="card-body text-center d-flex flex-column align-items-center p-0 pt-2">
                  <div className="icon-wrapper mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', fontSize: '1.2rem', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
                    <span className={service.icon}></span>
                  </div>
                  <h4 className='fw-bold mb-2 text-white' style={{ fontSize: '0.65rem' }}>{service.title}</h4>
                  <p className='text-white mb-0' style={{ fontSize: '0.5rem', lineHeight: '1.5' }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
