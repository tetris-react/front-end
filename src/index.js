import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { StylesProvider } from '@material-ui/core/styles';
import Tetris from './Tetris';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    {/* injectFirst adds styles tags to top of the <head> tag
      allows styled-component style overrides to take precedence */}
    <StylesProvider injectFirst>
      <Tetris />
    </StylesProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
