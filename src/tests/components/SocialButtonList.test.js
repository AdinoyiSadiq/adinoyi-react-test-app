import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialButtonList from '../../components/Auth/SocialButtonList';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SocialButtonList />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('SocialButtonList UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('SocialButtonList API', () => {
  describe('social authentication buttons', () => {
    test('navigate the user to the correct route', () => {
      expect(wrapped.find('a').first().prop('href')).toEqual('http://localhost:3000/api/auth/facebook');
      expect(wrapped.find('a').at(1).prop('href')).toEqual('http://localhost:3000/api/auth/google');
      expect(wrapped.find('a').at(2).prop('href')).toEqual('http://localhost:3000/api/auth/twitter');
    });
  });
});
