import React from "react";

const Footer = () => {
  return (
    <footer className='c-footer'>
      <div className='o-container'>
        <div className='o-grid o-grid--center'>
          <div className='o-grid__col u-3/12@md'>
            <p className='c-footer__title'>Contact</p>
            <p className='c-footer__copy'>
              I'm just here to showcase some projects I have had fun with and
              can be publicly shared.
            </p>
          </div>
          <div className='o-grid__col u-3/12@md'>
            <a href='https://www.linkedin.com/in/wegrix/'>
              <div className='c-footer__block'>
                <img
                  className='c-footer__img'
                  src="/images/icons/linkedin-in-brands.svg"
                  alt='Linkedin'
                />
              </div>
            </a>
          </div>
          <div className='o-grid__col u-3/12@md'>
            <a href='mailto:scorrea.dev@gmail.com'>
              <div className='c-footer__block'>
                <img
                  className='c-footer__img'
                  src="/images/icons/envelope-solid.svg"
                  alt='Email Me'
                />
              </div>
            </a>
          </div>
          <div className='o-grid__col u-3/12@md'>
            <a href='https://wa.me/573008753370'>
              <div className='c-footer__block'>
                <img
                  className='c-footer__img'
                  src="/images/icons/whatsapp-brands.svg"
                  alt='Whatsapp Me'
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
