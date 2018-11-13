import React from 'react';
import facebook from '../../assets/facebook-image.png';
import google from '../../assets/google-image.png';
import twitter from '../../assets/twitter-image.png';
import SocialButton from './SocialButton';


const SocialButtonList = () => (
  <div className="social-icons">
    <SocialButton
      image={facebook}
      type="facebook"
      className="facebook"
    />
    <SocialButton
      image={google}
      type="google"
      className="google"
    />
    <SocialButton
      image={twitter}
      type="twitter"
      className="twitter"
    />
  </div>
);


export default SocialButtonList;
