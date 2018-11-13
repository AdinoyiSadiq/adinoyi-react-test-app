import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProfilePage from '../../views/ProfilePage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ProfilePage />);
});

describe('Profile UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
