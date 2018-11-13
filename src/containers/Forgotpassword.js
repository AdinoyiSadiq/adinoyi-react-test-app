import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';
import validateAuth from '../lib/validation';
import Loading from '../components/shared/Loading';

export class ForgotPassword extends Component {
  state = {
    email: '',
    validationError: {},
    loading: false,
  };

  handleForgotPassword = async (e) => {
    e.preventDefault();
    const { forgotPassword: resetPassword } = this.props;
    const { email } = this.state;
    const fieldNames = ['email'];
    const validationError = validateAuth({ email }, fieldNames);
    this.setState({ validationError });
    if (!validationError.status) {
      this.setState({ loading: true });
      await resetPassword({ email });
      this.setState({ email: '' });
      this.setState({ loading: false });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { errorMessage } = this.props;
    const { email, validationError, loading } = this.state;
    return (
      <form onSubmit={this.handleForgotPassword} className="reset-form">
        <div>
          <h3 className="reset-title text-center">Forgot Password</h3>
          <AuthInput
            name="email"
            placeholder="Input Email Address"
            type="email"
            error={validationError}
            value={email}
            handleChange={this.handleChange}
          />
          <div className="error-field">{errorMessage}</div>
          {loading ? <button disabled="disabled" type="submit" className="auth-button loading"><Loading /></button> : <Button title="SUBMIT" className="auth-button" type="submit" />}
        </div>
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
  { forgotPassword },
)(ForgotPassword);
