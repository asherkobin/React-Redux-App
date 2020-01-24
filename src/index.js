import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./reducers";

const middlewareSpy = store => next => action => {
  console.log("The Government Sees All", action.payload);
  next(action)
}

const store = createStore(reducer, applyMiddleware(middlewareSpy, thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
