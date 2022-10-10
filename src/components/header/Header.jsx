import React from 'react'

const Header = () => {

  return (
    <>
     
     <header className='d-flex page-header justify-content-center align-items-center'>         
         <div className=' header-text'>
               <h2 className='text-center'>  <big className='text-info mb-0 p-0'> Hi </big> i'm Ahmed Sani  </h2>
               <h6 className='mt-0 p-0 text-center'>   Web Developer | Computer Scientist </h6>
                <p className='m-0 p-0 text-center mx-auto'>
                    A highly skilled and motivated web developer who deliver best quality and 
                    scalable software for your business . 
                </p>
                 <div className='d-flex justify-content-center w-100'>
                        <a
                            href="assets/ahmed-resume.pdf" 
                            className="btn btn-info py-1 text-light mt-2 px-4"
                            download={'ahmed_sani_resume.pdf'}
                        > 
                           <i className='fas fa-download me-1'> </i>  Download resume 
                        </a>
                 </div>
         </div>                 
     </header>
    </>
  )
}

export default Header