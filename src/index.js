import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CounteriesProvider from './context/counteries';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CounteriesProvider>
      <App />
    </CounteriesProvider>
  </BrowserRouter>
);
