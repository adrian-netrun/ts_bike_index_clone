import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
