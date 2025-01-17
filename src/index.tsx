import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './styles/index.scss';

const rootContainer = document.getElementById('root');

ReactDOM.createRoot(rootContainer!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
