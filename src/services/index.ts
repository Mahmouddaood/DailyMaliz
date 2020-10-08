import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./injectors/reducers";
// eslint-disable-next-line
import rootSaga from "./injectors/sagas";

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   process.env.NODE_ENV === "development" &&
//   typeof window === "object" &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
