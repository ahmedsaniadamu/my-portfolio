import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
    status: '',
    isLoading: false
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = event => {
    setContactForm({ ...contactForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.title || !contactForm.message) {
      setContactForm({ ...contactForm, status: 'Error! please fill all the required fields.' });
      return;
    }

    setContactForm({ ...contactForm, status: '', isLoading: true });

    try {
      await emailjs.send(
        'service_qibprcs',
        'template_d6xcp59',
        {
          name: contactForm.name,
          message: contactForm.message,
          title: contactForm.title,
          email: contactForm.email,
        },
        {
          publicKey: 'gm6ReGscvcCqRNfMx',
        }
      );
      setContactForm({
        name: '',
        email: '',
        title: '',
        message: '',
        status: '',
        isLoading: false
      });
      setShowModal(true);
    } catch (err) {
      setContactForm({
        ...contactForm,
        status: 'Sorry! an error occurred while sending mail.',
        isLoading: false
      });
    }
  };

  return (
    <div className='contact-form d-block mx-auto'>
      <h1 className='text-center mb-0 header pt-4'> Get In Touch </h1>
      <p className='p-0 m-0 sub-header text-center mt-1 px-2'>
        Feel free to fill the required fields. I will reply as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className='d-block mx-auto'>
        <input
          type='text'
          className='form-control py-2 py-md-1 mt-2'
          name='name'
          placeholder='your name..'
          required
          value={contactForm.name}
          onChange={handleChange}
        />
        <input
          type='email'
          className='form-control bg-muted py-2 py-md-1 mt-2'
          name='email'
          placeholder='email address..'
          required
          value={contactForm.email}
          onChange={handleChange}
        />
        <input
          type='text'
          className='form-control py-2 py-md-1 mt-2'
          name='title'
          placeholder='mail subject..'
          value={contactForm.title}
          onChange={handleChange}
        />
        <textarea
          name='message'
          value={contactForm.message}
          required
          placeholder='your message..'
          onChange={handleChange}
          className='form-control py-2 mt-2'
        />
        <p className='pt-1 text-danger status m-0 '>
          {contactForm.status}
        </p>
        <button
          type="submit"
          className='btn py-1 text-center mt-1 d-block mx-auto'
        >
          {contactForm.isLoading ? <span className='spinner spinner-border'></span> : <span>Send Message</span>}
        </button>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div style={{width: 300}} className="modal-content bg-dark">
            <button className="modal-close-btn text-white" onClick={() => setShowModal(false)}>&times;</button>
            <div className="modal-body mt-3">
                          <h5 style={{ fontSize: '0.8rem' }} className="text-success mb-2">Your message was delivered successfully!</h5>
              <p style={{fontSize: '0.5rem'}} className='text-muted-small'>I will reply as soon as possible.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
