import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ResetPassword } from '../../containers/ResetPassword';

let wrapped;
let mockResetPassword;
beforeEach(() => {
  mockResetPassword = jest.fn();
  wrapped = shallow(<ResetPassword resetPassword={mockResetPassword} errorMessage="Error" successMessage="Succes" />);
});
describe('ResetPassword', () => {
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
    test('functions', () => {
      const instance = wrapped.instance();
      const handleResetPasswordSpy = jest.spyOn(instance, 'handleResetPassword');
      const password = 'password';
      const confirmPassword = 'password';
      instance.setState({
        password,
        confirmPassword,
      });
      wrapped.find('form').simulate('submit', {
        preventDefault() {},
      });
      expect(handleResetPasswordSpy).toBeCalled();
      expect(mockResetPassword).toBeCalledWith({ password, confirm_password: confirmPassword }, undefined);
      handleResetPasswordSpy.mockRestore();
    });
    test('', () => {
      const instance = wrapped.instance();
      const handleChangeSpy = jest.spyOn(instance, 'handleChange');
      const password = 'pass';
      const confirmPassword = 'pass';
      wrapped.setState({
        password,
        confirmPassword,
      });
      instance.handleChange({
        target: {
          id: 'password',
          value: password,
        },
      });
      expect(wrapped.state('password')).toEqual(password);
      expect(handleChangeSpy).toBeCalled();
      handleChangeSpy.mockRestore();
    });
  });
});
