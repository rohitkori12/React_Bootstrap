import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';

const sagaMiddleware = createSagaMiddleware();

const configureSaga = () => {
  function* rootSaga() {
    yield all([authSaga()]);
  }

  sagaMiddleware.run(rootSaga);
};

export { sagaMiddleware, configureSaga };
