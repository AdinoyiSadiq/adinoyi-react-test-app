import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <Link to="/">
        <p>About</p>
      </Link>

      <Link to="/">
        <p>Contact</p>
      </Link>

      <Link to="/">
        <p>Terms</p>
      </Link>

      <Link to="/">
        <p>Privacy</p>
      </Link>
    </div>
    <div className="copyright">
      <p>&copy;Goodfellas</p>
    </div>
  </footer>
);

export default Footer;
