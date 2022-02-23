import React from 'react'

const Header = () => {

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path 
                  fill="#62d5f8" fillOpacity="3" 
                  d="M0,288L60,250.7C120,213,240,139,360,101.3C480,64,600,64,720,58.7C840,53,960,43,1080,37.3C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
              </path>
    </svg>
     <header className='d-flex page-header'>         
         <div className=' header-text mt-md-4  ms-md-5 ps-2 d-none d-md-block'>
               <h2>  <big className='text-info mb-0 p-0'> Hi </big> i'm Ahmed Sani  </h2>
               <h6 className='mt-0 p-0'>   Web Developer | Computer Scientist </h6>
                <p className='m-0 p-0'>
                    A highly skilled and motivated web developer who deliver best quality and 
                    scalable software for your business . 
                </p>
                <a
                    href="assets/my_resume.pdf.pdf" 
                    className="btn btn-info py-1 text-light"
                    download={'ahmed_sani_resume.pdf'}
                 > 
                       download resume 
                </a>
         </div>
         <div className='d-flex child-2' style={{ marginLeft : -20 }}>
              <img src="assets/ahmedsani.png" alt="header" className='header-img' />
         </div>
         <div className=' header-text mt-md-4  ms-md-5 ps-2  d-sm-none m-header pt-2 pe-1'>
               <h2>  <big className='text-info mb-0 p-0'> Hi </big> i'm Ahmed Sani  </h2>
               <h6 className='mt-0 p-0'>  A Web Developer | Computer Scientist </h6>
                <p className='m-0 p-0'>
                    A highly skilled and motivated web developer who deliver best quality and 
                    scalable software for your business . 
                </p>
                <a
                    href="assets/my_resume.pdf.pdf" 
                    className="btn btn-info py-1 text-light"
                    download={'ahmed_sani_resume.pdf'}
                 > 
                       download resume 
                </a>
         </div>
     </header>
    </>
  )
}

export default Header