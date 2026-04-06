import React from 'react'
import { scrollTo } from '../helper/scrollTo'

const MobileNavbar = ({ className }) => {

  let elementPostion = element => document.querySelector(element).offsetTop

  const closeSidebarFunc = () => {
    let closeSidebar = document.createElement('i')
    closeSidebar.setAttribute('data-bs-dismiss', 'offcanvas')
    document.querySelector('.sidebar-links').appendChild(closeSidebar)
    closeSidebar.click()
  }

  return (
    <div className={className}>
      <div className='h-100 d-flex align-items-center bg-dark align-items-center justify-content-between'>
        <img style={{ borderRadius: '50%' }} src='assets/logo.jpg' alt='logo' className='logo ms-1' />
        <span className='fas fa-bars me-1 text-white' data-bs-toggle='offcanvas' data-bs-target='#demo'></span>
        <div className='offcanvas bg-dark offcanvas-start' id='demo'>
          <ul className='p-0 m-0 p-2 sidebar-links'>
            <li
              className='ms-1 text-white'
              onClick={() => {
                closeSidebarFunc();
                scrollTo(elementPostion('#root') - 20)
              }
              }
            >
              <span className='fas fa-home'></span> Home
            </li>
            <li
              className='ms-1 text-white'
              onClick={() => {
                closeSidebarFunc();
                scrollTo(elementPostion('.about') - 20)
              }
              }
            >
              <span className='fas fa-user text-white'></span> About
            </li>
            <li
              className='ms-1 text-white'
              onClick={() => {
                closeSidebarFunc();
                scrollTo(elementPostion('.projects') - 20)
              }
              }
            >
              <span className='far fa-clone text-white'></span> Projects
            </li>
            <li
              className='ms-1 text-white'
              onClick={() => {
                closeSidebarFunc();
                scrollTo(elementPostion('.contact') - 20)
              }
              }
            >
              <span className='fas fa-phone text-white'></span>  Contact
            </li>
            <li
              className='ms-1 text-white'
              onClick={() => {
                closeSidebarFunc();
                scrollTo(elementPostion('.services') - 20)
              }
              }
            >
              <span className='fas fa-globe text-white'></span> Services
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar