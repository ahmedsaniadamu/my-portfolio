
import React from 'react';

const SocialMediaLinks = ({ flexDirection, className }) => {
  return (
    <div
      className={`${flexDirection} ${className} d-flex social-links-tooltip-wrapper`}
      style={{ marginTop: '-15px', position: 'relative' }}
    >
      <a
        href="https://web.facebook.com/profile.php?id=100023749763044"
        className="fab fa-facebook text-center m-0"
        target={'_blank'}
        aria-label="Facebook"
      ></a>
      <a
        href="https://api.whatsapp.com/send?phone=2348125391892&text=%20Hello%20Ahmed"
        className="fab fa-whatsapp text-center m-0"
        target={'_blank'}
        aria-label="WhatsApp"
      >  </a>
      <a href="https://www.linkedin.com/in/ahmed-s-adam-6275991b4/"
        className="fab fa-linkedin text-center m-0"
        target={'_blank'}
        aria-label="LinkedIn"
      ></a>
      <a href="https://www.github.com/ahmedsaniadamu"
        className="fab fa-github text-center m-0"
        target={'_blank'}
        aria-label="GitHub"
      ></a>
      <a href="https://t.me/AhmedSaniAdam"
        className="fab fa-telegram text-center m-0"
        target={'_blank'}
        aria-label="Telegram"
      ></a>
    </div>
  );
};

export default SocialMediaLinks;