import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AuthFormToggle from '../../components/Auth/AuthFormToggle';

let wrapped;
const props = { children: { props: { formtype: 'signin' } } };
beforeEach(() => {
  wrapped = shallow(<AuthFormToggle {...props} />);
});

describe('AuthFormToggle UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
