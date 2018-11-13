import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignupPage from '../../views/SignupPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SignupPage />);
});

describe('SignupPage UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
