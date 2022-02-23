import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

const Chat = () => {

 const [ showChat , setShowChat  ] = React.useState(false)

  const displayChat  = () => {
      let aboutSection = document.querySelector('.about')
      if(window.pageYOffset  >= aboutSection.offsetTop - 300 ){
             setShowChat(true)
      }
  }

  React.useEffect(  () => {
      window.addEventListener('scroll',displayChat) ;
      return(
          () => window.removeEventListener('scroll',displayChat)
      )
  })

  return (
    <div className='d-block d-md-none chat-wrapper'>
         <img 
              style={ {  display : showChat ? "block" : "none"} }
              src="assets/IMG_20220219_141001.png" 
              alt="chat" 
              className='chat-img'
              data-bs-toggle='offcanvas' data-bs-target='#chat'
          />
          <div className='offcanvas offcanvas-bottom p-0 m-0' id='chat' >
                <h5 className='my-0 py-2 ps-1 border-bottom mb-2'> Connect with me.  </h5>
                <SocialMediaLinks />
          </div>
    </div>
  )                              
}

export default Chat