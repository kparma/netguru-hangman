import React from 'react';
import Fails from './fails.component';
import { shallow } from 'enzyme';

describe('Fails component', () => {
  it('render fails', () => {
    const wrapper = shallow(<Fails fails={['a', 'b', 'c']} />);
    expect(wrapper.find('h1').length).toBe(3);
  });
})
