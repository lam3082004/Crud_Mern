import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    {/* <p class="footkeodai">     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis cursus nisi vel fringilla. Vestibulum nec ligula id mauris varius gravida. Vestibulum hendrerit elit quis sapien sollicitudin venenatis. Vivamus auctor condimentum auctor. Proin nec sapien purus. Nullam mattis est malesuada, eleifend enim a, cursus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lacinia erat eu nulla mollis, in euismod nisi vehicula. Phasellus eu ex a nunc ultrices placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent et dui molestie mi vehicula fringilla. Donec auctor mi non tortor cursus ultricies. Aenean ut lacus vitae dui aliquam ullamcorper sit amet sit amet metus. Vivamus ligula mi, faucibus a leo at, facilisis rhoncus felis. Nunc nec quam eros. Pellentesque ipsum dolor, elementum ut faucibus vel, ullamcorper id lacus.
      </p> */}
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items   '>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Learn in</Link>
            <Link to='/'>academic level</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Call capital</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href="https://t.me/lam3082004">Telegram</a>
            <a href="https://www.facebook.com/profile.php?id=100016689363363">Facebook</a>
            <a href="https://zalo.me/0948816373">Zalo</a>
            <a href="https://t.me/lam3082004">Skype</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Teams</h2>
            <Link to='/'>Bùi Tùng Lâm</Link>
            <Link to='/'>Trần Mạnh Khải</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to=''>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              EQualEdu
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>EQualEdu © 2021</small>
          <div class='social-icons'>
            {/* <a href='https://www.facebook.com/profile.php?id=100016689363363'>  */}
                <Link
                  class='social-icon-link facebook'
                  href='https://www.facebook.com/profile.php?id=100016689363363'
                  target='_blank'
                  aria-label='Facebook'
                >
                <i class='fab fa-facebook-f' />
              </Link>
            {/* </a> */}
            {/* <a href='https://www.facebook.com/profile.php?id=100016689363363'> */}
              <Link
                class='social-icon-link instagram'
                // to='/'
                target='_blank'
                aria-label='Instagram'
              > 
                <i class='fab fa-github' />
              </Link>
            {/* </a> */}
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-medium' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

