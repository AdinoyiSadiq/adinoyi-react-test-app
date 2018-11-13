
import React from 'react';
// import NewPassword from '../components/layout/NewPassword';
import Forgotpassword from '../containers/Forgotpassword';
import Reset from '../components/layout/Reset';

const ForgotPasswordPage = (props) => (
  <div>
    <Reset>
      <Forgotpassword {...props} />
    </Reset>
  </div>
);

export default ForgotPasswordPage;
