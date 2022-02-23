import React from 'react'

const Services = () => {
  return (
    <div className='mt-2 services'>
         <h5 className="header text-center">  Services  </h5>
         <div className="row w-100 mx-auto px-1">
             <div className="col-12 col-sm-6 col-md-4 pt-2 ">
                   <div className="wrapper d-block mx-auto border pt-2">
                        <span className="fas fa-code d-block text-center"></span>
                        <h6 className='text-center mt-1'>  Web Development </h6>
                        <p className='text-center'> 
                             Implementation of psd or figma design into a
                             live website with cross browser compatibility.
                         </p>
                   </div>
             </div>
             <div className="col-12 col-sm-6 col-md-4 pt-2">
                   <div className="wrapper d-block mx-auto border pt-2">
                        <span className="fas fa-laptop d-block text-center"></span>
                        <h6 className='text-center mt-1'>  Responsive Design </h6>
                        <p className='text-center'> 
                             Design that aims to make web pages render well on
                             verity of devices mobile tablet and desktop.
                         </p>
                   </div>
             </div>
             <div className="col-12 col-sm-6 col-md-4 pt-2">
                   <div className="wrapper d-block mx-auto border pt-2">
                        <span className="fas fa-edit d-block text-center"></span>
                        <h6 className='text-center mt-1'>  Template Editing </h6>
                        <p className='text-center'> 
                              Editing and optmizing an already created website or web application
                              the match your business needs.
                         </p>
                   </div>
             </div>              
         </div>
    </div>
  )
}

export default Services