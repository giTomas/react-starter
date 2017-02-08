import React from 'react';
import { render } from 'react-dom';
import App from './src/app';
import './src/assets/css/reset.css';

const renderApp = () =>
    render(
      <App />,
      document.getElementById('root'),
  );

renderApp();
