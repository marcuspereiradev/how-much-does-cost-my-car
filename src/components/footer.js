import React from 'react';
import '../styles/footer.scss';

const Footer = () => (
  <footer className='footer'>
    &copy; {new Date().getFullYear()} created by <a href='https://github.com/marcuspereiradev/how-much-does-cost-my-car' >Marcus Pereira</a>
  </footer>
)

export default Footer;
