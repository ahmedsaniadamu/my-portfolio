import React from 'react'

const Footer = () => {
  return (
    <footer className='footer  mb-0 text-white'>
        <h5 className='mb-0 py-1 ps-1'> Contact Support : </h5>
         <ul className='p-0 m-0 ps-2 d-flex'>             
             <li className='ms-2'> <span className="fas fa-phone"></span> +2348125391892 </li>
             <li className='ms-2'> <span className="fas fa-phone"></span> +2349028270998 </li>             
             <li className='ms-2'> 
                  <span className="fas fa-envelope"></span> 
                   <a href="mailto:saniahmed813@gmail.com" style={{paddingLeft:6}}
                     className='text-white text-decoration-none'> 
                         saniahmed813@gmail.com 
                   </a> 
              </li>                                   
         </ul>
         <p className='mt-1 m-0 p-0 text-center py-1'>  
               copyright &copy;  { ` ${new Date().getFullYear()} `} 
               all right reserverd.
        </p>
    </footer>
  )
}

export default Footer