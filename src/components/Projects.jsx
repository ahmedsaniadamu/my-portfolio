import React from 'react'
import { motion } from 'framer-motion'
import { projects } from './projectList'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
  hover: {
    y: -8,
    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const Projects = () => {

  return (
    <div className='py-4 projects overflow-hidden' id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="container px-2"
      >
        <motion.div variants={itemVariants} className="text-center mb-4">
          <h5 className="header fw-bold mb-1 text-white" style={{ fontSize: '1rem' }}>
            <span className='text-info'>Explore</span> Some Of My Recent Projects 
          </h5>
          <p className="text-center text-muted-small" style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.6)' }}>Here are a some projects I've worked on recently for various clients, showcasing my skills and experience.</p>
          <div className="mx-auto bg-info" style={{ width: '40px', height: '2px', borderRadius: '2px' }}></div>
        </motion.div>

        <div className='row g-3 justify-content-center'>
          {projects.map((project, id) => (
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              key={id}
              variants={cardVariants}
              whileHover="hover"
            >
              <div
                className='card h-100 overflow-hidden border-0'
                style={{
                  backgroundColor: '#1E2024',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div className="position-relative overflow-hidden w-100" style={{ height: '200px' }}>
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className='w-100 h-100'
                    style={{ objectFit: 'cover' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Subtle gradient overlay to blend image into the dark card */}
                  <div className="position-absolute bottom-0 w-100" style={{ height: '60%', background: 'linear-gradient(to top, #1E2024 0%, transparent 100%)', pointerEvents: 'none' }}></div>
                </div>

                <div className="card-body p-3 p-md-4 d-flex flex-column z-1 position-relative" style={{ marginTop: '-30px' }}>
                  <h4 className='card-title fw-bold text-white text-capitalize mb-2 shadow-sm' style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                    {project.name}
                  </h4>
                  <p className='card-text mb-3 mt-1' style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', flexGrow: 1, fontSize: '0.5rem' }}>
                    {project.description}
                  </p>

                  <div className='d-flex gap-2 mt-auto pt-3' style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: '#ea580c' }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveSite}
                      className='btn btn-info text-white rounded-pill px-1 py-2 fw-semibold w-100 d-flex align-items-center justify-content-center gap-1'
                      target={'_blank'}
                      rel="noreferrer"
                      style={{ fontSize: '0.35rem', boxShadow: '0 4px 10px rgba(249, 115, 22, 0.3)' }}
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      className='btn text-white rounded-pill px-1 py-2 fw-semibold w-100 d-flex align-items-center justify-content-center gap-1'
                      target={'_blank'}
                      rel="noreferrer"
                      style={{ fontSize: '0.35rem', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      <i className="fab fa-github"></i> Source Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
