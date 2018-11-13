import React from 'react';
import SignupForm from '../containers/SignupForm';
import Auth from '../components/layout/Auth';


const Signup = (props) => (
  <div>
    <Auth><SignupForm {...props} /></Auth>
  </div>
);

export default Signup;
