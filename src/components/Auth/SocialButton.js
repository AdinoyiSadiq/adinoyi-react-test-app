import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const SocialButton = ({ image, className, type }) => (
  <div className="social-link">
    <a href={`${apiUrl}/api/auth/${type}`}>
      <div className={className}>
        <img src={image} alt="" />
      </div>
    </a>
  </div>
);

export default SocialButton;
