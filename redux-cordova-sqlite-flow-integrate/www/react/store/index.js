import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';


import reducer from '../reducers';
import rootSaga from '../actions/sagas';

const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      sagaMiddleware, // redux-saga
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware, // neat middleware that logs actions
      routerMiddleware(hashHistory)
    )
  );

  function startSaga() {
    sagaMiddleware.run(rootSaga);
  }

  return {
    store,
    startSaga,
  };
}
