import React from 'react';
import { render } from 'react-dom';
import App from './app';
// import store from './components/store';
import { Provider } from 'react-redux';
import styles from '../../../assets/styles/app.scss';

render(
  <Provider><App /></Provider>,
  document.getElementById('main-app')
)