import React from 'react'
import languages from './languages'

const Skills = () => {

  return (
    <div className='mt-4 skills'>
       <h5 className='text-center '> <span className='text-info'> My </span> Skills </h5>
       <div className='wrapper mx-auto d-flex px-1 justify-content-center flex-wrap'> 
           {
               languages.map(  skills => {
                    if(skills.language){
                        return ( 
                             <div key={skills.id} className='mx-1 mt-1 px-1 lng'
                                  data-bs-toggle='tooltip' title={ skills.description}
                             >
                                  <img 
                                     src={ skills.image }
                                      alt={ skills.language }
                                      className='icon-image'
                                   />
                                   <span> { skills.language } </span>
                              </div>
                          )
                    }
                    else {
                        return (
                            <div className='lng mx-1 px-1 mt-1'
                                 data-bs-toggle='tooltip' title={ skills.description}
                            >
                                 <img  key = { skills.id }
                                        src={ skills.image }
                                        alt='skills'
                                        className='full-image'
                                  />
                             </div>
                        )
                    }
               } )
           }
       </div>
    </div>
  )

}

export default Skills