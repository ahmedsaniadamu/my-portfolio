import React from 'react'
import './styles/index.scss'
import MobileNavbar from './components/navbar/MobileNavbar'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import About from './components/About';
import SocialMediaLinks from './components/SocialMediaLinks';
import Services from './components/Services';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chat from './components/Chat';

function App() {
   
  return (
    <div className='app'>
        <nav className='navbar-wrapper'>
             <MobileNavbar className={'d-md-none mobile-navbar'} />
             <Navbar className={'d-none d-md-block navbar'} />
        </nav>    
        <div className='desktop-social-media-links'> 
           <SocialMediaLinks flexDirection={'flex-column'} />
         </div>         
        <Chat />
        <Header />   
        <About />
        <Services />  
        <Skills />
        <Projects  />   
        <Contact />  
        <Footer />
    </div>
  );
}

export default App;
