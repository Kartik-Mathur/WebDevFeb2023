import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lucky from './components/Lucky';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Lucky />
  </div>
);

