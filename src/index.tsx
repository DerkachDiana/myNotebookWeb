import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.getElementsByTagName('body')[0].style.margin = '0';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
