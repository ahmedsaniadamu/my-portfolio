import React from 'react'

const SocialMediaLinks = ({ flexDirection , className }) => {
  return (
    <div className={`${flexDirection} ${className} d-flex`}>
         <a 
               href="https://web.facebook.com/profile.php?id=100023749763044" 
               className="fab fa-facebook text-center m-0"
                data-bs-toggle='tooltip' title='facebook'
                target={'_blank'}
           ></a>
         <a 
             href="https://api.whatsapp.com/send?phone=2348125391892&text=%20Hello%20Ahmed"
              className="fab fa-whatsapp text-center m-0"
              data-bs-toggle='tooltip' title='whatsapp'
              target={'_blank'}
              >  </a>
         <a href="https://www.linkedin.com/in/ahmed-sani-adamu-6275991b4?originalSubdomain=ng"
          className="fab fa-linkedin text-center m-0"
          data-bs-toggle='tooltip' title='linkedin'
          target={'_blank'}
          ></a>
         <a href="https://www.github.com/ahmedsaniadamu" 
         className="fab fa-github text-center m-0"
         data-bs-toggle='tooltip' title='github'
         target={'_blank'}
         ></a>        
    </div>
  )
}

export default SocialMediaLinks