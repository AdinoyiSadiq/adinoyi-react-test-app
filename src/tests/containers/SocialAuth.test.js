import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Root from '../../root';
import SocialAuth from '../../containers/SocialAuth';

let wrapped;
const history = {
  location: {
    search: {
      token: 'token',
      userId: 'userId',
    },
  },
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SocialAuth history={history} />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('SocialAuth UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    test('should contain a loader', () => {
      expect(wrapped.exists('.large-spinner')).toEqual(true);
    });
  });
});
