import React from 'react';
import AuthImage from '../Auth/AuthImage';

const Auth = (props) => {
  const { children } = props;
  return (
    <div className="auth-flex">
      <AuthImage />
      <div className="auth-form">
        {children}
      </div>
    </div>
  );
};

export default Auth;
