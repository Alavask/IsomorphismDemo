import {createStore, applyMiddleware, Middleware, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggingService } from '../middleware/loggingService';
import rootReducer from './rootReducer';
import {IStore} from "../types/IStore";

export function configureStore(initialState?: IStore): Store<IStore> {

  const middlewares: Middleware[] = [
    thunk, loggingService

  ];

  const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middlewares),
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(['./counter', './graph'], () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}