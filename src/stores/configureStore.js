import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers/';

const logger = createLogger();
const createStoreWithMiddleware = compose(
  applyMiddleware(logger),
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
