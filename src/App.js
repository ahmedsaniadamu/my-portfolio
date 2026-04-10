import React from 'react'
import './styles/index.scss'
import MobileNavbar from './components/navbar/MobileNavbar'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import About from './components/About';
import MyExperience from './components/MyExperience';
import SocialMediaLinks from './components/SocialMediaLinks';
import Services from './components/Services';
import Skills from './components/Skills'
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chat from './components/Chat';

function App() {

  return (
    <div className='app'>
      <div className='desktop-social-media-links'>
        <SocialMediaLinks flexDirection={'flex-column'} />
      </div>
      <Chat />
      <Header />
      <About />
      <MyExperience />
      <Services />
      <Skills />
      <Projects />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
