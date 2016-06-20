import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers/';

const logger = createLogger();
const createStoreWithMiddleware = compose(
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
