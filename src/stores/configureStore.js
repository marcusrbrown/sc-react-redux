import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers/';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, router, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable hot module replacement for reducers.
    module.hot.accept('../reducers/', () => {
      const nextReducer = require('../reducers/'); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
