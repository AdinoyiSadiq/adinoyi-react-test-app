import React from 'react';

const AuthInput = (props) => {
  const {
    value, error, name, type, placeholder, handleChange,
  } = props;
  return (
    <div className="auth-input-wrapper">
      <label className="sr-only" htmlFor={name}>{name}</label>
      <input
        type={type || 'text'}
        className="auth-field"
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={handleChange}
      />
      <div className="error-field">{error[name]}</div>
    </div>);
};

export default AuthInput;
