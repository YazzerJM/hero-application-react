import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Heroes } from './Heroes';
import './styles.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Heroes />
    </BrowserRouter>
  // </React.StrictMode>
);
