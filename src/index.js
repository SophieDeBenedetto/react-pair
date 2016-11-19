/* eslint-disable import/default */

import 'babel-polyfill' ;
import React from 'react';  
import { render } from 'react-dom';  
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()

render(  
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
 document.getElementById('main')
);