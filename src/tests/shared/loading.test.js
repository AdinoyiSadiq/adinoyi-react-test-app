import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from '../../components/shared/Loading';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Loading />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());
describe('Loading', () => {
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
