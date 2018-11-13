import React from 'react';
import AuthFormToggle from '../Auth/AuthFormToggle';
import AuthImage from '../Auth/AuthImage';
import SocialButtonList from '../Auth/SocialButtonList';

const Auth = (props) => {
  const { children } = props;
  return (
    <div className="auth-flex">
      <AuthImage />
      <div className="auth-form">
        <AuthFormToggle {...props} />
        {children}
        <div className="or">Or</div>
        <SocialButtonList />
      </div>
    </div>
  );
};

export default Auth;
