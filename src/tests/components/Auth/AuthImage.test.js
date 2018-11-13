import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AuthImage from '../../../components/Auth/AuthImage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<AuthImage />);
});

describe('AuthImage', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
