import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import Toggler from '../../../components/Auth/AuthFormToggle';


let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <Toggler />
    </MemoryRouter>,
  );
});


describe('Toggler UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
