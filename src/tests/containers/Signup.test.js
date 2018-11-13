import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignupForm from '../../containers/SignupForm';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SignupForm />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('Signup UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    it('has 5 input fields and a button', () => {
      expect(wrapped.find('input').length).toEqual(5);
      expect(wrapped.find('button').length).toEqual(1);
    });
  });

  describe('when typing into fields', () => {
    beforeEach(() => {
      wrapped.find('input').first().simulate('change', { target: { id: 'firstname', value: 'john' } });
      wrapped.find('input').at(1).simulate('change', { target: { id: 'lastname', value: 'doe' } });
      wrapped.find('input').at(2).simulate('change', { target: { id: 'email', value: 'johndoe@email.com' } });
      wrapped.find('input').at(3).simulate('change', { target: { id: 'password', value: 'password' } });
      wrapped.find('input').at(4).simulate('change', { target: { id: 'confirmPassword', value: 'password' } });
      wrapped.update();
    });

    it('firstname field has been filled', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('john');
    });

    it('lastname field has been filled', () => {
      expect(wrapped.find('input').at(1).prop('value')).toEqual('doe');
    });

    it('email field has been filled', () => {
      expect(wrapped.find('input').at(2).prop('value')).toEqual('johndoe@email.com');
    });

    it('password field has been filled', () => {
      expect(wrapped.find('input').at(3).prop('value')).toEqual('password');
    });

    it('confirmPassword field has been filled', () => {
      expect(wrapped.find('input').at(4).prop('value')).toEqual('password');
    });

    it('empties fields when form is submitted', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('input').first().prop('value')).toEqual('');
      expect(wrapped.find('input').at(1).prop('value')).toEqual('');
      expect(wrapped.find('input').at(2).prop('value')).toEqual('');
      expect(wrapped.find('input').at(3).prop('value')).toEqual('');
      expect(wrapped.find('input').at(4).prop('value')).toEqual('');
    });
  });

  describe('return empty field when form is submitted', () => {
    it('empties fields when form is submitted', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('input').first().prop('value')).toEqual('');
      expect(wrapped.find('input').at(1).prop('value')).toEqual('');
      expect(wrapped.find('input').at(2).prop('value')).toEqual('');
      expect(wrapped.find('input').at(3).prop('value')).toEqual('');
      expect(wrapped.find('input').at(4).prop('value')).toEqual('');
    });
  });
});
