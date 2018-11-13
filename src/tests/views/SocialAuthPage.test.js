import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialAuthPage from '../../views/SocialAuthPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SocialAuthPage />);
});

describe('SocialAuthPage UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
