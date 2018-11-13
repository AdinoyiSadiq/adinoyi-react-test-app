import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialButton from '../../../components/Auth/SocialButton';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SocialButton />);
});

describe('SocialButton', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
