import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SocialMediaLinks from './SocialMediaLinks'

const Chat = () => {

    const [showChat, setShowChat] = React.useState(false)

    const displayChat = () => {
        let aboutSection = document.querySelector('#about') || document.querySelector('.about')
        if (aboutSection && window.pageYOffset >= aboutSection.offsetTop - 200) {
            setShowChat(true)
        } else {
            setShowChat(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', displayChat);
        return (
            () => window.removeEventListener('scroll', displayChat)
        )
    })

    return (
        <div className='d-block d-md-none chat-wrapper' style={{ zIndex: 1000 }}>
            <AnimatePresence>
                {showChat && (
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        src="assets/IMG_20220219_141001.png"
                        alt="chat"
                        className='chat-img shadow-lg rounded-circle position-fixed border border-2 border-white'
                        style={{ bottom: '20px', right: '20px', cursor: 'pointer', zIndex: 1050 }}
                        data-bs-toggle='offcanvas' data-bs-target='#chat'
                    />
                )}
            </AnimatePresence>

            <div className='offcanvas offcanvas-bottom p-0 m-0 pb-5 border-top rounded-top-4 bg-dark shadow-lg' id='chat' style={{ maxHeight: '35vh', backgroundColor: '#f8f9fa' }}>
                <div className="offcanvas-header pb-0 mb-2 border-bottom bg-dark d-flex justify-content-between align-items-center">
                    <h5 className='my-0 py-2 fw-bold text-white' style={{ fontSize: '0.7rem' }}> Connect with me.  </h5>
                    <button type="button" className="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body pt-2 pb-3 mb-3 position-relative">
                    <SocialMediaLinks />
                </div>
            </div>
        </div>
    )
}

export default Chat