import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LargeLoader from '../../components/shared/LargeLoader';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<LargeLoader />);
});

describe('LargeLoader UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
