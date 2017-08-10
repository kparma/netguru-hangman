import React from 'react';
import App from './app.component';
import Loader from '../loader/loader.component';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

const storeFake = (state) => ({
  default: () => {
  },
  subscribe: () => {
  },
  dispatch: () => {
  },
  getState: () => ({ ...state })
});

describe('App component', () => {
  let store, onLoad, fetchWord;

  beforeEach(()=> {
    onLoad = jest.fn();
    fetchWord = jest.fn();

    store = storeFake({
      app: {
        fails: []
      }
    });
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App onLoad={onLoad} fetchWord={fetchWord} />);
    expect(wrapper.find('section').length).toBe(1);
  });

  it('renders launches callback on load', () => {
    mount(<Provider store={store}><App onLoad={onLoad} fetchWord={fetchWord} /></Provider>);
    expect(onLoad).toBeCalled();
  });

  it('renders fetches word on load', () => {
    mount(<Provider store={store}><App onLoad={onLoad} fetchWord={fetchWord} /></Provider>);
    expect(fetchWord).toBeCalled();
  });

  it('renders popup on game over', () => {
    const wrapper = shallow(<App onLoad={onLoad} fetchWord={fetchWord} />);
    expect(wrapper.find('#gameover').length).toBe(0);

    wrapper.setProps({ gameOver: true });
    expect(wrapper.find('#gameover').length).toBe(1);
  });

  it('renders popup on game win', () => {
    const wrapper = shallow(<App onLoad={onLoad} fetchWord={fetchWord} />);
    expect(wrapper.find('#gamewin').length).toBe(0);

    wrapper.setProps({ gameWin: true });
    expect(wrapper.find('#gamewin').length).toBe(1);
  });

  it('renders loader', () => {
    const wrapper = shallow(<App onLoad={onLoad} fetchWord={fetchWord} loading={false} />);
    expect(wrapper.contains(<Loader />)).toBeFalsy();

    wrapper.setProps({ loading: true });
    expect(wrapper.contains(<Loader />)).toBeTruthy();
  });
})
