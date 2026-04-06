import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Contact = () => {
  return (
    <div className='contact py-4 overflow-hidden' id="contact" style={{ backgroundColor: '#1c1e21' }}>
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="container px-2"
        >
            <motion.div variants={itemVariants} className="text-center mb-4">
                 <h5 className="header fw-bold mb-2 text-white" style={{ fontSize: '1rem' }}> 
                    <span className='text-info'>Get In</span> Touch 
                 </h5>
                 <div className="mx-auto bg-info" style={{ width: '40px', height: '2px', borderRadius: '2px' }}></div>
                 <p className="mt-3 text-light opacity-75 mx-auto" style={{ maxWidth: '600px', fontSize: '0.55rem' }}>
                    I'm currently available to take on new projects and opportunities. Feel free to reach out to discuss how we can work together.
                 </p>
            </motion.div>

            <motion.div variants={itemVariants} className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="bg-dark p-3 p-md-4 rounded-4 shadow-lg text-white" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                        <ContactForm />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}
 
export default Contact