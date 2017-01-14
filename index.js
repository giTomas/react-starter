import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './spp/assets/css/reset.css';

const renderApp = () =>
    render(
      <App />,
      document.getElementById('root')
    );

renderApp();
