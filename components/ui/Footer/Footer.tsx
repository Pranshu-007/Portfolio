import React from 'react';
import styles from './Footer.module.css';
import StyledLink from '@/components/ui/StyledLink/StyledLink';

const Footer = () => (
  <footer className={styles.footer} aria-label="Footer Section">
    <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
    <div>Made with ❤️ by <StyledLink aria-label='Pranshu Shukla LinkedIn Profile' external href="https://www.linkedin.com/in/aman-arya-79a52121b">
      Pranshu Shukla
    </StyledLink></div>
  </footer>
);

export default Footer;
