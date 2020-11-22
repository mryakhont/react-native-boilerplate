import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'Store/index.reducers';
import sagas from 'Store/index.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(sagas);

  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./index.reducers', () => {
      const nextRootReducer = require('./index.reducers');
      // @ts-ignore
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
