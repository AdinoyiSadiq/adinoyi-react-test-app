
import React from 'react';
import Reset from '../components/layout/Reset';
import Resetpassword from '../containers/ResetPassword';

const ResetPasswordPage = (props) => (
  <div>
    <Reset>
      <Resetpassword {...props} />
    </Reset>
  </div>
);

export default ResetPasswordPage;
