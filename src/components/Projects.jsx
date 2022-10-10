import React from 'react'
import { projects } from './projectList'

const Projects = () => {
     
  return (
    <div className='projects mt-3'>
         <h5 className="header text-center pt-2 mb-0 ">
              <span className='text-info'>My </span> Projects 
         </h5>        
         <div className='wrapper row  justify-content-center mx-auto'>
            {
                projects.map( (project , id ) => {
                    return(
                        <div className="col-12 col-sm-6 col-md-4  p-0 mt-3 mt-sm-2 pb-2" key={id}>
                             <div className='item d-block mx-auto p-0'>
                                 <img 
                                       src={ project.image } 
                                       alt={ project.name } 
                                       className='w-100'
                                  />
                                  <h6 className=' m-0 mt-1 ps-1 text-capitalize'>
                                       { project.name } 
                                 </h6>
                                  <p className='p-0 ps-1 m-0'>
                                       { project.description } 
                                  </p>
                                  <div className='pb-2 ps-1 mt-1'>
                                      <a 
                                          href={ project.liveSite } 
                                          className='btn btn-outline-dark px-0 py-md-1'
                                          target={'_blank'}
                                        >
                                         <i className="fas fa-eye"></i>  Live Site
                                      </a>
                                      <a
                                          href={ project.githubLink }
                                          className='btn btn-outline-success px-0 ms-2 py-md-1'
                                          target={'_blank'}
                                        >
                                          <i className="fab fa-github"></i> Github Repo
                                      </a>
                                  </div>
                             </div>
                        </div>
                    ) 
                 } 
               )
            }
         </div>
    </div>
  )
}

export default Projects