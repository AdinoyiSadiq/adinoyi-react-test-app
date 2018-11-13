import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResetPasswordPage from '../../views/ResetPasswordPage';
import ResetPassword from '../../containers/ResetPassword';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ResetPasswordPage />);
});

describe('ResetPasswordPageUI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
    it('contains the header', () => {
      expect(wrapped.contains(<ResetPassword />)).toEqual(true);
    });
  });
});
