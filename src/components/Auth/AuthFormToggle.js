import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class AuthFormToggle extends Component {
  render() {
    const { children: { props: { formtype } } } = this.props;
    const activeSignin = (formtype === 'signin' ? 'active' : null);
    const activeSignup = (formtype === 'signup' ? 'active' : null);
    return (
      <div className="auth-buttons">
        <Link className="both-links" to="/auth/signup">
          <input type="button" className={`buttons sign-up ${activeSignup}`} value="SIGN UP" />
        </Link>
        <Link className="both-links" to="/auth/signin">
          <input type="button" className={`buttons sign-in ${activeSignin}`} value="SIGN IN" />
        </Link>
      </div>
    );
  }
}

export default AuthFormToggle;
