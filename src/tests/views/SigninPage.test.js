import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SigninPage from '../../views/SigninPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SigninPage />);
});


describe('Signin UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
