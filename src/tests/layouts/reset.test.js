import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import Reset from '../../components/layout/Reset';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(

    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <Reset />
      </MemoryRouter>
    </Root>,

  );
});
afterEach(() => wrapped.unmount());


describe('ResetPassword UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
