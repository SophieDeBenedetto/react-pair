/* eslint-disable import/default */

import 'babel-polyfill' ;
import React from 'react';  
import { render } from 'react-dom';  
import App from './components/App';

render(  
 <App />,
 document.getElementById('main')
);