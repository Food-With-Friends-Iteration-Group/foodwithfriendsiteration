import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import styles from '../assets/styles/app.scss';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('login-sign-up'));