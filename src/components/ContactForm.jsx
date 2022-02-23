import React,{ useRef, useState } from 'react'

const ContactForm = () => {
   
    const [ contactForm , setContactForm ] = useState({
         email : '' ,
         subject : '' ,
         messege : '' ,
         status : '' ,
         success : '' ,
         isLoading : false
    })

    const formRef = useRef(null)

   const handleChange = event => {
       setContactForm({...contactForm,[event.target.name] : event.target.value})
   }
   
   const handleSubmit = event => {
        event.preventDefault() ;
        let isOk = true ; 
        
        //check if email address is valid 
        if( (!contactForm.email.includes('@') ) || contactForm.email.startsWith('@') 
           || !contactForm.email.endsWith('@gmail.com')){
           setContactForm({...contactForm,status:'please use a valid email address.'})
           isOk = false ;
        }
        //check if all input are not empty excluding image which is optional
        if( !contactForm.email || !contactForm.subject || !contactForm.messege ){
              
              setContactForm({...contactForm,status:'Error! please fill all the required fields.'})
              isOk = false ;
              
        } 
        //send a request to the server
        if(isOk){
           setContactForm({...contactForm , status:'', isLoading : true}) 
           //submit the form the server 
           let formData = new FormData(formRef.current);
           fetch('https://ahmed-sani-contact-mail-server.herokuapp.com/contact.php' , {
               method : 'POST' ,
               body : formData 
           })
           .then( res => res.text() )
           .then( result => {
               //check if sever returns a success if 1 then mail is send if 0 mail is not sent
               if(Number(result) === 1){
                    setContactForm({                       
                        ...contactForm,
                        status:'',
                        success : 'your messege is delivered successfully. i will reply as soon as possible' ,
                        isLoading : false
                       })
                   }
                   else  setContactForm({                       
                                        ...contactForm,
                                        status:'',
                                        success : 'Sorry! an error occured while sending mail.' ,
                                        isLoading : false
                                    })             
               } )                
        } 
   }
 
    return (
        <div className='contact-form d-block mx-auto'>                     
            <h1 className='text-center mb-0 header pt-2'> Get In Touch  </h1>
            <p className='p-0 m-0 sub-header text-center mt-1 px-2'>  
               Feel free to fill the required fields. I will reply as soon as possible.
            </p>
            <form ref={ formRef } className='d-block mx-auto'>               
                <input 
                    type='email'
                    className='form-control py-2 py-md-1 mt-2'
                    name='email'
                    placeholder='email address..'
                    required
                    value={ contactForm.email }
                    id='email'
                    onChange={ handleChange }
                    maxLength={300}
                /> 
                <input 
                    type='text'
                    className='form-control py-2 py-md-1 mt-2'
                    name='subject'
                    placeholder='mail subject..'
                    value={ contactForm.subject }
                    id='subject'
                    onChange={ handleChange }
                    maxLength={500}
                />            
                <textarea 
                       name='messege' 
                       value={ contactForm.messege } 
                       required 
                       id='messege'
                       placeholder='your messege..'
                       onChange={ handleChange }
                       className='form-control py-2 mt-2'
                >                    
                </textarea>
                <p className='pt-1 text-danger status m-0 '>
                     { contactForm.status }
                     <i className='text-white'> { contactForm.success } </i>
                 </p>
                <button
                   onClick={ handleSubmit }
                   className='btn btn-danger py-1 text-center  mt-1 d-block mx-auto'
                >
                    {
                       contactForm.isLoading ?
                        <span className='spinner spinner-border'></span>
                        :
                         <span>  Send Messege </span>
                    }
                </button>                 
            </form>
        </div>
    )
}

export default ContactForm
