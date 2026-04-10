import React from 'react'
import { motion } from 'framer-motion'
import languages from './languages'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 15 }
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(249, 115, 22, 0.15)",
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const Skills = () => {
  return (
    <div className='py-4 mt-3 bg-dark skills overflow-hidden' id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="container px-2"
      >
        <motion.div variants={itemVariants} className="text-center mb-4">
          <h5 className="header fw-bold mb-1 text-white" style={{ fontSize: '1rem' }}>
            <span className='text-info'>My</span> Technical Skills
          </h5>
          <p className="text-center text-muted-small" style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.6)' }}>
            The Technical skills, languages, and frameworks I’ve worked with, reflecting my versatility and experience.
          </p>

           <div className="mx-auto bg-info" style={{ width: '40px', height: '2px', borderRadius: '2px' }}></div>
        </motion.div>

        <div className='d-flex justify-content-center flex-wrap gap-3'>
          {languages.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={skillVariants}
              whileHover="hover"
              style={{ width: '80px', height: '80px', perspective: 1000 }}
              data-bs-toggle='tooltip'
              title={skill.description}
            >
              <motion.div
                className='bg-white rounded-3 p-2 d-flex flex-column align-items-center justify-content-center w-100 h-100'
                style={{ cursor: 'pointer', transformStyle: 'preserve-3d', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }
                }}
              >
                <img
                  src={skill.image}
                  alt={skill.language || 'skill icon'}
                  className={skill.language ? 'icon-image mb-1' : 'full-image'}
                  style={{
                    width: skill.language ? '35px' : '65px',
                    height: skill.language ? '35px' : '30px',
                    objectFit: 'contain'
                  }}
                />
                {skill.language && (
                  <span className="fw-bold text-dark text-center mt-1" style={{ fontSize: '0.42rem' }}> {skill.language} </span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Skills