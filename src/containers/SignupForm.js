import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';
import validateAuth from '../lib/validation';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';
import '../styles/styles.scss';

const initialState = {
  // input fields
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',

  validationError: {},
};
class SignupForm extends Component {
  state = initialState;


  handleSubmit = (event) => {
    event.preventDefault();

    const {
      firstname, lastname, email, password, confirmPassword,
    } = this.state;

    const fieldNames = [
      'firstname',
      'lastname',
      'email',
      'password',
      'confirmPassword',
    ];

    const fields = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    };

    // run validation rules for each field
    const validationError = validateAuth(fields, fieldNames);

    this.setState({ validationError });

    const body = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    const { signup: signupUser, history } = this.props;

    // processes user sign up when validation rules
    // pass for all fields
    if (!validationError.status) {
      signupUser(body, () => history.push('/user/profile'));
      this.setState(initialState);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }


  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      validationError,
    } = this.state;

    const { message } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <p className="error-field">{message}</p>
        <AuthInput
          error={validationError}
          value={firstname}
          handleChange={this.handleChange}
          name="firstname"
          placeholder="Firstname"
        />

        <AuthInput
          error={validationError}
          value={lastname}
          handleChange={this.handleChange}
          name="lastname"
          placeholder="Lastname"
        />

        <AuthInput
          error={validationError}
          value={email}
          handleChange={this.handleChange}
          name="email"
          type="email"
          placeholder="E-mail"
        />

        <AuthInput
          error={validationError}
          value={password}
          handleChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />

        <AuthInput
          error={validationError}
          value={confirmPassword}
          handleChange={this.handleChange}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <Button title="SIGN UP" className="auth-button" type="submit" />
      </form>

    );
  }
}


const mapStateToProps = (state) => ({ message: state.auth.errorMessage });

export default connect(mapStateToProps, { signup })(SignupForm);
