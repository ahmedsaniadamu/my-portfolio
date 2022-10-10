import React from 'react'
import { scrollTo } from '../helper/scrollTo'

const Navbar = ({ className }) => {

  let elementPostion = element => document.querySelector(element).offsetTop

  return (
    <div className={ className }>
          <div className='h-100 d-flex align-items-center justify-content-between'>
             <img src="assets/logo.jpg" alt="logo" className='logo ms-1'/>              
             <div className=' navigation-links'>
                 <ul className='p-0 m-0 d-flex align-items-center me-3'>
                      <li
                          className='ms-3' 
                          onClick={ () => scrollTo(elementPostion('#root') - 30 )}
                       >
                        Home 
                      </li>
                      <li 
                          className='ms-3'
                          onClick={ () => scrollTo(elementPostion('.about') - 30 )}
                      > 
                        About 
                      </li>
                      <li 
                         className='ms-3' 
                         onClick={ () => scrollTo(elementPostion('.projects') -30 )}
                       > 
                          Projects
                       </li>
                      <li 
                         className='ms-3'
                         onClick={ () => scrollTo(elementPostion('.contact') - 30 )}
                       > 
                         Contact 
                      </li>
                      <li 
                        className='ms-3'
                        onClick={ () => scrollTo(elementPostion('.services') - 30 )}
                      > 
                         Services 
                    </li>
                 </ul>
             </div>             
          </div> 
    </div>
  )
}

export default Navbar