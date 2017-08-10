import React from 'react';
import Hangman from './hangman.component';
import { MAX_FAILS } from '../../shared/app-params';
import { shallow } from 'enzyme';

describe('Hangman component', () => {
  it('renders', () => {
    const wrapper = shallow(<Hangman />);
    expect(wrapper.find('figure').length).toBe(1);
  });

  it('renders parts of hangman', () => {
    const wrapper = shallow(<Hangman />);
    const parts = [
      'head',
      'neck',
      'torso',
      'arm-right',
      'arm-left',
      'hand-right',
      'hand-left',
      'leg-right',
      'leg-left',
      'foot-right',
      'foot-left'
    ];

    expect(wrapper.find('#head').length).toBe(0);
    for (let i = 1; i <= MAX_FAILS; i++) {
      wrapper.setProps({ fails: i });
      parts.map((part, j) => {
        if(j < i){
          expect(wrapper.find(`#${part}`).length).toBe(1);
        } else {
          expect(wrapper.find(`#${part}`).length).toBe(0);
        }
      })
    }
  });
})
