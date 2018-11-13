import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from '../../root';
import LandingPage from '../../views/LandingPage';
import '../../styles/styles.scss';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <LandingPage />
      </MemoryRouter>
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('Landing Page UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
