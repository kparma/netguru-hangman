import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';
import App from './components/app/app.container';
import registerServiceWorker from './utils/registerServiceWorker';
import store from './store';

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/app/app.container', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./components/app/app.container').default;
    render(nextApp);
  });
}

registerServiceWorker();
