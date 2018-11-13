import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import forgotPassword, { ForgotPassword } from '../../containers/Forgotpassword';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let wrapped;
let mockForgotPassword;
beforeEach(() => {
  mockForgotPassword = jest.fn();
  wrapped = shallow(
    <ForgotPassword forgotPassword={mockForgotPassword} errorMessage="Error" successMessage="Succes" />,
  );
});
describe('ForgotPassword', () => {
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
    test('has two input types', () => {
      const instance = wrapped.instance();
      const handleForgotPasswordSpy = jest.spyOn(instance, 'handleForgotPassword');
      const email = 'dummy@email.com';
      instance.setState({
        email,
      });
      wrapped.find('form').simulate('submit', {
        preventDefault() {

        },
      });
      expect(handleForgotPasswordSpy).toBeCalled();
      expect(mockForgotPassword).toBeCalledWith({ email });
      handleForgotPasswordSpy.mockRestore();
    });
    test('', () => {
      const instance = wrapped.instance();
      const handleChangeSpy = jest.spyOn(instance, 'handleChange');
      const email = 'dummy@email.com';
      wrapped.setState({
        email,
      });
      instance.handleChange({
        target: {
          id: 'email', value: email,
        },
      });
      expect(wrapped.state('email')).toEqual(email);
      expect(handleChangeSpy).toBeCalled();
      handleChangeSpy.mockRestore();
    });
  });
  test('should render ForgetPassword Component with redux store attached', () => {
    const store = mockStore({});
    shallow(
      <forgotPassword store={store} forgotPassword={mockForgotPassword} />,
    );
  });
});
