import React from 'react';
import Answer from './answer.component';
import { shallow } from 'enzyme';

describe('Answer component', () => {
  it('renders 11 boxes', () => {
    const wrapper = shallow(<Answer />);
    expect(wrapper.find('div').length).toBe(11);
  });
})
