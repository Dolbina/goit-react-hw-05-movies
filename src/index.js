import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/react_lesson5">
      <App />
    </BrowserRouter>
  </StrictMode>
);
