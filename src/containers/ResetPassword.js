import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';
import validateAuth from '../lib/validation';
import Loading from '../components/shared/Loading';

export class ResetPassword extends Component {
  state= {
    password: '',
    confirmPassword: '',
    validationError: {},
    loading: false,
  }

  handleResetPassword = async (e) => {
    e.preventDefault();
    const { resetPassword: newPassword, history } = this.props;
    const { password, confirmPassword } = this.state;
    const userData = {
      password,
      confirm_password: confirmPassword,
    };
    const fieldNames = ['password', 'confirmPassword'];
    const validationError = validateAuth({ password, confirmPassword }, fieldNames);
    this.setState({ validationError });
    if (!validationError.status) {
      this.setState({ loading: true });
      await newPassword(userData, history);
      this.setState({ loading: false });
      this.setState({ password: '', confirmPassword: '' });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { errorMessage } = this.props;
    const {
      validationError, password, confirmPassword, loading,
    } = this.state;
    return (
      <form onSubmit={this.handleResetPassword} className="reset-form">
        <h3 className="reset-title text-center">Reset Password</h3>

        <AuthInput
          name="password"
          placeholder="New password"
          type="password"
          value={password}
          handleChange={this.handleChange}
          error={validationError}
        />
        <AuthInput
          name="confirmPassword"
          placeholder="Confirm new password"
          type="password"
          value={confirmPassword}
          handleChange={this.handleChange}
          error={validationError}
        />
        <div className="error-field">{errorMessage}</div>
        {loading ? <button disabled="disabled" type="submit" className="auth-button loading"><Loading /></button> : <Button title="SUBMIT" className="auth-button" type="submit" />}

      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
  successMessage: state.auth.successMessage,
});


export default connect(
  mapStateToProps,
  { resetPassword },
)(withRouter(ResetPassword));
