import React from 'react'


const Footer = () => {
  return (
    <footer className="footer-modern text-white py-4 px-3 mt-5" style={{ background: "#181a1b", boxShadow: "0 -2px 16px rgba(0,0,0,0.08)" }}>
      <div className="footer-content d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="footer-contact mb-3 mb-md-0">
          <h5 className="fw-bold mb-2">Quick Contact</h5>
          <ul className="list-unstyled d-flex flex-wrap align-items-center mb-0">
            <li className="me-4 d-flex align-items-center">
              <a href="tel:+2348125391892" className="footer-link d-flex align-items-center">
                <span className="fas fa-phone-alt me-2" aria-label="Phone"></span>
                <span>+234 812 539 1892</span>
              </a>
            </li>
            <li className="me-4 d-flex align-items-center">
              <a href="tel:+2347067905912" className="footer-link d-flex align-items-center">
                <span className="fas fa-phone-alt me-2" aria-label="Phone"></span>
                <span>+234 706 790 5912</span>
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a href="mailto:saniahmed813@gmail.com" className="footer-link d-flex align-items-center">
                <span className="fas fa-envelope me-2" aria-label="Email"></span>
                <span>saniahmed813@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social d-flex align-items-center">
          <a href="https://www.linkedin.com/in/ahmed-s-adam-6275991b4/" target="_blank" rel="noopener noreferrer" className="footer-social-link mx-2" aria-label="LinkedIn">
            <span className="fab fa-linkedin fa-lg text-white"></span>
          </a>
          <a href="https://github.com/ahmedsaniadamu" target="_blank" rel="noopener noreferrer" className="footer-social-link mx-2" aria-label="GitHub">
            <span className="fab fa-github fa-lg text-white"></span>
          </a>
          <a href="https://x.com/ahmedsani417623" target="_blank" rel="noopener noreferrer" className="footer-social-link mx-2" aria-label="Twitter">
            <span className="fab fa-twitter fa-lg text-white"></span>
          </a>
        </div>
      </div>
      <hr className="footer-divider my-3" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <div className="footer-bottom text-center text-sm">
        <small style={{ fontSize: 18}} className="text-secondary text-sm">&copy; {new Date().getFullYear()} Ahmed Sani. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer