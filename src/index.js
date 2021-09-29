import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';
import booksReducer from './reducers/booksReducer'
import authorsReducer from './reducers/authorsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({books:booksReducer, authors:authorsReducer})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
