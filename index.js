import React from 'react';
import { render } from 'react-dom';
import 'typeface-istok-web/index.css';
import App from './src/';
import './src/assets/css/reset.css';

const renderApp = () =>
    render(
      <App />,
      document.getElementById('root'),
  );

renderApp();
