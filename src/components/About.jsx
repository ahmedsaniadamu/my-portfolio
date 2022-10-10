import React from 'react'

const About = () => {
  return (
    <div className='about pb-4 pt-3'>
          <h5 className="header text-center">  About Me </h5>
          <section className='row w-100 p-0 m-0 mx-auto px-md-3 px-xl-5 align-items-center'>
               <div className='col-12 col-sm-4 col-md-2'> 
                   <img src="assets/IMG_20220301_101333.png" alt="ahmed image"  />
                </div>
              <div className='col-12 col-sm-8 col-md-10 mx-auto'>
                  <i className="fas fa-quote-left"></i> <br />
                  <p className='px-2 p-0 m-0'>
                        I am a web developer who is passionated in programming and solving complex 
                        algorithm in to a simple solution and turns your design ideas into a 
                        live website to help your business grow faster using modern  web technologies.
                  </p>
                  <i className="fas fa-quote-right d-block text-end pe-2"></i> 
              </div>
          </section>
    </div>
  )
}

export default About