import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);

